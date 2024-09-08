import { a as adminAuth } from "../../../../chunks/admin.js";
import { j as json, e as error } from "../../../../chunks/index.js";
const POST = async ({ request, cookies }) => {
  const { idToken } = await request.json();
  const expiresIn = 60 * 60 * 24 * 5 * 1e3;
  const decodedIdToken = await adminAuth.verifyIdToken(idToken);
  if ((/* @__PURE__ */ new Date()).getTime() / 1e3 - decodedIdToken.auth_time < 5 * 60) {
    const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn });
    const options = {
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
      // We set the path to / so that the cookie is sent to all routes
      path: "/"
    };
    cookies.set("__session", cookie, options);
    return json({ status: "signedIn" });
  } else {
    throw error(401, "Recent sign in required!");
  }
};
const DELETE = async ({ cookies }) => {
  cookies.delete("__session", { path: "/" });
  return json({ status: "signedOut" });
};
export {
  DELETE,
  POST
};
