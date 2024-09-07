import type { PageLoad } from "./$types";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "$lib/firebase";
import { error } from "@sveltejs/kit";

// Uses the username to fetch the user's data from Firestore so we can display it in the UI
export const load = (async ({ params }) => {
  const collectionRef = collection(db, "users");

  // Query Firestore for the user with the username in the URL
  const q = query(
    collectionRef,
    where("username", "==", params.username),
    limit(1)
  );

  const snapshot = await getDocs(q);
  const exists = snapshot.docs[0]?.exists();
  const data = snapshot.docs[0]?.data();

  if (!exists) {
    throw error(404, "User not found");
  }

  if (!data.published) {
    throw error(403, `The profile of @${data.username} is private`);
  }

  return {
    username: data.username,
    photoURL: data.photoURL,
    bio: data.bio,
    links: data.links ?? [],
  };
}) satisfies PageLoad;
