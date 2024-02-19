
import { LitElement, html, css } from 'lit'

export class ButtonBasicBlue extends LitElement {
  render() {
    return html`
            <button><slot>Button Blue</slot></button>
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
            padding: 1rem 1rem;
            border: none;
            cursor: pointer;
            background-color: #1565c0;
            color: #FFFF;
            outline: none;
            transition: .2s;
            border-radius: .8rem;

        }

        button:hover {
            background-color: #9e9e9e;
        }
    `

}

customElements.define('button-basic-blue', ButtonBasicBlue)
