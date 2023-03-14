import { LitElement, html, css } from 'lit';

export class Section03 extends LitElement {
  render() {
    return html` <h2>SECTION 03</h2> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 1rem;
      width: 100%;
      height: 30rem;
      background-color: #00695c;
      color: white;
      text-align: center;
    }
  `;
}

customElements.define('section-03', Section03);
