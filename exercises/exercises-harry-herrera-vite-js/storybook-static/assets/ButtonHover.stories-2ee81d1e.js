var g=Object.defineProperty;var f=(t,e,o)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var s=(t,e,o)=>(f(t,typeof e!="symbol"?e+"":e,o),o);import{s as v,x as i,i as p}from"./lit-element-16206ad4.js";var a;let x=(a=class extends v{render(){return i`
            <div>
                <button class='button'><slot>Hover</slot></button>
            </div>
        `}},s(a,"styles",p` 
        :host {
            display: inline-block;
            margin: 0;
            padding: 0;
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 0;
        }

        .button {
            border: none;
            position: relative;
            display: inline-flex;
            border-radius: 0.5rem;
            padding: .625rem 1.8rem;
            background: #03A9F4;
            color: #FFFFFF;
            cursor: pointer;
            text-decoration: none;
            letter-spacing: .063rem; 
            overflow: hidden;
        }

        .button slot {
            position: relative;
            z-index: 1;
        }

        .button::before {
            content: '';
            position: absolute;
            top: var(--y);
            left: var(--x);
            transform: translate(-50%,-50%);
            width: 0;
            height: 0;
            border-radius: 50%;
            background: #782;
            transition: width 0.5s, height 0.5s;
        }

        .button:hover::before {
            width: 18.7rem;
            height: 18.7rem;
            background-color: #782;
        }
    `),a);customElements.define("button-hover-01",x);var d;let F=(d=class extends v{render(){return i`
            <div>
                <button class='button'><slot>Hover</slot></button>
            </div>
        `}},s(d,"styles",p` 
        :host {
            display: inline-block;
            margin: 0;
            padding: 0;
            //box-sizing: border-box;
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 0;
        }

        .button {
            border: none;
            position: relative;
            display: inline-flex;
            border-radius: 0.5rem;
            padding: .625rem 1.8rem;
            background: #03A9F4;
            color: #FFFFFF;
            cursor: pointer;
            text-decoration: none;
            letter-spacing: .063rem; 
            overflow: hidden;
        }

        .button slot {
            position: relative;
            z-index: 1;
        }

        .button::before {
            content: '';
            position: absolute;
            top: var(--y);
            left: var(--x);
            transform: translate(-50%,-50%);
            width: 0;
            height: 0;
            border-radius: 50%;
            background: #780202;
            transition: width 0.5s, height 0.5s;
        }

        .button:hover::before {
            width: 18.7rem;
            height: 18.7rem;
            background: #780202;
        }
    `),d);customElements.define("button-hover-02",F);const w={component:"demo-button"},r={render:()=>i`<button-hover-01/>`},n={render:()=>i`<button-hover-02/>`};var u,l,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{\n  render: () => html`<button-hover-01/>`\n}",...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var b,m,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"{\n  render: () => html`<button-hover-02/>`\n}",...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const z=["ButtonHover01","ButtonHover02"];export{r as ButtonHover01,n as ButtonHover02,z as __namedExportsOrder,w as default};
//# sourceMappingURL=ButtonHover.stories-2ee81d1e.js.map
