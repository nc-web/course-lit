import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators';

// Components Base
import '../components/buttons/ButtonBasic01.js';

// Images
const Jenny = new URL('/assets/img/jenny.png', import.meta.url).href;

@customElement('card-01')
export class Card01 extends LitElement {
  render() {
    return html`
      <article class="card">
        <div class="card__header">
          <img class="card__header-img" src=${Jenny} alt="Jenny" />
        </div>

        <div class="card__body">
          <h2>lorem</h2>
          <p>sit amet</p>
        </div>

        <div class="card__footer">
          <button class="card__footer-btn-primary">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="#EEEEEE"
                d="M12,9C10.4,9 8.85,9.25 7.4,9.72V12.82C7.4,13.22 7.17,13.56 6.84,13.72C5.86,14.21 4.97,14.84 4.17,15.57C4,15.75 3.75,15.86 3.5,15.86C3.2,15.86 2.95,15.74 2.77,15.56L0.29,13.08C0.11,12.9 0,12.65 0,12.38C0,12.1 0.11,11.85 0.29,11.67C3.34,8.77 7.46,7 12,7C16.54,7 20.66,8.77 23.71,11.67C23.89,11.85 24,12.1 24,12.38C24,12.65 23.89,12.9 23.71,13.08L21.23,15.56C21.05,15.74 20.8,15.86 20.5,15.86C20.25,15.86 20,15.75 19.82,15.57C19.03,14.84 18.14,14.21 17.16,13.72C16.83,13.56 16.6,13.22 16.6,12.82V9.72C15.15,9.25 13.6,9 12,9Z"
              />
            </svg>
          </button>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="#BDBDBD"
              d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
            />
          </svg>

          <button class="card__footer-btn-secundary">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="#EEEEEE"
                d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
              />
            </svg>
          </button>
        </div>

        <div>
          <button-basic-01> GUARDAR </button-basic-01>
        </div>
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
      border-radius: 1.5rem;
      padding: 1.2rem;
      width: 15.6rem;
      background-color: #9575cd;
    }

    .card__header {
      display: grid;
      justify-content: center;
    }

    .card__header-img {
      position: relative;
      border-radius: 50%;
      width: 9.3rem;
      height: 9.3rem;
    }

    .card__body {
      text-align: center;
      color: #e0e0e0;
    }

    .card__footer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
    }

    .card__footer-btn-primary {
      border-radius: 50%;
      background-color: #f06292;
      cursor: pointer;
      border-style: none;
      width: 3rem;
      height: 3rem;
    }

    .card__footer-btn-secundary {
      border-radius: 50%;
      background-color: #b388ff;
      cursor: pointer;
      border-style: none;
      width: 3rem;
      height: 3rem;
    }
  `;
}
