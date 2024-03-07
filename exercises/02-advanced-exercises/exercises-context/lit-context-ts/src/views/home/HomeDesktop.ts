
import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators.js'


@customElement('home-desktop')
export class HomeDesktop extends LitElement {

  render() {
    return html`
            <div>
                <h2>Home Desktop</h2>
            </div>
        `
  }

  static styles = css`
    
    :host {
        display: block;
    }
  `

}
