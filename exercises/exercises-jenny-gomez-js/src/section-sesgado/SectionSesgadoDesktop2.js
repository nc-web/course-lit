import { LitElement, html, css } from 'lit';

export class SectionDescktop extends LitElement {
  render() {
    return html`
      <section class="section">
        <h1 class="section__title">Jenny Gómez</h1>
      </section>
    `;
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
      //background-color:#F5F5F5;
    }

    .section:after {
      width: 100%;
      height: 100%;
      position: absolute;
      content: '';
      background-color: transparent;
      transform-origin: top right;
      transform: skewY(-5deg);
      border: 0.1rem solid #b3e5fc;
    }

    .section__title {
      position: absolute;
      top: 17rem;
      left: 40rem;
      font-size: 72px;
      background: -webkit-linear-gradient(left top, red, yellow);
      background: linear-gradient(to bottom right, pink, purple);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;
}

customElements.define('section-sesgado-desktop', SectionDescktop);
