
import { LitElement, html, css  } from 'lit'

export class ButtonRound04 extends LitElement {
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
            border-radius: 50%;
            background-color: #9E9E9E;
            color: #424242;
            cursor: pointer;
            border-style: none;
            width: 3rem;
            height: 3rem;
        }

        button:hover {
            background-color: #03A9F4;
        }

        slot {
            color: #FFFFFF;
        }
        
    `
}

customElements.define('button-round-04', ButtonRound04)