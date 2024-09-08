import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { u as userData } from "../../../../chunks/firebase.js";
import { p as page } from "../../../../chunks/stores.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  let $page, $$unsubscribe_page;
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_userData();
  $$unsubscribe_page();
  return `<main class="max-w-lg prose text-center mx-auto my-6"><a href="${"/" + escape($userData?.username, true) + "/edit"}" class="btn btn-primary fixed left-5">Edit page</a> <p>Current Bio: <span class="text-info">${escape(data.bio)}</span></p>  <p>Status Code: ${escape($page.status)}</p>  <p class="text-error">${escape($page.form?.problem ?? "")}</p>  <form method="POST"><div class="form-control"><label for="bio" class="label" data-svelte-h="svelte-p13vsy"><span class="label-text">Your bio</span></label> <textarea name="bio" class="textarea textarea-bordered textarea-accent">${escape(data.bio, false)}</textarea></div> <button class="btn btn-primary my-5" data-svelte-h="svelte-tqnit3">Update Bio</button></form></main>`;
});
export {
  Page as default
};
