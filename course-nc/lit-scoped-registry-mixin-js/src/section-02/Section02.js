import { LitElement, html, css } from 'lit';
import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';

// Components
import { Component01 } from './components/Component01.js';
import { Component02 } from './components/Component02.js';

export class Section02 extends ScopedRegistryHost(LitElement) {
  static elementDefinitions = {
    'component-01': Component01,
    'component-02': Component02,
  };

  render() {
    return html`
      <h4>SECTION 02</h4>
      <component-01></component-01>
      <component-02></component-02>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 1rem;
      color: white;
      background-color: darkgoldenrod;
    }
  `;
}

customElements.define('section-02', Section02);
