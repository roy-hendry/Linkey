import type { PageServerLoad } from "./$types";
import { adminAuth, adminDB } from "$lib/server/admin";
import { error, redirect } from "@sveltejs/kit";

export const load = (async ({ locals, params }) => {
  // Very easy to access the userId
  const uid = locals.userId;

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
