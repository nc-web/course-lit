
import { LitElement, html, css } from 'lit'

export class NavMobile extends LitElement {

    render() {
        return html`
            <h2>Nav Mobile</h2>
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

customElements.define('nav-mobile', NavMobile)