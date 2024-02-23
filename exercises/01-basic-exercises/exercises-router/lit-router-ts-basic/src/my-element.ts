
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// Global Styles
import './assets/css/global-styles.css'

// Router
import { Router } from '@lit-labs/router'

// Pages
import './views/home/HomeDesktop'
import './views/about/AboutDesktop'
import './views/login/LoginDesktop'


@customElement('my-element')
export class MyElement extends LitElement {

  private router = new Router(this, [
    {
      path: '/',
      render: () => html`<home-desktop></home-desktop>`},
    {
      path: '/about',
      render: () => html`<about-desktop></about-desktop>`},
    {
      path: '/login',
      render: () => html`<login-desktop></login-desktop>`}
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
