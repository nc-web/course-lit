import { LitElement, html, css } from 'lit';

// Images
const BGImage = new URL('/assets/img/bgtec.png', import.meta.url).href;

export class SectionHeader01 extends LitElement {
  render() {
    return html`
      <div>
        <slot></slot>
        <h2>SECTION HEADER</h2>
        <img src="${BGImage}" alt="Bacground" />
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
      position: relative;
    }

    div {
      position: relative;
      text-align: center;
      color: white;
      background-color: #004d40;
    }

    img {
      width: 100%;
    }
  `;
}

customElements.define('section-header-01', SectionHeader01);
