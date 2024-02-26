
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// Global Styels
import './assets/css/global-styles.css'

// Router
import { Router } from '@lit-labs/router'

// Pages
import './views/home/index'
import './views/home/HomeDesktop'
import './views/todo-list/TodoListsDesktop'
import './views/about/AboutDesktop'

@customElement('my-element')
export class MyElement extends LitElement {

  private router = new Router(this, [

    {
      path: '/',
      render: () => html`<index-home></index-home>`
    },

    {
      path: '/todo-list',
      render: () => html`<todo-list-desktop></todo-list-desktop>`
    },

    {
      path: '/about',
      render: () => html`<about-desktop></about-desktop>`
    }

  ])


  render() {
    return this.router.outlet()
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
