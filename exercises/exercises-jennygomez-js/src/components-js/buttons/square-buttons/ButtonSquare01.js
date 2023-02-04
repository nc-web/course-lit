
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
            cursor: pointer;
            border-style: none;
            width: 1rem;
            height: 1rem;
            background-color: #9E9E9E;
            color: #424242;
        }

        button:hover {
            background-color: #03A9F4;
        }

        slot {
            color: #FFFFFF;
        }

    `
}

customElements.define('button-square-01', ButtonSquare01)