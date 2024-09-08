import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.CbTCSUt5.js","_app/immutable/chunks/scheduler.BJHXs0pQ.js","_app/immutable/chunks/index.DitbgsN3.js","_app/immutable/chunks/firebase.DQ-78Fzk.js","_app/immutable/chunks/index.BNfbeIwu.js","_app/immutable/chunks/stores.DhZdjoF5.js","_app/immutable/chunks/entry.CFqZlSWe.js","_app/immutable/chunks/control.CYgJF_JY.js"];
export const stylesheets = [];
export const fonts = [];
