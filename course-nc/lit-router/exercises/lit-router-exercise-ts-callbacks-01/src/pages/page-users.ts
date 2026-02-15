
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-users')
export class PageUsers extends LitElement {

    render() {
        return html`
            <h3>Users</h3>
            <p>Welcome to the users page</p>
        `
    }

    static styles = css`
    :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }
`   
}
