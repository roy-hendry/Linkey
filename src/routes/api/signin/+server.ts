import type { RequestHandler } from "./$types";
import { adminAuth } from "$lib/server/admin";
import { error, json } from "@sveltejs/kit";

// FYI cookies are values that are defined on the server and sent to the browser and stored client-side

// User for cookie based auth
export const POST: RequestHandler = async ({ request, cookies }) => {
  // Pass ID token to server
  const { idToken } = await request.json();

  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

  // Decode the ID token securely on the Firebase server
  const decodedIdToken = await adminAuth.verifyIdToken(idToken);

  // Check if user signed in within the last 5 minutes
  if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
    // Create session cookie
    const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

    // Set session cookie
    const options = {
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
      // We set the path to / so that the cookie is sent to all routes
      path: "/",
    };

    // The cookie needs to be called "__session" for Firebase to recognise it
    cookies.set("__session", cookie, options);

    return json({ status: "signedIn" });
  } else {
    throw error(401, "Recent sign in required!");
  }
};

export const DELETE: RequestHandler = async ({ cookies }) => {
  cookies.delete("__session", { path: "/" });
  return json({ status: "signedOut" });
};
