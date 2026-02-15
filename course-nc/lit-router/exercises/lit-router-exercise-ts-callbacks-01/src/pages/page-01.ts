
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('page-01')
export class Page01 extends LitElement {

    render() {
        return html`
            <h3>Page 01</h3>
            <p>Welcome to page 01</p>
        `
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
//         'page-01': Page01
//     }
// }