import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D70iudmm.mjs';
import { manifest } from './manifest_gkqi6hFw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about-us/directors.astro.mjs');
const _page2 = () => import('./pages/about-us.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/get-in-touch.astro.mjs');
const _page5 = () => import('./pages/investor-relations.astro.mjs');
const _page6 = () => import('./pages/property-portfolio.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_sass-embedded@1.89.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about-us/directors.astro", _page1],
    ["src/pages/about-us/index.astro", _page2],
    ["src/pages/api/contact/index.ts", _page3],
    ["src/pages/get-in-touch.astro", _page4],
    ["src/pages/investor-relations.astro", _page5],
    ["src/pages/property-portfolio.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e488dfea-2350-4cb2-9109-e306ca474356",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
