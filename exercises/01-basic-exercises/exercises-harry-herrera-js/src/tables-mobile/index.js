
import { LitElement, html, css } from "lit";

// Components
import './TableDesktop.js'
import './TableMobile.js'

export class IndexTable extends LitElement {
    render() {
        if (window.screen.width > 425) {
            return html`<table-desktop></table-desktop>`;
          }
          if (
            window.screen.width <= 425 ||
            window.screen.width <= 375 ||
            window.screen.width <= 320
          ) {
            return html`<table-mobile></table-mobile>`;
          }
          return html`Error al cargar el menu`;
        }
 
     static styles = css`
         :host {
             display: block;
         }
     `
}

customElements.define('index-table', IndexTable)