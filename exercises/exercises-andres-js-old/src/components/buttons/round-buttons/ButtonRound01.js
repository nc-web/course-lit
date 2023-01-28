
import { LitElement, html, css } from 'lit'

export class ButtonRound01 extends LitElement {
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
            border-radius: 50%;
            background-color: #BDBDBD;
            color: #424242;
            cursor: pointer;
            border-style: none;
            width: 1.5rem;
            height: 1.5rem;
        }

        button:hover {
            background-color: #03A9F4;
        }


    `
}

customElements.define('button-round-01', ButtonRound01)