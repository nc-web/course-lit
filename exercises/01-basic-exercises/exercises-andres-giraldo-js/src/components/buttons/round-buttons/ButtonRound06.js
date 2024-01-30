
import { LitElement, html, css } from 'lit'

export class ButtonRound06 extends LitElement {
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
            border-radius: 50%;
            background-color: #BDBDBD;
            color: #424242;
            cursor: pointer;
            border-style: none;
            width: 4rem;
            height: 4rem;
        }

        button:hover {
            background-color: #03A9F4;
        }
    `
}

customElements.define('button-round-06', ButtonRound06)
