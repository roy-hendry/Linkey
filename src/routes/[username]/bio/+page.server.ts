import type { PageServerLoad } from "./$types";
import { adminAuth, adminDB } from "$lib/server/admin";
import { error } from "@sveltejs/kit";

export const load = (async ({ cookies }) => {
  // Get the session cookie
  const sessionCookie = cookies.get("__session");

  try {
    // Verify the session cookie
    // This will hold things like the user's UID, email, etc.
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie!);
    // Get the user's document from Firestore
    const userDoc = await adminDB
      .collection("users")
      .doc(decodedClaims.uid)
      .get();
    const userData = userDoc.data();

    return {
      bio: userDoc.data?.bio,
    };
  } catch (e) {
    console.log(e);
    // redirect(301, "/login");
    throw error(401, "Unauthorized request!");
  }
}) satisfies PageServerLoad;

// How we access the Firebase Admin SDK
