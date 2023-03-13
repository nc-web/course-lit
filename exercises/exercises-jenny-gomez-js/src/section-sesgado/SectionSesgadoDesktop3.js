import { LitElement, html, css } from 'lit';

export class SectionDescktop extends LitElement {
  render() {
    return html` <section class="section"></section> `;
  }

  static styles = css`
    :host {
      display: block;
      padding: 0;
      margin: 0;
    }

    .section {
      width: 100%;
      height: 37.5rem;
      position: relative;
      //background-color: #688;
    }

    .section:after {
      width: 100%;
      height: 100%;
      position: absolute;
      content: '';
      background: linear-gradient(130deg, #965, #a1887f);
      //background-color: #965;
      transform-origin: top left;
      transform: skewY(8deg);
    }
  `;
}

customElements.define('section-sesgado-desktop', SectionDescktop);
