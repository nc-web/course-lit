
import { LitElement, html, css } from 'lit'

export class HeaderTableLaptop extends LitElement {
    render() {
        return html`
           
        `
    }

    static styles = css`
        :host {
            display: block;
            height: 50rem;
            margin: 0;
            padding: 0;
            background: url('/img/background-01.webp');
        }
    `
}

customElements.define('header-table-laptop', HeaderTableLaptop)