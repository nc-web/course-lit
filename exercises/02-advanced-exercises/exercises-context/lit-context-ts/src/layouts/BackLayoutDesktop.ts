
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Menus
import '../views/menus/theme-menu/ThemeMenuDesktop.js'
import '../views/menus/main-menu/MainMenuDesktop.js'
import '../views/menus/back-menu/BackMenuDesktop'

@customElement('back-layout-desktop')
export class BackLayoutDesktop extends LitElement {

  render() {
    return html`
            <div class='layout'>
            <div class='layout__menu'>
                <theme-menu-desktop></theme-menu-desktop>
                <main-menu-desktop></main-menu-desktop>
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
