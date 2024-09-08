import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component } from "../../chunks/ssr.js";
import { u as userData, a as user } from "../../chunks/firebase.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userData;
  let $$unsubscribe_user;
  $$unsubscribe_userData = subscribe(userData, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_userData();
  $$unsubscribe_user();
  return `<div class="min-h-screen flex flex-col">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
