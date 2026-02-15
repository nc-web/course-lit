
import { LitElement, css, html } from 'lit';

class PageUsers extends LitElement {

    render() {
        return html`
            <h1>Users Page</h1>
            <p>Welcome to the users page!</p>
        `
    }

    static get styles() {
        return css`
            :host {
                max-width: 1280px;
                margin: 0 auto;
                padding: 2rem;
                text-align: center;
            }
        `
    }
}

window.customElements.define('page-users', PageUsers)