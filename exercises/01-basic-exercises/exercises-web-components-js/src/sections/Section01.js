import { LitElement, html, css } from 'lit';

export class Section01 extends LitElement {
  render() {
    return html` <h2>SECTION 01</h2> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 1rem;
      width: 100%;
      height: 30rem;
      background-color: #c51162;
      color: white;
      text-align: center;
    }
  `;
}

customElements.define('section-01', Section01);
