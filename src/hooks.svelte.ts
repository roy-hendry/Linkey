import { adminAuth } from "$lib/server/admin";
import type { Handle } from "@sveltejs/kit";

// Svelte hooks allow you to run middleware that runs on every server request.

// This code will be very similar to what we did regarding the verification of the user's cookies previously
export const handle = (async ({ event, resolve }) => {
  const sessionCookie = event.cookies.get("__session");

  try {
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie!);
    // However, once we have a decodedId we set it as a value on the event locals object allowing us to access it in any server.ts file
    event.locals.userId = decodedClaims.uid;
    console.log("Found user id: ", event.locals.userId);
  } catch (error) {
    // If the user is not authenticated we set the userId to null meaning that the user is not logged in
    event.locals.userId = null;
    return resolve(event);
  }

  return resolve(event);
}) satisfies Handle;
