
import { LitElement, html } from 'lit'

class Page01 extends LitElement {
    
    render() {
        return html`
            <h3>Page 01</h3>
            <p>Welcome to page 01</p>
        `
    }
}

customElements.define('page-01', Page01);