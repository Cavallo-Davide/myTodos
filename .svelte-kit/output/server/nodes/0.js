import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.104lyBWB.js","_app/immutable/chunks/lgMO21Ug.js","_app/immutable/chunks/DucslvUb.js"];
export const stylesheets = [];
export const fonts = [];
