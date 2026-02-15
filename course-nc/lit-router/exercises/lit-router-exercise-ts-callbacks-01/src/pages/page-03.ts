
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('page-03')
export class Page03 extends LitElement {

    render() {
        return html`
            <h3>Page 03</h3>
            <p>Welcome to page 03</p>
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