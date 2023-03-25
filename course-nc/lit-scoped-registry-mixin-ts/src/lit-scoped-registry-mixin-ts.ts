import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';

// Components
import { Component01 } from './components/component-01.js';
// import { Component02 } from './components/Component02.js'

@customElement('lit-scoped-registry-mixin-ts')
export class LitScopedRegistryMixinTs extends ScopedRegistryHost(LitElement) {
  static elementDefinitions = {
    'component-01': Component01,
    // 'component-02': Component02,
  };

  render() {
    return html`
      <main>
        <h2>LIT - SCOPED REGISTRY MIXIN</h2>
        <component-01></component-01>
        <!-- <component-02></component-02> -->
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
