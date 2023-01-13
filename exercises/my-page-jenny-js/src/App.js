
import { LitElement, html,css } from 'lit'

// Components 
import './views/nav/index.js'

export class App extends LitElement {
    render() {
        return html`
       <index-nav></index-nav>
        `
    }

    static styles = css`
        :host {
            display: block;
            margin: 0;
            padding: 0;
        }
    `
}

customElements.define('my-app', App)