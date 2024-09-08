import { c as create_ssr_component, e as escape, a as add_attribute, b as each, v as validate_component } from "../../../chunks/ssr.js";
import { U as UserLink } from "../../../chunks/UserLink.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1ui6vuc_START -->${$$result.title = `<title>@${escape(data.username)} Links</title>`, ""}<meta name="description"${add_attribute("content", data.bio, 0)}><!-- HEAD_svelte-1ui6vuc_END -->`, ""} <main class="prose text-center mx-auto mt-8"><h1 class="text-7xl my-8 text-purple-500">@${escape(data.username)}</h1> <img${add_attribute("src", data.photoURL ?? "user.png", 0)} alt="photoURL" width="256" class="mx-auto"> <p class="text-xl my-8">${escape(data.bio ?? "No bio yet...")}</p> <ul class="flex flex-col items-center justify-center h-full">${each(data.links, (item) => {
    return `<li class="w-56 my-2">${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})} </li>`;
  })}</ul> <button class="btn bg-purple-500 text-white px-4 py-2 rounded-lg my-8" data-svelte-h="svelte-1m0d3cs">Copy link 📜</button></main>`;
});
export {
  Page as default
};
