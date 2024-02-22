
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Menus
import '../views/menus/back-menu/BackMenuDesktop'

@customElement('second-layout-desktop')
export class SecondLayoutDesktop extends LitElement {

  render() {
    return html`
            <div class='layout'>
            <div class='layout__menu'>
                <back-menu-desktop></back-menu-desktop>
            </div>

            <div class='layout__body'>
                <slot></slot>
            </div>

            <div class='layout__footer'>

            </div>
        </div>
        `
  }

  static styles = css`
    
    :host {
        display: block
    }
  `

}
