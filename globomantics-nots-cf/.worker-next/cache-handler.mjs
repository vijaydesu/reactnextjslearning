var m=".prefetch.rsc",_=".rsc",h=".json",A=".meta",g=".body",F=".html",T="cdn-cgi/_cf_seed_data";async function l(a,n){let t=await process.env.ASSETS.fetch(a);return t.status===200?await n(t):void 0}function u(a,n){return l(a+n,t=>t.arrayBuffer())}function f(a,n){return l(a+n,t=>t.text())}function p(a){return l(a+A,n=>n.json())}function k(a={}){return{...a,kind:a?.kindHint?.toUpperCase()}}var y=class{constructor(n){this.ctx=n;this.kv=process.env["NEXT_CACHE_WORKERS_KV"]}kv;debug=!!process.env.NEXT_PRIVATE_DEBUG_CACHE;async get(...n){let[t,c]=n,e=k(c);if(this.debug&&console.log(`cache - get: ${t}, ${e?.kind}`),this.kv!==void 0)try{let r=await this.kv.get(t,"json");if(r)return r}catch(r){console.error(`Failed to get value for key = ${t}: ${r}`)}if(e?.kind==="FETCH"||e?.kind==="IMAGE")return null;let s=`http://assets.local/${T}/${t}`.replace(/\/\//g,"/");if(e?.kind==="APP"||e?.kind==="APP_ROUTE"){let r=await u(s,g);if(r){let i=await p(s);return{lastModified:i?.lastModified,value:{kind:e.kind==="APP_ROUTE"?e.kind:"ROUTE",body:r,status:i?.status??200,headers:i?.headers??{}}}}if(e.kind==="APP_ROUTE")return null}let o=await f(s,F);if(!o)return null;if(e?.kind==="PAGES"||e?.kind==="APP"||e?.kind==="APP_PAGE"){let r=p(s),i=Promise.resolve(void 0);if(!e.isFallback){let E=e.isRoutePPREnabled?m:_;e.kind==="APP_PAGE"?i=u(s,E):i=f(s,e.kind==="APP"?E:h)}let[d,P]=await Promise.all([r,i]);return{lastModified:d?.lastModified,value:{kind:e.kind==="APP_PAGE"?"APP_PAGE":"PAGE",html:o,pageData:P??"",...e.kind==="APP_PAGE"&&{rscData:P},postponed:d?.postponed,status:d?.status,headers:d?.headers}}}return null}async set(...n){let[t,c,e]=n;if(this.kv===void 0)return;this.debug&&console.log(`cache - set: ${t}`);let s={lastModified:Date.now(),value:c};try{await this.kv.put(t,JSON.stringify(s))}catch(o){console.error(`Failed to set value for key = ${t}: ${o}`)}}async revalidateTag(...n){let[t]=n;this.kv!==void 0&&this.debug&&console.log(`cache - revalidateTag: ${JSON.stringify([t].flat())}`)}resetRequestCache(){}};export{y as OpenNextCacheHandler};
