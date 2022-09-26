import { Fragment, useState } from 'react'
import { Container, Header, Tag } from './components'
import { useTimeoutFn } from 'react-use'
import { Transition } from '@headlessui/react'
import { Tab } from '@headlessui/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function App() {
    const [count, setCount] = useState(0)
    const [categories] = useState({
        About: [],
        Experience: [],
    })
    return (
        <div>
            <Header />
            <div className="w-full bg-black">
                <div className="max-w-2xl mx-auto shadow-lg py-14 sm:py-12 md:py-10 ">
                    <img
                        className="w-full rounded"
                        src="../src/assets/profile-1.jpg"
                    />
                </div>
            </div>
            <div className="max-w-5xl mx-1 sm:mx-10 md:mx-auto mt-6">
                <Tab.Group defaultIndex={0}>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white text-bold',
                                        'ring-white ring-opacity-60 ring-offset-2',
                                        selected
                                            ? 'bg-white/[0.12]'
                                            : 'text-blue-100 hover:bg-white/[0.05] hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-6">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'rounded-xl p-3 text-sm font-medium leading-5 text-white text-bold',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <ul>
                                    {/* {posts.map((post) => (
                                        <li
                                            key={post.id}
                                            className="relative rounded-md p-3 hover:bg-gray-100"
                                        >
                                            <h3 className="text-sm font-medium leading-5">
                                                {post.title}
                                            </h3>

                                            <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                                <li>{post.date}</li>
                                                <li>&middot;</li>
                                                <li>
                                                    {post.commentCount} comments
                                                </li>
                                                <li>&middot;</li>
                                                <li>
                                                    {post.shareCount} shares
                                                </li>
                                            </ul>

                                            <a
                                                href="#"
                                                className={classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                )}
                                            />
                                        </li>
                                    ))} */}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <div className="max-w-5xl mx-auto mt-6 bg-grey"></div>
        </div>
    )
}

export default App
