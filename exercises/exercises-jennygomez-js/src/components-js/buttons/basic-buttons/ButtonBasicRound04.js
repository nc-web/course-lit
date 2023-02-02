
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
            padding: .5rem 1.2rem;
            border-radius: .6rem;
            border: none;
            cursor: pointer;
            outline: none;
            transition: .2s;
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

customElements.define('button-basic-round-04', ButtonBasic05)