
import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
// import { provide } from '@lit/context'

// Global Styles
import './assets/css/global-styles.css'

// Router
import { Router } from '@lit-labs/router'

// Pages
import './views/home/HomeDesktop'
import './views/login/LoginDesktop'

// Context
// import { contextTheme, TypeTheme } from './context/themes/context-themes.js'


@customElement('my-element')
export class MyElement extends LitElement {

  // // CONTEXT
  // @provide({context: contextTheme})
  // @property({attribute: true})
  //   public propTheme: TypeTheme

  // constructor() {
  //   super()

  //   this.propTheme = ''
  // }


  // ROUTER
  private router = new Router(this, [
    {
      path: '/',
      render: () => html`<home-desktop></home-desktop>`
    },

    {
      path: '/login',
      render: () => html`<login-desktop></login-desktop>`
    }
  ])

  render() {
    return this.router.outlet()
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
