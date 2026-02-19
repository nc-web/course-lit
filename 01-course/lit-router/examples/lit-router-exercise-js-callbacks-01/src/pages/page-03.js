
import { LitElement, html } from 'lit'

class Page03 extends LitElement {
    render() {
        return html`
            <h3>Page 03</h3>
            <p>Welcome to page 03</p>
        `
    }
}

customElements.define('page-03', Page03);