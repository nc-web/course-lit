import{_ as h}from"./iframe-4e74d248.js";import{d as l,R as o,r as a,C as E,A as R,H as x,D as y}from"./index-49bde6af.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";var c={},u=l;c.createRoot=u.createRoot,c.hydrateRoot=u.hydrateRoot;var n=new Map,D=({callback:t,children:e})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},_=async(t,e)=>{let r=await w(e);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},t))})},v=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},w=async t=>{let e=n.get(t);return e||(e=c.createRoot(t),n.set(t,e)),e},f={code:E,a:R,...x},C=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},S=class{constructor(){this.render=async(t,e,r)=>{let s={...f,...e==null?void 0:e.components},i=y;return new Promise((m,p)=>{h(()=>import("./index-02e78ddf.js"),["./index-02e78ddf.js","./index-affc4d1c.js","./index-49bde6af.js","./iframe-4e74d248.js","./index-bab9eea1.js","./index-d37d4223.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:d})=>_(o.createElement(C,{showException:p,key:Math.random()},o.createElement(d,{components:s},o.createElement(i,{context:t,docsParameter:e}))),r)).then(()=>m())})},this.unmount=t=>{v(t)}}};export{S as DocsRenderer,f as defaultComponents};
//# sourceMappingURL=DocsRenderer-3PUGWF3O-cbbfa15e.js.map
