
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// Global Styles
import './assets/css/global-styles.css'

// Components
import './views/menus/theme-menu/ThemeMenuDesktop'
import './views/menus/main-menu/MainMenuDesktop'

@customElement('my-element')
export class MyElement extends LitElement {

  render() {
    return html`
      <div>
        <theme-menu-desktop></theme-menu-desktop>
        <main-menu-desktop></main-menu-desktop>
        <h2>Example Lit Contest TS</h2>
        <slot></slot>
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
