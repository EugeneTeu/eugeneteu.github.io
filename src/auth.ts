import {  type SolidAuthConfig } from "@auth/solid-start";
import google from "@auth/core/providers/google";

export const authOpts: SolidAuthConfig = {
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: false,
};
