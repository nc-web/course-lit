
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'


// Components
import './logger/logger-provider'
import './logger/logger-consumer'


@customElement('my-element')
export class MyElement extends LitElement {

  render() {
    return html`
      <div>
        <h2>Lit Context TS</h2>
        <tr></tr>
        <h3>Use 1</h3>
        <logger-provider>
          <logger-consumer></logger-consumer>
        </logger-provider>
        
        <h3>Use 2</h3>
        
        
      </div>
    `
  }


  static styles = css`
    
    :host {
      display: block;
    }

  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
