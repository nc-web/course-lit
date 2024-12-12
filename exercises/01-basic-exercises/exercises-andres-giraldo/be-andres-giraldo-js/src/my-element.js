import { LitElement, css, html } from 'lit'

import './views/menus/menu-double-02/MenuDouble02'
import './views/menus/menu-double-03/MenuDouble03'

export class MyElement extends LitElement {

  render() {
    return html`
      <div>
        <!-- <nav-menu></nav-menu> -->
        <menu-component></menu-component>
      </div>
    `
  }

  static styles = css`
      :host {
        margin: 0;
        padding: 0;
        background-color: #757575;
      }
    `
}

customElements.define('my-element', MyElement)
