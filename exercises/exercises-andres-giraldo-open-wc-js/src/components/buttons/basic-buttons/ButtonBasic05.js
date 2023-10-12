
import { LitElement, html, css } from 'lit'

export class ButtonBasic05 extends LitElement {
    render() {
        return html`
            <button><slot></slot></button>
        `
    }

    static styles = css`
        :host {
            display: inline-block;
            margin: 1rem;
            padding: 0;
        }

        button {
            font-size: 1rem;
            padding: .5rem 1.2rem .5rem 1.2rem;
            border: none;
            cursor: pointer;
            background-color: #BDBDBD;
            color: #424242;
            outline: none;
            transition: .2s;
        }

        button:hover {
            background-color: #03A9F4;
        }
    `
}

customElements.define('button-basic-05', ButtonBasic05)