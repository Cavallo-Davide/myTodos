export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bm3wgOqk.js","app":"_app/immutable/entry/app.MU2ETa8y.js","imports":["_app/immutable/entry/start.Bm3wgOqk.js","_app/immutable/chunks/0dM4-4gX.js","_app/immutable/chunks/DucslvUb.js","_app/immutable/chunks/DEMCxWVJ.js","_app/immutable/entry/app.MU2ETa8y.js","_app/immutable/chunks/DucslvUb.js","_app/immutable/chunks/BVB8UGAA.js","_app/immutable/chunks/lgMO21Ug.js","_app/immutable/chunks/CzMp5uvr.js","_app/immutable/chunks/DEMCxWVJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
