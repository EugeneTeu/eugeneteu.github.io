// node_modules/solid-js/dist/solid.js
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    comparator: options.equals || undefined
  };
  const setter = (value2) => {
    if (typeof value2 === "function") {
      if (Transition && Transition.running && Transition.sources.has(s))
        value2 = value2(s.tValue);
      else
        value2 = value2(s.value);
    }
    return writeSignal(s, value2);
  };
  return [readSignal.bind(s), setter];
}
function createRenderEffect(fn, value, options) {
  const c = createComputation(fn, value, false, STALE);
  if (Scheduler && Transition && Transition.running)
    Updates.push(c);
  else
    updateComputation(c);
}
function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c = createComputation(fn, value, true, 0);
  c.observers = null;
  c.observerSlots = null;
  c.comparator = options.equals || undefined;
  if (Scheduler && Transition && Transition.running) {
    c.tState = STALE;
    Updates.push(c);
  } else
    updateComputation(c);
  return readSignal.bind(c);
}
function untrack(fn) {
  if (!ExternalSourceConfig && Listener === null)
    return fn();
  const listener = Listener;
  Listener = null;
  try {
    if (ExternalSourceConfig)
      return ExternalSourceConfig.untrack(fn);
    return fn();
  } finally {
    Listener = listener;
  }
}
function onCleanup(fn) {
  if (Owner === null)
    ;
  else if (Owner.cleanups === null)
    Owner.cleanups = [fn];
  else
    Owner.cleanups.push(fn);
  return fn;
}
function startTransition(fn) {
  if (Transition && Transition.running) {
    fn();
    return Transition.done;
  }
  const l = Listener;
  const o = Owner;
  return Promise.resolve().then(() => {
    Listener = l;
    Owner = o;
    let t;
    if (Scheduler || SuspenseContext) {
      t = Transition || (Transition = {
        sources: new Set,
        effects: [],
        promises: new Set,
        disposed: new Set,
        queue: new Set,
        running: true
      });
      t.done || (t.done = new Promise((res) => t.resolve = res));
      t.running = true;
    }
    runUpdates(fn, false);
    Listener = Owner = null;
    return t ? t.done : undefined;
  });
}
function createContext(defaultValue, options) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
function useContext(context) {
  let value;
  return Owner && Owner.context && (value = Owner.context[context.id]) !== undefined ? value : context.defaultValue;
}
function children(fn) {
  const children2 = createMemo(fn);
  const memo = createMemo(() => resolveChildren(children2()));
  memo.toArray = () => {
    const c = memo();
    return Array.isArray(c) ? c : c != null ? [c] : [];
  };
  return memo;
}
function readSignal() {
  const runningTransition = Transition && Transition.running;
  if (this.sources && (runningTransition ? this.tState : this.state)) {
    if ((runningTransition ? this.tState : this.state) === STALE)
      updateComputation(this);
    else {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(this), false);
      Updates = updates;
    }
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  if (runningTransition && Transition.sources.has(this))
    return this.tValue;
  return this.value;
}
function writeSignal(node, value, isComp) {
  let current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
  if (!node.comparator || !node.comparator(current, value)) {
    if (Transition) {
      const TransitionRunning = Transition.running;
      if (TransitionRunning || !isComp && Transition.sources.has(node)) {
        Transition.sources.add(node);
        node.tValue = value;
      }
      if (!TransitionRunning)
        node.value = value;
    } else
      node.value = value;
    if (node.observers && node.observers.length) {
      runUpdates(() => {
        for (let i = 0;i < node.observers.length; i += 1) {
          const o = node.observers[i];
          const TransitionRunning = Transition && Transition.running;
          if (TransitionRunning && Transition.disposed.has(o))
            continue;
          if (TransitionRunning ? !o.tState : !o.state) {
            if (o.pure)
              Updates.push(o);
            else
              Effects.push(o);
            if (o.observers)
              markDownstream(o);
          }
          if (!TransitionRunning)
            o.state = STALE;
          else
            o.tState = STALE;
        }
        if (Updates.length > 1e6) {
          Updates = [];
          if (false)
            ;
          throw new Error;
        }
      }, false);
    }
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn)
    return;
  cleanNode(node);
  const time = ExecCount;
  runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time);
  if (Transition && !Transition.running && Transition.sources.has(node)) {
    queueMicrotask(() => {
      runUpdates(() => {
        Transition && (Transition.running = true);
        Listener = Owner = node;
        runComputation(node, node.tValue, time);
        Listener = Owner = null;
      }, false);
    });
  }
}
function runComputation(node, value, time) {
  let nextValue;
  const owner = Owner, listener = Listener;
  Listener = Owner = node;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    if (node.pure) {
      if (Transition && Transition.running) {
        node.tState = STALE;
        node.tOwned && node.tOwned.forEach(cleanNode);
        node.tOwned = undefined;
      } else {
        node.state = STALE;
        node.owned && node.owned.forEach(cleanNode);
        node.owned = null;
      }
    }
    node.updatedAt = time + 1;
    return handleError(err);
  } finally {
    Listener = listener;
    Owner = owner;
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.updatedAt != null && "observers" in node) {
      writeSignal(node, nextValue, true);
    } else if (Transition && Transition.running && node.pure) {
      Transition.sources.add(node);
      node.tValue = nextValue;
    } else
      node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: Owner ? Owner.context : null,
    pure
  };
  if (Transition && Transition.running) {
    c.state = 0;
    c.tState = state;
  }
  if (Owner === null)
    ;
  else if (Owner !== UNOWNED) {
    if (Transition && Transition.running && Owner.pure) {
      if (!Owner.tOwned)
        Owner.tOwned = [c];
      else
        Owner.tOwned.push(c);
    } else {
      if (!Owner.owned)
        Owner.owned = [c];
      else
        Owner.owned.push(c);
    }
  }
  if (ExternalSourceConfig && c.fn) {
    const [track, trigger] = createSignal(undefined, {
      equals: false
    });
    const ordinary = ExternalSourceConfig.factory(c.fn, trigger);
    onCleanup(() => ordinary.dispose());
    const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose());
    const inTransition = ExternalSourceConfig.factory(c.fn, triggerInTransition);
    c.fn = (x) => {
      track();
      return Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
    };
  }
  return c;
}
function runTop(node) {
  const runningTransition = Transition && Transition.running;
  if ((runningTransition ? node.tState : node.state) === 0)
    return;
  if ((runningTransition ? node.tState : node.state) === PENDING)
    return lookUpstream(node);
  if (node.suspense && untrack(node.suspense.inFallback))
    return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (runningTransition && Transition.disposed.has(node))
      return;
    if (runningTransition ? node.tState : node.state)
      ancestors.push(node);
  }
  for (let i = ancestors.length - 1;i >= 0; i--) {
    node = ancestors[i];
    if (runningTransition) {
      let top = node, prev = ancestors[i + 1];
      while ((top = top.owner) && top !== prev) {
        if (Transition.disposed.has(top))
          return;
      }
    }
    if ((runningTransition ? node.tState : node.state) === STALE) {
      updateComputation(node);
    } else if ((runningTransition ? node.tState : node.state) === PENDING) {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(node, ancestors[0]), false);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates)
    return fn();
  let wait = false;
  if (!init)
    Updates = [];
  if (Effects)
    wait = true;
  else
    Effects = [];
  ExecCount++;
  try {
    const res = fn();
    completeUpdates(wait);
    return res;
  } catch (err) {
    if (!wait)
      Effects = null;
    Updates = null;
    handleError(err);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    if (Scheduler && Transition && Transition.running)
      scheduleQueue(Updates);
    else
      runQueue(Updates);
    Updates = null;
  }
  if (wait)
    return;
  let res;
  if (Transition) {
    if (!Transition.promises.size && !Transition.queue.size) {
      const sources = Transition.sources;
      const disposed = Transition.disposed;
      Effects.push.apply(Effects, Transition.effects);
      res = Transition.resolve;
      for (const e2 of Effects) {
        "tState" in e2 && (e2.state = e2.tState);
        delete e2.tState;
      }
      Transition = null;
      runUpdates(() => {
        for (const d of disposed)
          cleanNode(d);
        for (const v of sources) {
          v.value = v.tValue;
          if (v.owned) {
            for (let i = 0, len = v.owned.length;i < len; i++)
              cleanNode(v.owned[i]);
          }
          if (v.tOwned)
            v.owned = v.tOwned;
          delete v.tValue;
          delete v.tOwned;
          v.tState = 0;
        }
        setTransPending(false);
      }, false);
    } else if (Transition.running) {
      Transition.running = false;
      Transition.effects.push.apply(Transition.effects, Effects);
      Effects = null;
      setTransPending(true);
      return;
    }
  }
  const e = Effects;
  Effects = null;
  if (e.length)
    runUpdates(() => runEffects(e), false);
  if (res)
    res();
}
function runQueue(queue) {
  for (let i = 0;i < queue.length; i++)
    runTop(queue[i]);
}
function scheduleQueue(queue) {
  for (let i = 0;i < queue.length; i++) {
    const item = queue[i];
    const tasks = Transition.queue;
    if (!tasks.has(item)) {
      tasks.add(item);
      Scheduler(() => {
        tasks.delete(item);
        runUpdates(() => {
          Transition.running = true;
          runTop(item);
        }, false);
        Transition && (Transition.running = false);
      });
    }
  }
}
function lookUpstream(node, ignore) {
  const runningTransition = Transition && Transition.running;
  if (runningTransition)
    node.tState = 0;
  else
    node.state = 0;
  for (let i = 0;i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      const state = runningTransition ? source.tState : source.state;
      if (state === STALE) {
        if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount))
          runTop(source);
      } else if (state === PENDING)
        lookUpstream(source, ignore);
    }
  }
}
function markDownstream(node) {
  const runningTransition = Transition && Transition.running;
  for (let i = 0;i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (runningTransition ? !o.tState : !o.state) {
      if (runningTransition)
        o.tState = PENDING;
      else
        o.state = PENDING;
      if (o.pure)
        Updates.push(o);
      else
        Effects.push(o);
      o.observers && markDownstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(), s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (Transition && Transition.running && node.pure) {
    if (node.tOwned) {
      for (i = node.tOwned.length - 1;i >= 0; i--)
        cleanNode(node.tOwned[i]);
      delete node.tOwned;
    }
    reset(node, true);
  } else if (node.owned) {
    for (i = node.owned.length - 1;i >= 0; i--)
      cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = node.cleanups.length - 1;i >= 0; i--)
      node.cleanups[i]();
    node.cleanups = null;
  }
  if (Transition && Transition.running)
    node.tState = 0;
  else
    node.state = 0;
}
function reset(node, top) {
  if (!top) {
    node.tState = 0;
    Transition.disposed.add(node);
  }
  if (node.owned) {
    for (let i = 0;i < node.owned.length; i++)
      reset(node.owned[i]);
  }
}
function castError(err) {
  if (err instanceof Error)
    return err;
  return new Error(typeof err === "string" ? err : "Unknown error", {
    cause: err
  });
}
function runErrors(err, fns, owner) {
  try {
    for (const f of fns)
      f(err);
  } catch (e) {
    handleError(e, owner && owner.owner || null);
  }
}
function handleError(err, owner = Owner) {
  const fns = ERROR && owner && owner.context && owner.context[ERROR];
  const error = castError(err);
  if (!fns)
    throw error;
  if (Effects)
    Effects.push({
      fn() {
        runErrors(error, fns, owner);
      },
      state: STALE
    });
  else
    runErrors(error, fns, owner);
}
function resolveChildren(children2) {
  if (typeof children2 === "function" && !children2.length)
    return resolveChildren(children2());
  if (Array.isArray(children2)) {
    const results = [];
    for (let i = 0;i < children2.length; i++) {
      const result = resolveChildren(children2[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children2;
}
function createProvider(id, options) {
  return function provider(props) {
    let res;
    createRenderEffect(() => res = untrack(() => {
      Owner.context = {
        ...Owner.context,
        [id]: props.value
      };
      return children(() => props.children);
    }), undefined);
    return res;
  };
}
var equalFn = (a, b) => a === b;
var $PROXY = Symbol("solid-proxy");
var $TRACK = Symbol("solid-track");
var $DEVCOMP = Symbol("solid-dev-component");
var signalOptions = {
  equals: equalFn
};
var ERROR = null;
var runEffects = runQueue;
var STALE = 1;
var PENDING = 2;
var UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var Owner = null;
var Transition = null;
var Scheduler = null;
var ExternalSourceConfig = null;
var Listener = null;
var Updates = null;
var Effects = null;
var ExecCount = 0;
var [transPending, setTransPending] = /* @__PURE__ */ createSignal(false);
var SuspenseContext;
var FALLBACK = Symbol("fallback");

// src/components/context/theme.context.tsx
var defaultState = {
  mode: "dark" /* dark */
};
var ThemeContext = createContext([
  defaultState,
  {
    changeMode: () => {
      return;
    }
  }
]);
var useTheme = () => useContext(ThemeContext);

// src/components/BentoBox.tsx
var defaultLight = "bg-gray-200";
var defaultDark = "dark:bg-gray-800";
var BentoBox = ({
  backgroundDark,
  backgroundLight,
  children: children2
}) => {
  const bgLight = backgroundLight ?? defaultLight;
  const bgDark = backgroundDark ?? defaultDark;
  return /* @__PURE__ */ React.createElement("div", {
    class: `rounded-lg border-solid px-6 py-6 w-full h-fit ${bgLight} ${bgDark} `
  }, children2);
};
var BentoBox_default = BentoBox;

// src/components/Tag.tsx
var Tag = ({ label, custom }) => {
  return /* @__PURE__ */ React.createElement("span", {
    class: `transition duration-150 transform hover:-translate-y-1 hover:scale-110 ease-in-out inline-block rounded-full px-3 py-1 text-sm text-white dark:text-black dark:font-semibold mr-2 mb-2 ${custom}`
  }, label);
};
var Tag_default = Tag;

// src/content/content.tsx
function Divider() {
  return /* @__PURE__ */ React.createElement("div", {
    class: "animate-fadeIn my-6"
  });
}
function Hero() {
  return /* @__PURE__ */ React.createElement(Fragment, null, /* @__PURE__ */ React.createElement("div", {
    class: `max-w-5xl mx-5 sm:mx-10 md:mx-auto mt-6`
  }, /* @__PURE__ */ React.createElement("article", {
    class: "mx-auto prose prose-md prose-normal dark:prose-invert"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "text-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    class: "mb-1"
  }, "Eugene Teu"), /* @__PURE__ */ React.createElement("h2", {
    class: "mt-2"
  }, "Software Engineer")))));
}
function Socials() {
  return /* @__PURE__ */ React.createElement("div", {
    class: `max-w-5xl mx-5 sm:mx-10 md:mx-auto mt-6`
  }, /* @__PURE__ */ React.createElement("article", {
    class: "prose prose-md lg:prose-xl prose-normal dark:prose-invert"
  }, /* @__PURE__ */ React.createElement("h1", null, "Socials"), /* @__PURE__ */ React.createElement("div", {
    class: "not-prose flex justify-center"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/in/eugeneteu"
  }, /* @__PURE__ */ React.createElement("img", {
    alt: "Tagnkedin",
    class: "w-16 h-16 mx-2",
    src: "/Tagnkedin.svg"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/EugeneTeu"
  }, /* @__PURE__ */ React.createElement("img", {
    alt: "github",
    class: "w-16 h-16 mx-2",
    src: "/github.svg"
  }))), /* @__PURE__ */ React.createElement("h4", null, "\xA9 2024 Eugene Teu. All rights reserved.")));
}
function Skills() {
  return /* @__PURE__ */ React.createElement("article", {
    class: "prose prose-md lg:prose-xl prose-normal dark:prose-invert"
  }, /* @__PURE__ */ React.createElement("h1", null, "Skills"), /* @__PURE__ */ React.createElement("div", {
    class: "not-prose  sd:flex-col md:flex-row"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "basis-1 md:basis-1/2"
  }, /* @__PURE__ */ React.createElement("h4", null, "Web Technologies"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement(Tag_default, {
    label: "ReactJS",
    custom: "bg-blue-800"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "Javascript",
    custom: "bg-indigo-500"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "HTML/CSS",
    custom: "bg-indigo-500"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "SoTagdJS",
    custom: "bg-blue-500"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "Relay",
    custom: "bg-purple-800"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "VueJS",
    custom: "bg-purple-700"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "Graphql",
    custom: "bg-yellow-600"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "NodeJS",
    custom: "bg-orange-500"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "ExpressJS",
    custom: "bg-red-800"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "NestJS",
    custom: "bg-red-700"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "Lucene/Elasticsearch",
    custom: "bg-orange-800"
  }))), /* @__PURE__ */ React.createElement("div", {
    class: "basis-1 md:basis-1/2"
  }, /* @__PURE__ */ React.createElement("h4", null, "Languages"), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "Typescript",
    custom: "bg-blue-800"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "Javascript",
    custom: "bg-indigo-600"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "Java",
    custom: "bg-yellow-800"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "C++",
    custom: "bg-indigo-500"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "Python",
    custom: "bg-purple-700"
  }), /* @__PURE__ */ React.createElement(Tag_default, {
    label: "Hack/php",
    custom: "bg-indigo-800"
  }))), /* @__PURE__ */ React.createElement("h3", null, "Using the newest Technologies excites me"));
}
function Experience() {
  return /* @__PURE__ */ React.createElement("article", {
    class: "prose prose-md lg:prose-xl prose-normal dark:prose-invert"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "flex flex-col md:flex-row"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "basis-full md:basis-1/2"
  }, /* @__PURE__ */ React.createElement("h1", null, "Experience"), /* @__PURE__ */ React.createElement("p", null, "I have extensive experience in the software engineering field and have a proven abiTagty in deTagvering poTagshed products."), /* @__PURE__ */ React.createElement("p", null, "I am currently working at Meta as a full stack software engineer")), /* @__PURE__ */ React.createElement("div", {
    class: "basis-full md:basis-1/2"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement(BentoBox_default, {
    backgroundDark: "dark:bg-gray-700",
    backgroundLight: "bg-gray-100"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "px-6"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Meta"), ", Full Stack Software Engineer (2022-)"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Coinhall"), ", Founding Engineer (2021-2022)"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Sprinklr"), ", Backend Developer Intern (2021)"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Shopee"), ", Backend Developer Intern (2021)"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Shopee"), ", Frontend Developer Intern (2020)")))), /* @__PURE__ */ React.createElement("h3", null, "I thrive in Collaborative Environments"));
}
function Intro() {
  return /* @__PURE__ */ React.createElement("article", {
    class: "prose prose-md lg:prose-xl prose-normal dark:prose-invert"
  }, /* @__PURE__ */ React.createElement("h1", null, "About"), /* @__PURE__ */ React.createElement("p", null, "Hello there, my name is Eugene Teu and I am currently a full time Software Engineer based in sunny Singapore"), /* @__PURE__ */ React.createElement("p", null, "I graduated in 2022 with a Bachelor Of Computing (Computer Science) from the National University Of Singapore"), /* @__PURE__ */ React.createElement("h3", null, "I speciaTagse in Full Stack Web Development"));
}
function RoundedAvatar() {
  return /* @__PURE__ */ React.createElement("div", {
    class: "w-full flex"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "mx-auto"
  }, /* @__PURE__ */ React.createElement("img", {
    alt: "profile picture of eugene teu",
    class: "dark:animate-pulseWhite animate-pulseBlack object-cover p-1 w-32 h-32 rounded-full ring-2 dark:ring-gray-700",
    src: "./profile-2.jpg"
  })));
}

// src/routes/index.tsx
function Home() {
  const [state] = useTheme();
  return /* @__PURE__ */ React.createElement("main", {
    class: "bg-white dark:bg-gray-900 min-h-screen"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    class: "pt-6"
  }, RoundedAvatar(), /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement("div", {
    class: `max-w-5xl mx-5 sm:mx-10 md:mx-auto lg:mx-auto`
  }, /* @__PURE__ */ React.createElement("div", {
    class: "md:mx-auto md:w-fit"
  }, /* @__PURE__ */ React.createElement(BentoBox_default, null, Intro()), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(BentoBox_default, null, Experience()), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(BentoBox_default, null, Skills()), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(BentoBox_default, null, Socials()), /* @__PURE__ */ React.createElement("div", {
    class: "pb-6"
  }))))));
}
export {
  Home as default
};
