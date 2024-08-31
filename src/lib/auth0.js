import { initAuth0 } from "@auth0/nextjs-auth0";

const auth0 = initAuth0({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  domain: process.env.AUTH0_DOMAIN,
  scope: "openid profile",
  redirectUri: "http://localhost:3000/api/auth/callback",
  postLogoutRedirectUri: "http://localhost:3000/",
  session: {
    cookieSecret: process.env.COOKIE_SECRET,
    cookieLifetime: 60 * 60 * 8, // 8 hours
  },
});

export default auth0;
