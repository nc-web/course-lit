
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'


@customElement('my-app')
export class MyApp extends LitElement {

    render() {
        return html`
            <h2>My App</h2>
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