
import {LitElement, html, css} from 'lit';

// Components
import './table/index'

export class App extends LitElement {
    render() {
        return html`
            <index-table></index-table>
        `
    }

    static styles = css`
        :host{
            display: block;
            padding: 0;
            margin: 0;
        }
    `
}

customElements.define('my-app', App);