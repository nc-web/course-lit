
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'


export class Component01 extends LitElement {

  render() {
    return html`
            <div>
                <h2>Component 01</h2>
            </div>
        `
  }

  static styles = css`
    
  :host {
    display: block;
  }

  `

}
