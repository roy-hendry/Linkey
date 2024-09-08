import { s as subscribe } from "./utils.js";
import { c as create_ssr_component } from "./ssr.js";
import { a as user } from "./firebase.js";
const AuthCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user ? `${slots.default ? slots.default({}) : ``}` : `<p class="text-error my-5" data-svelte-h="svelte-1k9vps2">You must be signed in to view this page</p> <a class="btn btn-primary" href="/login" data-svelte-h="svelte-1do4sx8">Sign in</a>`}`;
});
export {
  AuthCheck as A
};
