
import { LitElement, html, css} from 'lit'

export class HeaderTableLaptop extends LitElement {
    render() {
        return html`
        `
    }

    static style = css`
        :host{
            display: block;
            margin: 0;
            padding: 0;
        }
    `
}

customElements.define('header-table-laptop', HeaderTableLaptop)