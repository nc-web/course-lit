
import { LitElement, html, css } from 'lit'


export class Component02 extends LitElement {

  render() {
    return html`
            <div>
                <h2>Component 02</h2>
            </div>
        `
  }

  static styles = css`
  
    :host {
        display: block;
    }
  
  `

}
