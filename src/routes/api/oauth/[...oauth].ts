import OAuth, { type Configuration } from "start-oauth";
import { oauthSignIn } from "~/lib/server";

const config: Configuration = {
  password: process.env.SESSION_SECRET!,
  google: {
    id: process.env.GOOGLE_CLIENT_ID!,
    secret: process.env.GOOGLE_CLIENT_SECRET!
  },
  handler: async ({ email }, redirectTo) => oauthSignIn(email, redirectTo)
};

export const GET = OAuth(config);