
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
            padding: .7rem 1.4rem .7rem 1.4rem;
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

customElements.define('button-basic-06', ButtonBasic06)