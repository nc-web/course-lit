
import { consume } from "@lit-labs/context";
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { myContext } from "../../context/context-andres/context-andres.js";

@customElement("consumer-element")
export class ChildElement extends LitElement {
  @consume({ context: myContext, subscribe: true })
  @state()
  data!: string;

  dispatchFoo() {
    this.dispatchEvent(
      new CustomEvent("yolo", {
        detail: {
          v: `CHILD-${Math.floor(Math.random() * 10)}`
        },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    return html`<pre>${this.data}</pre>
      <button @click="${this.dispatchFoo}">Change</button>`;
  }
}