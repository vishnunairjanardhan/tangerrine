globalThis.__nitro_main__ = import.meta.url;
import { i as defineLazyEventHandler, n as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/.DS_Store": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1804-yUKePmxpVbCL4idmUdvLxQgRukM\"",
		"mtime": "2026-08-14T22:58:37.348Z",
		"size": 6148,
		"path": "../public/.DS_Store"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2532-P1u486agW3ymimJYHS3VvIiBLK8\"",
		"mtime": "2026-08-14T22:58:37.348Z",
		"size": 9522,
		"path": "../public/favicon.svg"
	},
	"/icons.svg": {
		"type": "image/svg+xml",
		"etag": "\"13a7-+Yl6wl4T3p6mAdLxrF2TU9++/No\"",
		"mtime": "2026-08-14T22:58:37.348Z",
		"size": 5031,
		"path": "../public/icons.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-14T22:58:37.348Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/SiteFooter-RozsIFEx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"791d-iE0GrBTWBKvwZmQKqNjWPXx79YI\"",
		"mtime": "2026-08-14T22:58:37.060Z",
		"size": 31005,
		"path": "../public/assets/SiteFooter-RozsIFEx.js"
	},
	"/assets/dish-2-AvxkaYFC.jpg": {
		"type": "image/jpeg",
		"etag": "\"40370-3+9tNS16BTnXj0JNozupLkcbdGU\"",
		"mtime": "2026-08-14T22:58:37.061Z",
		"size": 263024,
		"path": "../public/assets/dish-2-AvxkaYFC.jpg"
	},
	"/assets/dish-1-Cg5zIUyG.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b0f7-tBQRQt5a8TVXy1lg8pKa2ajGTwU\"",
		"mtime": "2026-08-14T22:58:37.061Z",
		"size": 307447,
		"path": "../public/assets/dish-1-Cg5zIUyG.jpg"
	},
	"/assets/dish-3-Be6A76Rg.jpg": {
		"type": "image/jpeg",
		"etag": "\"610e9-zT3uUpViOOW2QpMfEN8zdmOdYjk\"",
		"mtime": "2026-08-14T22:58:37.061Z",
		"size": 397545,
		"path": "../public/assets/dish-3-Be6A76Rg.jpg"
	},
	"/assets/routes-SA8JTfMN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"31da-UfQWrICsWUbEkJ8ABey1ym+G3H8\"",
		"mtime": "2026-08-14T22:58:37.060Z",
		"size": 12762,
		"path": "../public/assets/routes-SA8JTfMN.js"
	},
	"/assets/menu-BM59TpGS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15e6-XIQj/p7nyD8lkXwaGBXidPzJ65s\"",
		"mtime": "2026-08-14T22:58:37.060Z",
		"size": 5606,
		"path": "../public/assets/menu-BM59TpGS.js"
	},
	"/assets/styles-BlwpBZwv.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13d47-+6viODoU1Kg1epKOyp2J9RmKvJs\"",
		"mtime": "2026-08-14T22:58:37.063Z",
		"size": 81223,
		"path": "../public/assets/styles-BlwpBZwv.css"
	},
	"/assets/hero-cafe-DJNgxM9Z.jpg": {
		"type": "image/jpeg",
		"etag": "\"661f7-Da72eq3oP2c2WlRvUe+GaST5dmY\"",
		"mtime": "2026-08-14T22:58:37.062Z",
		"size": 418295,
		"path": "../public/assets/hero-cafe-DJNgxM9Z.jpg"
	},
	"/assets/index-CCtSeIOB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"55027-yPd07uhGs4ZRs+uOOMJMUpllDqQ\"",
		"mtime": "2026-08-14T22:58:37.060Z",
		"size": 348199,
		"path": "../public/assets/index-CCtSeIOB.js"
	},
	"/assets/gallery-detail-79o4bk7X.jpg": {
		"type": "image/jpeg",
		"etag": "\"87530-B7pF6W8S7TEcW2NljJYb1HaaMKA\"",
		"mtime": "2026-08-14T22:58:37.062Z",
		"size": 554288,
		"path": "../public/assets/gallery-detail-79o4bk7X.jpg"
	},
	"/assets/gallery-barista-BW40lU4c.jpg": {
		"type": "image/jpeg",
		"etag": "\"a61a6-Ph9mNivLKOXCcOQuOv0By4ORERI\"",
		"mtime": "2026-08-14T22:58:37.061Z",
		"size": 680358,
		"path": "../public/assets/gallery-barista-BW40lU4c.jpg"
	},
	"/assets/story-people-Du4CR3KY.jpg": {
		"type": "image/jpeg",
		"etag": "\"8d31f-rLzh92lX29BsAUVRzX1kzuAoB/E\"",
		"mtime": "2026-08-14T22:58:37.062Z",
		"size": 578335,
		"path": "../public/assets/story-people-Du4CR3KY.jpg"
	},
	"/assets/gallery-exterior-hw65CFsd.jpg": {
		"type": "image/jpeg",
		"etag": "\"c81ad-9oyrgVxtJHC3+rKEa9060ds6ONc\"",
		"mtime": "2026-08-14T22:58:37.062Z",
		"size": 819629,
		"path": "../public/assets/gallery-exterior-hw65CFsd.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_NlepCV = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_NlepCV
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
