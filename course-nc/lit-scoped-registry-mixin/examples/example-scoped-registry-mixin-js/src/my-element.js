
import { LitElement, css, html } from 'lit'
import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin'
import '@webcomponents/scoped-custom-element-registry'

// Components
import { Component01 } from './component-01/Component01'
import { Component02 } from './component-02/Component02'


export class MyElement extends ScopedRegistryHost(LitElement) {

  // SCOPEDS REGISTRY
  static elementDefinitions = {
    'component-01': Component01,
    'component-02': Component02
  }

  render() {
    return html`
      <div>
        <h1>SCOPED REGISTRY MIXIN TS</h1>
        <component-01></component-01>
        <component-02></component-02>
      </div>
    `
  }


  static styles = css`
    :host {
      display: block;
    }
  `
}


window.customElements.define('my-element', MyElement)
