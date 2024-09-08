import { b as adminDB } from "../../../../chunks/admin.js";
import { r as redirect, e as error, f as fail } from "../../../../chunks/index.js";
const load = async ({ locals, params }) => {
  const uid = locals.userID;
  if (!uid) {
    throw redirect(301, "/login");
  }
  const userDoc = await adminDB.collection("users").doc(uid).get();
  const { username, bio } = userDoc.data();
  if (params.username !== username) {
    throw error(401, "That username does not belong to you");
  }
  return {
    bio
  };
};
const actions = {
  // As we only have one action, we can use the default export
  default: async ({ locals, request, params }) => {
    const uid = locals.userID;
    const data = await request.formData();
    const bio = data.get("bio");
    const userRef = adminDB.collection("users").doc(uid);
    const { username } = (await userRef.get()).data();
    if (params.username !== username) {
      throw error(401, "That username does not belong to you");
    }
    if (bio.length > 260) {
      return fail(400, { problem: "Bio must be less than 260 characters" });
    }
    await userRef.update({
      bio
    });
  }
};
export {
  actions,
  load
};
