import { LitElement, html, css } from 'lit';

export class CardPoint extends LitElement {
  render() {
    return html`
      <article class="card">
        <div class="card__header"></div>
      </article>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
      margin: 0;
      padding: 0;
    }

    .card {
      width: 19rem;
      margin: 1.2rem;
      //border: 1rem solid #eee;
    }

    .card__header {
      width: 100%;
      height: 18.6rem;
      position: relative;
      background-color: #1e88e5;
      margin-bottom: 11.8rem;
    }

    .card__header:before {
      width: 71%;
      height: 71%;
      position: absolute;
      content: '';
      left: 2.7rem;
      top: 12rem;
      background-color: #1e88e5;
      transform: rotate(45deg);
      z-index: -1;
    }
  `;
}

customElements.define('card-point', CardPoint);
