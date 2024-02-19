var g=Object.defineProperty;var f=(t,e,o)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var s=(t,e,o)=>(f(t,typeof e!="symbol"?e+"":e,o),o);import{s as p,x as i,i as v}from"./lit-element-5066ec50.js";var a;let x=(a=class extends p{render(){return i`
            <div>
                <button class='button'><slot>BUTTON HOVER 01</slot></button>
            </div>
        `}},s(a,"styles",v` 
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
            background: #782;
            transition: width 0.5s, height 0.5s;
        }

        .button:hover::before {
            width: 18.7rem;
            height: 18.7rem;
            background-color: #782;
        }
    `),a);customElements.define("button-hover-01",x);var d;let F=(d=class extends p{render(){return i`
            <div>
                <button class='button'><slot>BUTTON HOVER 02</slot></button>
            </div>
        `}},s(d,"styles",v` 
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
            background: #F50057;
            transition: width 0.5s, height 0.5s;
        }

        .button:hover::before {
            width: 18.7rem;
            height: 18.7rem;
            background-color: #F50057;
        }
    `),d);customElements.define("button-hover-02",F);const w={component:"demo-button"},r={render:()=>i`<button-hover-01/>`},n={render:()=>i`<button-hover-02/>`};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{\n  render: () => html`<button-hover-01/>`\n}",...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var b,m,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"{\n  render: () => html`<button-hover-02/>`\n}",...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const E=["ButtonHover01","ButtonHover02"];export{r as ButtonHover01,n as ButtonHover02,E as __namedExportsOrder,w as default};
//# sourceMappingURL=ButtonHover.stories-02074457.js.map
