
import { LitElement, html, css } from "lit";

// Components
import './HeaderDesktop.js'
import './HeaderTableLaptop.js'
import './HeaderMobile.js'

export class Index extends LitElement {
    render() {
        if(screen.width > 1024) {
            return html`<header-desktop/>`
        }else if (screen.width <= 1024 || screen.width <= 768 ) {
            return html`<header-table-laptop/>`
        } else if (screen.width <= 425 || screen.width <= 375 || screen.width <= 320) {
             return html`<header-mobile/>`
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

customElements.define('index-header', Index)