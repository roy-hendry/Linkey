import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { u as userData } from "../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_userData();
  return `${$$result.head += `<!-- HEAD_svelte-197tnsu_START -->${$$result.title = `<title>Linkey - a place for links</title>`, ""}<meta name="description" content="Demo project for the Full SvelteKit Course by Fireship"><!-- HEAD_svelte-197tnsu_END -->`, ""} <main class="flex w-full min-h-screen"><div class="hero bg-base-200"><div class="hero-content text-center"><div class="w-full"><h1 class="text-7xl font-bold" data-svelte-h="svelte-1jjpumb">Linkey</h1> <p class="py-6 text-2xl" data-svelte-h="svelte-1v2zpkv">One simple link to share your entire developer portfolio</p> ${$userData?.username ? `<a href="${"/" + escape($userData.username, true) + "/edit"}" class="btn btn-primary">Edit Profile</a>` : `<a href="/login" class="btn btn-primary" data-svelte-h="svelte-izohf9">Get Started</a> <a href="/fireship" class="btn btn-secondary" data-svelte-h="svelte-1s7f1h6">Example Profile</a>`} <p class="py-6" data-svelte-h="svelte-17qkl6m">Learn how to build this app from scratch in the <a class="link" href="https://fireship.io/courses/sveltekit">Full SvelteKit Course</a></p></div></div></div></main>`;
});
export {
  Page as default
};
