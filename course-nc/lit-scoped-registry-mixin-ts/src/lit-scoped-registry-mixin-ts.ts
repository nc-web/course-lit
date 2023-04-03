import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@webcomponents/scoped-custom-element-registry';

// Sections
import './section-01/Section01.js'
import './section-02/Section02.js'

@customElement('lit-scoped-registry-mixin-ts')
export class LitScopedRegistryMixinTs extends LitElement {
  

  render() {
    return html`
      <main>
        <h2>LIT - SCOPED REGISTRY MIXIN</h2>
        <section-01></section-01>
        <section-02></section-02>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
