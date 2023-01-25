
import { LitElement, html, css } from "lit";

export class HeaderMobile extends LitElement {
    render() {
        return html`
            <h2> Header Mobile </h2>
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

customElements.define('header-mobile', HeaderMobile)