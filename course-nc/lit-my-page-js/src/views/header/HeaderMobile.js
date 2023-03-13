
import { LitElement, html, css } from 'lit'

export class HeaderMobile extends LitElement {

        render() {
            return html `
                <h2>Header Mobile</h2>
            `
        }
}

customElements.define('header-mobile', HeaderMobile)