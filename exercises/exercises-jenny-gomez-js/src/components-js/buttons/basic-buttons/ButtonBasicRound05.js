
import { LitElement, html, css } from 'lit'

export class ButtonBasic06 extends LitElement {
    render() {
        return html`
            <button><slot></slot></button>
        `
    }

    static styles = css`
        :host{
            display: inline-block;
            margin: 1rem;
            padding: 0;
        }
        
        button {
            font-size: 1.1rem;
            padding: .7rem 1.4rem;
            border-radius: .7rem;
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

customElements.define('button-basic-round-05', ButtonBasic06)