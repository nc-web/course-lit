
import { LitElement, html, css } from 'lit'

export class ButtonBasic extends LitElement {
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
            font-size: .9rem;
            padding: .4rem 1.1rem;
            border-radius: .3rem;
            border: none;
            cursor: pointer;
            outline: none;
            background-color: #BDBDBD;
            color: #424242;
            transition: .2s;
        }

        button:hover {
            background-color: #03A9F4;
        }
    `

}

customElements.define('button-basic', ButtonBasic)
