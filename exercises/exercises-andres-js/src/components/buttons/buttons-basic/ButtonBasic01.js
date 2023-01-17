
import { LitElement, html, css } from 'lit'

export class ButtonBasic01 extends LitElement {

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
            padding: .3rem .5rem;
            border-radius: .5rem;
            border-style: none;
            cursor: pointer;
            color: #FFFFFF;
            background-color: #9E9E9E;
            transition: .3s;
        }

        button:hover {
            background-color: #2196F3;
        }


    `
}

customElements.define('button-basic-01', ButtonBasic01)