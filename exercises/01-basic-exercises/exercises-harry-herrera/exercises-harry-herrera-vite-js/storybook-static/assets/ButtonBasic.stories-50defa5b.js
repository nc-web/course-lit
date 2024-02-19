var R=Object.defineProperty;var z=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var r=(e,t,n)=>(z(e,typeof t!="symbol"?t+"":t,n),n);import{s as l,x as o,i as b}from"./lit-element-16206ad4.js";var u;let E=(u=class extends l{render(){return o`
            <button><slot>Boton Azul</slot></button>
        `}},r(u,"styles",b`
        :host {
            display: inline-block;
            margin: 1rem;
            padding: 0;
        }


        button {
            font-size: 1rem;
            padding: 1rem;
            border: none;
            cursor: pointer;
            background-color: #03A9F4;
            color: #ffffff;
            outline: none;
            transition: .2s;

        }

        button:hover {
            background-color: #204b5f;
        }
    `),u);customElements.define("button-basic-blue",E);var i;let G=(i=class extends l{render(){return o`
            <button><slot>Boton Rojo</slot></button>
        `}},r(i,"styles",b`
        :host {
            display: inline-block;
            margin: 1rem;
            padding: 0;
        }

        button {
            font-size: 1rem;
            padding: 1rem;
            border: none;
            cursor: pointer;
            background-color: #ff0000;
            color: #ffffff;
            outline: none;
            transition: .2s;
        }

        button:hover {
            background-color: #931717;
        }
    `),i);customElements.define("button-basic-red",G);var d;let v=(d=class extends l{render(){return o`
            <button><slot>Boton Verde</slot></button>
        `}},r(d,"styles",b`
        :host{
            display: inline-block;
            margin: 1rem;
            padding: 0;
        }
        
        button {
            font-size: 1rem;
            padding: 1rem;
            border: none;
            cursor: pointer;
            background-color: #34bc2d;
            color: #ffffff;
            outline: none;
            transition: .2s;
        }

        button:hover {
            background-color: #205414;
        }
    `),d);customElements.define("button-basic-green",v);const F={component:"demo-button"},s={render:()=>o`<button-basic-blue/>`},a={render:()=>o`<button-basic-red/>`},c={render:()=>o`<button-basic-green/>`};var m,B,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{\n  render: () => html`<button-basic-blue/>`\n}",...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var p,g,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{\n  render: () => html`<button-basic-red/>`\n}",...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var k,x,y;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:"{\n  render: () => html`<button-basic-green/>`\n}",...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const O=["ButtonBasicBlue","ButtonBasicRed","ButtonBasicGreen"];export{s as ButtonBasicBlue,c as ButtonBasicGreen,a as ButtonBasicRed,O as __namedExportsOrder,F as default};
//# sourceMappingURL=ButtonBasic.stories-50defa5b.js.map
