
import {LitElement, html, css } from 'lit'

export class ButtonIcon01 extends LitElement {
    render() {
        return html`
            <button><slot></slot></button>
        `
    }

    static styles = css`
        :host {
            display: inline-block;
            margin: 0;
            padding: 0;
        }

        button {
            align-content: center;
            font-size: .6rem;
            padding: .2rem .9rem .1rem .9rem;
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

customElements.define('button-icon-01', ButtonIcon01)