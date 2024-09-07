import type { PageServerLoad, Actions } from "./$types";
import { adminAuth, adminDB } from "$lib/server/admin";
import { error, fail, redirect } from "@sveltejs/kit";

export const load = (async ({ locals, params }) => {
  // Very easy to access the userId
  const uid = locals.userId;

  console.log("uid", uid);

  if (!uid) {
    throw redirect(301, "/login");
  }

  // Using that id, we can do authenticated data fetching
  const userDoc = await adminDB.collection("users").doc(uid).get();

  // Grab the username and bio from the user document
  const { username, bio } = userDoc.data()!;

  if (params.username !== username) {
    throw error(401, "That username does not belong to you");
  }

  return {
    bio,
  };
}) satisfies PageServerLoad;

export const actions = {
  // As we only have one action we can just use the default export
  default: async ({ locals, request, params }) => {
    const uid = locals.userId;

    const data = await request.formData();
    const bio = data.get("bio");

    const userRef = adminDB.collection("users").doc(uid!);
    const { username } = (await userRef.get()).data()!;

    if (params.username !== username) {
      throw error(401, "That username does not belong to you");
    }

    if (bio!.length > 260) {
      // We can use the fail function to return a 400 error with a JSON body
      // The fail function won't render the error page, it will just pass that data client side
      throw fail(400, { problem: "Bio must be less than 260 characters" });
    }

    // Update bio field in the user document
    await userRef.update({ bio });
  },
} satisfies Actions;
