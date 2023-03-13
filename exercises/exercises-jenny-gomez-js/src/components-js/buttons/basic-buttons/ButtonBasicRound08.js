
import { LitElement, html, css } from 'lit'

export class ButtonBasic02 extends LitElement {
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
            font-size: .9rem;
            padding: .4rem 1.1rem;
            border-radius: 1rem;
            border: none;
            cursor: pointer;
            outline: none;
            background-color: #9E9E9E;
            color: #424242;
            transition: .2s;
            box-shadow: .1rem .1rem .1rem .1rem rgba(0, 0, 0, 0.2);
        }

        button:hover {
            background-color: #03A9F4;
        }

        slot {
            color: #FFFFFF;
        }
    `
}

customElements.define('button-basic-round-08', ButtonBasic02)