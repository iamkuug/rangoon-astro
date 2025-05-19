import { g as decodeKey } from './chunks/astro/server_22n3JZVI.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DRFSE7OO.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jonathankuug/Documents/rangoon-reit-astro/","cacheDir":"file:///Users/jonathankuug/Documents/rangoon-reit-astro/node_modules/.astro/","outDir":"file:///Users/jonathankuug/Documents/rangoon-reit-astro/dist/","srcDir":"file:///Users/jonathankuug/Documents/rangoon-reit-astro/src/","publicDir":"file:///Users/jonathankuug/Documents/rangoon-reit-astro/public/","buildClientDir":"file:///Users/jonathankuug/Documents/rangoon-reit-astro/dist/client/","buildServerDir":"file:///Users/jonathankuug/Documents/rangoon-reit-astro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about-us/directors/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about-us/directors","isIndex":false,"type":"page","pattern":"^\\/about-us\\/directors\\/?$","segments":[[{"content":"about-us","dynamic":false,"spread":false}],[{"content":"directors","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-us/directors.astro","pathname":"/about-us/directors","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about-us/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about-us","isIndex":true,"type":"page","pattern":"^\\/about-us\\/?$","segments":[[{"content":"about-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-us/index.astro","pathname":"/about-us","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"get-in-touch/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/get-in-touch","isIndex":false,"type":"page","pattern":"^\\/get-in-touch\\/?$","segments":[[{"content":"get-in-touch","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/get-in-touch.astro","pathname":"/get-in-touch","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"investor-relations/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/investor-relations","isIndex":false,"type":"page","pattern":"^\\/investor-relations\\/?$","segments":[[{"content":"investor-relations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/investor-relations.astro","pathname":"/investor-relations","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"property-portfolio/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/property-portfolio","isIndex":false,"type":"page","pattern":"^\\/property-portfolio\\/?$","segments":[[{"content":"property-portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/property-portfolio.astro","pathname":"/property-portfolio","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_sass-embedded@1.89.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact/index.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jonathankuug/Documents/rangoon-reit-astro/src/pages/about-us/directors.astro",{"propagation":"none","containsHead":true}],["/Users/jonathankuug/Documents/rangoon-reit-astro/src/pages/about-us/index.astro",{"propagation":"none","containsHead":true}],["/Users/jonathankuug/Documents/rangoon-reit-astro/src/pages/get-in-touch.astro",{"propagation":"none","containsHead":true}],["/Users/jonathankuug/Documents/rangoon-reit-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jonathankuug/Documents/rangoon-reit-astro/src/pages/investor-relations.astro",{"propagation":"none","containsHead":true}],["/Users/jonathankuug/Documents/rangoon-reit-astro/src/pages/property-portfolio.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/contact/index@_@ts":"pages/api/contact.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_sass-embedded@1.89.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/get-in-touch@_@astro":"pages/get-in-touch.astro.mjs","\u0000@astro-page:src/pages/property-portfolio@_@astro":"pages/property-portfolio.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/about-us/index@_@astro":"pages/about-us.astro.mjs","\u0000@astro-page:src/pages/investor-relations@_@astro":"pages/investor-relations.astro.mjs","\u0000@astro-page:src/pages/about-us/directors@_@astro":"pages/about-us/directors.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/jonathankuug/Documents/rangoon-reit-astro/node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_sass-embedded@1.89.0_typescript@5.8.3/node_modules/astro/dist/assets/services/sharp.js":"_astro/sharp.DARpTxLq.js","\u0000@astrojs-manifest":"manifest_gkqi6hFw.mjs","/Users/jonathankuug/Documents/rangoon-reit-astro/src/components/property-portfolio":"_astro/property-portfolio.DIvkZrub.js","/Users/jonathankuug/Documents/rangoon-reit-astro/src/components/get-in-touch-form":"_astro/get-in-touch-form.MIGY_yyB.js","/Users/jonathankuug/Documents/rangoon-reit-astro/src/components/directors-profile":"_astro/directors-profile.EmTlDrZ_.js","/Users/jonathankuug/Documents/rangoon-reit-astro/src/components/investor-relations":"_astro/investor-relations.C4Rk_V_Y.js","@astrojs/react/client.js":"_astro/client.DeG77gfR.js","/Users/jonathankuug/Documents/rangoon-reit-astro/src/components/home-hero":"_astro/home-hero.sf9uSeuc.js","/Users/jonathankuug/Documents/rangoon-reit-astro/src/components/navbar":"_astro/navbar.Ctbk4fuY.js","sonner":"_astro/_astro-entry_sonner.By8LfUqk.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/rangoon-logo-white.U2sSrOX7.png","/_astro/h-1.CCQI7ytt.png","/_astro/canon-tower-gray.nRBH5YZf.png","/_astro/goldkey-logo.DhhUriNG.png","/_astro/ic-logo-white.C2AuKpMQ.png","/_astro/h-2.XduynKX1.png","/_astro/standard-chartered-logo.DnpyNORi.png","/_astro/about-us-bg-2.Dn0wup57.png","/_astro/about-us-bg-1.CjXNBjoe.png","/_astro/investor-relations-illustration.DFYRbCrL.png","/_astro/swoosh.DwELkkQX.png","/_astro/investor-relations-bg.CggtW6eg.png","/_astro/dosis-latin-ext-wght-normal.CWlhEplo.woff2","/_astro/dosis-latin-wght-normal.CqPHOwwo.woff2","/_astro/dosis-vietnamese-wght-normal.D_hXjpTe.woff2","/_astro/rangoon-structure-diagram.9mzQisu8.png","/_astro/rangoon-logo-blue.DOP6CG2x.png","/_astro/akua.Bi7CpGLb.png","/_astro/nana.-tzvyXDh.png","/_astro/cynthia.DTMXbg3_.png","/_astro/get-in-touch-bg._9v9dVFk.png","/_astro/kweku.DADcUuQl.png","/_astro/inf-1.CgYK1rTi.png","/_astro/hero-bg.DitXmtBv.png","/_astro/inf-2.Cyo0KLQC.png","/_astro/shadrack.DBAlHFNx.png","/_astro/directors.CCowpcUO.css","/favicon-32x32.png","/_astro/_astro-entry_sonner.BD9eNEjI.js","/_astro/_astro-entry_sonner.By8LfUqk.js","/_astro/client.DeG77gfR.js","/_astro/createLucideIcon.D4JKJ09k.js","/_astro/directors-profile.EmTlDrZ_.js","/_astro/get-in-touch-bg.D7HE1GrY.js","/_astro/get-in-touch-form.MIGY_yyB.js","/_astro/home-hero.sf9uSeuc.js","/_astro/index.C0ivuHd2.js","/_astro/index.DB0-gDoJ.js","/_astro/index.DQUsjzUn.js","/_astro/index.Dy_2Xiga.js","/_astro/investor-relations.C4Rk_V_Y.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/navbar.Ctbk4fuY.js","/_astro/navbar.DOJ4yqTo.js","/_astro/property-portfolio.DIvkZrub.js","/_astro/sharp.DARpTxLq.js","/about-us/directors/index.html","/about-us/index.html","/get-in-touch/index.html","/investor-relations/index.html","/property-portfolio/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Cw2d2V9+BY2q2X9cvoOTikJ/VFdrKfmmcLU8JvT4xRU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
