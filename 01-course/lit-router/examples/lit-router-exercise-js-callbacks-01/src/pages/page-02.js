
import { LitElement, html } from 'lit'

class Page02 extends LitElement {
    render() {
        return html`
            <h3>Page 02</h3>
            <p>Welcome to page 02</p>
        `
    }
}

customElements.define('page-02', Page02);