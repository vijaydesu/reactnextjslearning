(()=>{var e={};e.id=3,e.ids=[3],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2048:e=>{"use strict";e.exports=require("fs")},5315:e=>{"use strict";e.exports=require("path")},1764:e=>{"use strict";e.exports=require("util")},4789:(e,s,t)=>{"use strict";t.r(s),t.d(s,{patchFetch:()=>j,routeModule:()=>m,serverHooks:()=>f,workAsyncStorage:()=>v,workUnitAsyncStorage:()=>w});var r={};t.r(r),t.d(r,{GET:()=>h,dynamic:()=>x});var o=t(2412),n=t(4293),i=t(4147),a=t(5315),u=t.n(a),p=t(2048),c=t.n(p);let{promisify:l}=t(1764),d=l(c().readFile),g=e=>new Promise(s=>setTimeout(s,e)),x="force-static";async function h(e,{params:s}){console.log("Receiving request for houses....");let t=parseInt((await s).slug),r=u().resolve("./","houses.json"),o=await d(r),n=new Response;await g(100);let i=JSON.parse(o).houses.find(e=>e.id===t);return i?(console.log(`GET /api/houses/${t} status: 200`),new Response(JSON.stringify(i),{status:200,headers:{"Content-Type":"application/json"}})):(n.status(404).send("house not found"),n)}let m=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/houses/[slug]/route",pathname:"/api/houses/[slug]",filename:"route",bundlePath:"app/api/houses/[slug]/route"},resolvedPagePath:"/Users/767878/workspace/reactnextjslearning/reactnextjslearning/globomantics-nots-cf/app/api/houses/[slug]/route.js",nextConfigOutput:"standalone",userland:r}),{workAsyncStorage:v,workUnitAsyncStorage:w,serverHooks:f}=m;function j(){return(0,i.patchFetch)({workAsyncStorage:v,workUnitAsyncStorage:w})}},5303:()=>{},2412:(e,s,t)=>{"use strict";e.exports=t(517)}};var s=require("../../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[147],()=>t(4789));module.exports=r})();