
import { LitElement, html, css } from 'lit'

export class ButtonBasic01 extends LitElement {
  render() {
    return html`
            <button><slot>BUTTON RED</slot></button>
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
            background-color: #C62828;
            color: #FFFFFF;
            outline: none;
            transition: .2s;
            border-radius: .8rem;
        }

        button:hover {
            background-color: #9E9E9E;
        }
    `

}

customElements.define('button-basic-red', ButtonBasic01)
