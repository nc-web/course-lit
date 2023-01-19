
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators' 

@customElement('index-nav')
export class IndexNav extends LitElement {

    render() {
        if (screen.width > 425) {
            return html`<nav-desktop />`
        } else if (screen.width <= 425 || screen.width <= 375 || screen.width <= 320) {
            return html`<nav-mobile />`
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