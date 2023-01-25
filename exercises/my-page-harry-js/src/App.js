
import {LitElement, html, css} from 'lit'

// Components
import './views/header/index.js'

export class App extends LitElement {
    render() {
        return html`
            <index-header></index-header>
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

customElements.define('my-app', App)