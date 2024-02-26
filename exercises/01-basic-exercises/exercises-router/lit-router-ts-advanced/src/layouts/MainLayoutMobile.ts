
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Menus
import '../views/menus/main-menu/MainMenuMobile.js'

@customElement('main-layout-mobile')
export class MainLayoutMobile extends LitElement {

  render() {
    return html`
        <div class='layout'>
            <div class='layout__menu'>
                <main-menu-mobile></main-menu-mobile>
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
