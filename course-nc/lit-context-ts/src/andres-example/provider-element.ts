
import { provide } from "@lit-labs/context";
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { myContext } from "../../context/context-andres/context-andres.js";

import "../andres-example/consumer-element.js";

@customElement("parent-element")
export class ParentElement extends LitElement {
  @provide({ context: myContext })
  @state()
  data: string = "...";

  setContext(e: CustomEvent) {
    if (e.detail.v) {
      this.data = e.detail.v;
    } else {
      this.data = `PARENT-${Math.floor(Math.random() * 10)}`;
    }
  }

  render() {
    return html` <div>Root</div>
      <pre>${this.data}</pre>
      <button @click="${this.setContext}">Change</button>

      <hr />

      <consumer-element @yolo=${this.setContext}></consumer-element>
      `;
  }
}
