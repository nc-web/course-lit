
import { LitElement, html, css } from 'lit'

// Components
import './StudiesDesktop.js'
import './StudiesMobile.js'

export class Index extends LitElement {

    render() {
        if (screen.width > 768) {
            return html`<studies-desktop />`
        } else if (screen.width <= 768 || screen.width <= 425 || screen.width <= 375 || screen.width <= 320) {
            return html`<studies-mobile />`
        } else {
            return html`Error al cargar el menu`
        }
    }

    static styles = css`
        :host {
            display: block;
        }
    `

}

customElements.define('index-studies', Index)