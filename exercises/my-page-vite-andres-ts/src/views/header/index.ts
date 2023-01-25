
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js' 

// Components
import './HeaderDesktop.js'
import './HeaderMobile.js'

@customElement('index-header')
export class IndexNav extends LitElement {

    render() {
        if (screen.width > 425) {
            return html`<header-desktop />`
        } else if (screen.width <= 425 || screen.width <= 375 || screen.width <= 320) {
            return html`<header-mobile />`
        } else {
            return html`Error al cargar el menu`
        }
    }

    static styles = css`
        :host {
            display: block;
            margin: 0;
            padding: 0;
        }
    `
}