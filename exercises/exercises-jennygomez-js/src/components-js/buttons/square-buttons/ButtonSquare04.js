
import { LitElement, html, css } from 'lit'

export class ButtonSquare04 extends LitElement {
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
            border-radius: .2rem;
            cursor: pointer;
            border-style: none;
            width: 2.5rem;
            height: 2.5rem;
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

customElements.define('button-square-04', ButtonSquare04)