
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Router } from '@lit-labs/router';

// Componentsº
import './views/nav/index.js'
import './views/header/index.js'
import './views/studies/index.js'

import './views/header/HeaderDesktop'

@customElement('my-app')
export class MyApp extends LitElement {

    private router = new Router(this, [
        { path: '/#section-header', render: () => html`<index-header />` },
        { path: '/#section-studies', render: () => html`<index-studies />` }
    ])

    render() {
        return html`
            <index-nav></index-nav>
            <index-header id='section-header'></index-header>
            <index-studies id='section-studies'></index-studies>
            <main>${this.router.outlet()}</main>
        `
    }

    static styles = css`
        :host {
            display: block;
            margin: 0;
            padding: 0;
        }
    `
}