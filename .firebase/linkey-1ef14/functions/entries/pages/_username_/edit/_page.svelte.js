import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, d as createEventDispatcher, b as each, a as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { U as UserLink } from "../../../../chunks/UserLink.js";
import { a as user, u as userData } from "../../../../chunks/firebase.js";
import "firebase/firestore";
import { w as writable } from "../../../../chunks/index2.js";
const css = {
  code: ".over.svelte-1fv7jio{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-border-opacity:1;border-color:rgb(156 163 175 / var(--tw-border-opacity))\n}",
  map: '{"version":3,"file":"SortableList.svelte","sources":["SortableList.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { flip } from \\"svelte/animate\\";\\nimport { createEventDispatcher } from \\"svelte\\";\\nexport let list;\\nlet isOver = false;\\nconst dispatch = createEventDispatcher();\\nfunction getDraggedParent(node) {\\n  if (!node.dataset.index) {\\n    return getDraggedParent(node.parentNode);\\n  } else {\\n    return { ...node.dataset };\\n  }\\n}\\nfunction onDragStart(e) {\\n  const dragged = getDraggedParent(e.target);\\n  e.dataTransfer?.setData(\\"source\\", dragged?.index.toString());\\n}\\nfunction onDragOver(e) {\\n  const id = e.target.dataset?.id;\\n  const dragged = getDraggedParent(e.target);\\n  isOver = dragged?.id ?? false;\\n}\\nfunction onDragLeave(e) {\\n  const dragged = getDraggedParent(e.target);\\n  isOver === dragged.id && (isOver = false);\\n}\\nfunction onDrop(e) {\\n  isOver = false;\\n  const dragged = getDraggedParent(e.target);\\n  reorder({\\n    from: e.dataTransfer?.getData(\\"source\\"),\\n    to: dragged.index\\n  });\\n}\\nconst reorder = ({ from, to }) => {\\n  const newList = [...list];\\n  newList[from] = [newList[to], newList[to] = newList[from]][0];\\n  dispatch(\\"sort\\", newList);\\n};\\n<\/script>\\r\\n\\r\\n{#if list?.length}\\r\\n  <ul class=\\"list-none p-0 flex flex-col items-center\\">\\r\\n    {#each list as item, index (item.id)}\\r\\n      <li\\r\\n        class=\\"border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full\\"\\r\\n        class:over={item.id === isOver}\\r\\n        data-index={index}\\r\\n        data-id={item.id}\\r\\n        draggable=\\"true\\"\\r\\n        on:dragstart={onDragStart}\\r\\n        on:dragover|preventDefault={onDragOver}\\r\\n        on:dragleave={onDragLeave}\\r\\n        on:drop|preventDefault={onDrop}\\r\\n        animate:flip={{ duration: 300 }}\\r\\n      >\\r\\n        <slot {item} {index} />\\r\\n      </li>\\r\\n    {/each}\\r\\n  </ul>\\r\\n{:else}\\r\\n  <p class=\\"text-center my-12 text-lg font-bold\\">No items</p>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n  .over {\\n    --tw-scale-x: 1.05;\\n    --tw-scale-y: 1.05;\\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n    --tw-border-opacity: 1;\\n    border-color: rgb(156 163 175 / var(--tw-border-opacity))\\n}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgEE,oBAAM,CACJ,YAAY,CAAE,IAAI,CAClB,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,UAAU,IAAI,gBAAgB,CAAC,CAAC,CAAC,IAAI,gBAAgB,CAAC,CAAC,CAAC,OAAO,IAAI,WAAW,CAAC,CAAC,CAAC,MAAM,IAAI,WAAW,CAAC,CAAC,CAAC,MAAM,IAAI,WAAW,CAAC,CAAC,CAAC,OAAO,IAAI,YAAY,CAAC,CAAC,CAAC,OAAO,IAAI,YAAY,CAAC,CAAC,CAC/L,mBAAmB,CAAE,CAAC,CACtB,YAAY,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,CAAC;AAC7D"}'
};
const SortableList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { list } = $$props;
  let isOver = false;
  createEventDispatcher();
  if ($$props.list === void 0 && $$bindings.list && list !== void 0) $$bindings.list(list);
  $$result.css.add(css);
  return `${list?.length ? `<ul class="list-none p-0 flex flex-col items-center">${each(list, (item, index) => {
    return `<li class="${[
      "border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full svelte-1fv7jio",
      item.id === isOver ? "over" : ""
    ].join(" ").trim()}"${add_attribute("data-index", index, 0)}${add_attribute("data-id", item.id, 0)} draggable="true">${slots.default ? slots.default({ item, index }) : ``} </li>`;
  })}</ul>` : `<p class="text-center my-12 text-lg font-bold" data-svelte-h="svelte-1jmwi8z">No items</p>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $formData, $$unsubscribe_formData;
  let $userData, $$unsubscribe_userData;
  let $page, $$unsubscribe_page;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const formDefaults = {
    icon: "custom",
    title: "",
    url: "https://"
  };
  const formData = writable(formDefaults);
  $$unsubscribe_formData = subscribe(formData, (value) => $formData = value);
  $formData.url.match(/^(ftp|http|https):\/\/[^ "]+$/);
  $formData.title.length < 20 && $formData.title.length > 0;
  $$unsubscribe_user();
  $$unsubscribe_formData();
  $$unsubscribe_userData();
  $$unsubscribe_page();
  return `<main class="max-w-xl mx-auto">${$userData?.username == $page.params.username ? `<h1 class="mx-2 text-2xl font-bold mt-8 mb-4 text-center" data-svelte-h="svelte-k6uny7">Edit your Profile</h1> <p class="text-xl mt-5 text-center">${escape($userData?.bio)}</p> <div class="flex justify-center"><a href="${"/" + escape($userData.username, true) + "/bio"}" class="btn btn-primary my-5">Edit Bio</a></div>  ${validate_component(SortableList, "SortableList").$$render($$result, { list: $userData?.links }, {}, {
    default: ({ item, index }) => {
      return `<div class="group relative mt-3">${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})} <button class="btn btn-xs btn-error invisible group-hover:visible transition-all absolute -right-6 bottom-10" data-svelte-h="svelte-z92vy4">Delete</button></div>`;
    }
  })} ${`<button class="btn btn-outline btn-info block mx-auto my-5" data-svelte-h="svelte-va5f0m">Add a Link</button>`} <div class="flex justify-center"><a href="${"/" + escape($userData.username, true)}" class="btn btn-success my-5">View your page</a></div>` : ``}</main>`;
});
export {
  Page as default
};
