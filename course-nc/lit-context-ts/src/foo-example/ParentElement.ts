import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';

// Context
import './ChildElement.js';

@customElement('parent-element')
export class ParentElement extends LitElement {
  render() {
    return html`<child-element></child-element>`;
  }
}
