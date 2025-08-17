import { SolidAuth } from "@auth/solid-start";
import { authOpts } from "~/auth";

export const { GET, POST } = SolidAuth(authOpts)