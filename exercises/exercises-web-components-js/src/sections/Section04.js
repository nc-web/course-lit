import { LitElement, html, css } from 'lit';

export class Section04 extends LitElement {
  render() {
    return html` <h2>SECTION 04</h2> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 1rem;
      width: 100%;
      height: 30rem;
      background-color: #827717;
      color: white;
      text-align: center;
    }
  `;
}

customElements.define('section-04', Section04);
