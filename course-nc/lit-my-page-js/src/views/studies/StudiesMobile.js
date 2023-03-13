
import { LitElement, html, css } from 'lit'

export class StudiesMobile extends LitElement {

        render() {
            return html `
                <h2>Header Mobile</h2>
            `
        }
}

customElements.define('studies-mobile', StudiesMobile)