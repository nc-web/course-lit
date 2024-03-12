var h=Object.defineProperty;var x=(e,r,o)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o;var c=(e,r,o)=>(x(e,typeof r!="symbol"?r+"":r,o),o);import{s as E,x as a,i as f}from"./lit-element-5066ec50.js";var u;let y=(u=class extends E{render(){return a`
            <button><slot>BUTTON BLUE</slot></button>
        `}},c(u,"styles",f`
        :host {
            display: inline-block;
            margin: 1rem;
            padding: 0;
        }


        button {
            font-size: 1rem;
            padding: 1rem 1rem;
            border: none;
            cursor: pointer;
            background-color: #1565C0;
            color: #FFFFFF;
            outline: none;
            transition: .2s;
            border-radius: .8rem;
        }

        button:hover {
            background-color: #9E9E9E;
        }
    `),u);customElements.define("button-basic-blue",y);class k extends E{render(){return a`
            <button><slot>BUTTON RED</slot></button>
        `}}c(k,"styles",f`
        :host {
            display: inline-block;
            margin: 1rem;
            padding: 0;
        }


        button {
            font-size: 1rem;
            padding: 1rem 1rem;
            border: none;
            cursor: pointer;
            background-color: #C62828;
            color: #FFFFFF;
            outline: none;
            transition: .2s;
            border-radius: .8rem;
        }

        button:hover {
            background-color: #9E9E9E;
        }
    `);customElements.define("button-basic-red",k);const S={component:"demo-button"},t={render:()=>a`<button-basic-blue/>`},n={render:()=>a`<button-basic-red/>`},s={args:{background:"#ff0",label:"Button"}};var d,i,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{\n  render: () => html`<button-basic-blue/>`\n}",...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var b,m,p;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"{\n  render: () => html`<button-basic-red/>`\n}",...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var B,g,F;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    background: '#ff0',
    label: 'Button'
  }
}`,...(F=(g=s.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};const U=["ButtonBasicBlue","ButtonBasicRed","Arguments"];export{s as Arguments,t as ButtonBasicBlue,n as ButtonBasicRed,U as __namedExportsOrder,S as default};
//# sourceMappingURL=ButtonBasic.stories-976a8509.js.map
