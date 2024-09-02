import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load = (async () => {
  // Redirect to /login
  throw redirect(302, "/login");
}) satisfies PageServerLoad;
