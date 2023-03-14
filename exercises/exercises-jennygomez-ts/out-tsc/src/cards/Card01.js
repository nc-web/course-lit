import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
// Img
const Lit = new URL('/public/img/jenny.png', import.meta.url).href;
let Card01 = class Card01 extends LitElement {
    render() {
        return html `
      <article class="card">
        <div class="card__header">
          <img class="card__header-img" src=${Lit} alt="" />
        </div>

        <div class="card__body">
          <h1 class="card__body-title">lorem ipsum</h1>
          <h4 class="card__body-subtitle">inserting humor</h4>
          <p class="card__body-text">
            development state. Many versions have evolved over the years,
            sometimes by accident, other times on purpose (for example
          </p>
        </div>

        <div class="card__footer">
          <button>lOREM</button>
        </div>
      </article>
    `;
    }
};
Card01.styles = css `
    :host {
      display: inline-block;
      margin: 1rem;
      padding: 0;
    }

    .card {
      width: 18.7rem;
      padding: 0.625rem;
      border-radius: 1rem;
      box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
      background-color: #e0e0e0;
    }

    .card__header {
      display: grid;
      justify-content: center;
    }

    .card__header-img {
      width: 9.3rem;
      height: 9.3rem;
    }

    .card__body-title {
      text-align: center;
      color: #039be5;
    }

    .card__body-subtitle {
      text-align: center;
      color: #f06292;
    }

    .card__body-text {
      text-align: center;
      color: #757575;
    }

    .card__footer {
      display: grid;
      justify-content: center;
    }
  `;
Card01 = __decorate([
    customElement('card-01')
], Card01);
export { Card01 };
//# sourceMappingURL=Card01.js.map