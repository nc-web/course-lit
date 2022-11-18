
import { html, css, LitElement } from 'lit'

export class ButtonNC extends LitElement {
  static properties = {}

  /*
  constructor () {
    super()
  }
  */

  render () {
    return html`
            <button><slot></slot></button>
        `
  }

  static styles = css`
  
  :host {
    padding: 0;
     margin: 0;
  }

  button {
    padding: .4rem;
    border-radius: .3rem;
    background-color: #BDBDBD;;
    color: #424242;
    border: none;
    cursor: pointer;
    transition: .2s;
  }

  button:hover {
    background-color: #03A9F4;
  }
  
  `
}

customElements.define('button-nc', ButtonNC)
