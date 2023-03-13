
import { LitElement, html, css } from 'lit'

export class Section02 extends LitElement {
  render() {
    return html` <h2>SECTION 02</h2> `
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 1rem;
      width: 100%;
      height: 30rem;
      background-color: #6a1b9a;
      color: white;
      text-align: center;
    }
  `
}

customElements.define('section-02', Section02);
