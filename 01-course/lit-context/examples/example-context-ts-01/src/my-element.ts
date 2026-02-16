
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
        
        <hr>

        <h3>Use 1</h3>
        <logger-provider>
          <logger-consumer></logger-consumer>
        </logger-provider>
        
        <hr>
        <br/>

        <h3>Use 2</h3>
        <logger-provider propLogger2='Mariana'>
          <logger-consumer></logger-consumer>
        </logger-provider>
        
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
