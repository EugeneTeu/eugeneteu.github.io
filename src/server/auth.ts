import google from "@auth/core/providers/google";
import { SolidAuthConfig } from "@solid-mediakit/auth/types";

declare module "@auth/core/types" {
  export interface Session {
    user?: DefaultSession["user"];
  }
}

export const authOpts: SolidAuthConfig = {
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: false,
  basePath: import.meta.env.VITE_AUTH_PATH,
};
