import { LitElement, html, css } from 'lit';

// imagen
const Imagen = new URL('/assets/img/tools.png', import.meta.url).href;

export class CardBasic01 extends LitElement {
  render() {
    return html`
      <div class="card">
        <div class="card__img">
          <img src=${Imagen} width="30px" alt="foto" />
        </div>
        <h4 class="card__tittle">LOREM IMPSUN</h4>
        <div class="card__text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem porro facere beatae laborum sequi doloremque ipsa
            iste, labore perspiciatis, earum recusandae rem facilis quos,
            suscipit temporibus animi!
          </p>
        </div>
        <div class="card__link">
          <a href="www.google.com" target="_blank"> Read More</a>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
      margin: 0;
      padding: 0;
    }

    .card {
      width: 300px;
      height: 280px;
      background: linear-gradient(135deg, #b388ff, #6200ea);
      padding: 10px;
      text-align: center;
      border-radius: 10px;
      position: relative;
    }

    .card__img {
      display: inline-block;
      align-items: center;
      background-color: white;
      border-radius: 50%;
      padding: 15px;
      top: 100px;
      margin: 5px;
    }

    .card__text {
      color: white;
      font-size: 14px;
      position: absolute;
      top: 120px;
    }

    .card__link {
      position: absolute;
      top: 250px;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .card__tittle {
      color: white;
    }

    a:link {
      color: white;
    }
  `;
}

customElements.define('card-basic-01', CardBasic01);
