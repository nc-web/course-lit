
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Menu
import '../views/menus/MainMenuDesktop'


@customElement('layout-desktop')
export class LoginDesktop extends LitElement {

  render() {
    return html`
            <div>
                <div>
                    <main-menu-desktop></main-menu-desktop>
                </div>

                <div>
                    <slot></slot>
                </div>
            </div>
        `
  }

  static styles = css`
    
        :host {
            display: block;
        }
        
    `

}
