
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Router } from '@lit-labs/router'
import type { RouteConfig } from '@lit-labs/router';

import './pages/page-01.js'
import './pages/page-02.js'
import './pages/page-03.js'
import './pages/page-users.ts'

@customElement('main-menu')
export class MainMenu extends LitElement {

    router = new Router(this, [
        {
            path: '/',
            render: () => html`<page-01></page-01></p>`
        },
        {
            path: '/page-02',
            render: () => html`<page-02></page-02>`
        },
        {
            path: '/page-03',
            render: () => html`<page-03></page-03>`
        },
        {
            path: '/user/:id',
            render: ({id}) => html`<page-users .userId=${id}></page-users>`,
            // render: ({ params }) => html`<pages-users userId=${params.id}></pages-users>`,
        },
        {
            path: '(.*)',
            render: () => html`<h2>404 - Not Found</h2>`
        },
    ] satisfies RouteConfig[]);

    render() {
        return html`
            <nav>
                <a href="/">Page 01</a>
                <a href="/page-02">Page 02</a>
                <a href="/page-03">Page 03</a>
                <a href="/user">Users</a>
            </nav>

            <hr />

            ${this.router.outlet()}
        `;
    }

    static styles = css`
    :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }
`
}

// declare global {
//     interface HTMLElementTagNameMap {
//         'main-menu': MainMenu
//     }
// }