
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// Global Styels
import './assets/css/global-styles.css'

// Layout

// Home
import './views/home/HomeDesktop'

// components
import './views/todo-list-01/TodoList01'


@customElement('my-element')
export class MyElement extends LitElement {

  render() {
    return html`
      <div>
        <home-desktop></home-desktop>
      </div>
    `
  }


  static styles = css`
    :host {
      display: block
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
