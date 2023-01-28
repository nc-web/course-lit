
import { LitElement, html,css } from 'lit'

export class ButtonSquare01 extends LitElement {
    render() {
        return html`
            <button><slot></slot></button>
        `
    }

    static styles = css`
        :host{
            display: inline-block;
            margin: 0;
            padding: 0;
        }

        button {
            background-color: #BDBDBD;
            color: #424242;
            cursor: pointer;
            border-style: none;
            width: 1rem;
            height: 1rem;
        }

        button:hover {
            background-color: #03A9F4;
        }


    `
}

customElements.define('button-square-01', ButtonSquare01)