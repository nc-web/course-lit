import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import './views/provider/Provider'

import './views/provider/consumer2/consumer'

import './views/provider/consumer/consumer'

import './views/consumer/consumer'
@customElement('my-element')
export class MyElement extends LitElement {

  render() {
    return html`
    <div>
      <h2>hola</h2>

      <div>
        <provider-data>
          <div>
            <consumer-provider></consumer-provider>
          </div>
        </provider-data>
      </div>

      <div>
        <consumer-provider-data></consumer-provider-data>
      </div>

      <div>
        <consumer-data></consumer-data>
      </div>
    </div>
    `
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
