
import { LitElement, html, css } from 'lit'

// Components
import './cards/CardHeader01'

export class SectionHeaderMobile extends LitElement {

  static properties = {
    name: ''
  }

  constructor() {
    super()
    this.name = 'Pedro'
  }

  render() {
    return html`
      <section class="section">
        <div class="section__container">
          <div class="section__container_title">
            <h1 class="section__container-title-text"> Hola Mundo! </h1>
          </div>
          <div class="section__container_cards">
            <div>
              <card-header-01>
                <h2>Mi nombre es Harry</h2>  <!-- Slot #1 -->
                <p class="card_text">Esto un card de presentacion: </p>  <!-- Slot #2 -->
              </card-header-01>
            </div>
            <div>
              <card-header-01>
                <h2>Mi nombre es Juan</h2>
              </card-header-01>
            </div>
            <div>
              <card-header-01>
                <h2>Mi nombre es <strong>${this.name}</strong> </h2>
              </card-header-01>
            </div>
            <div>
              <card-header-01></card-header-01>
            </div>
          </div>
        </div>
      </section>
    `
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }

    .section {
      padding: 1rem;
      background: red;
    }

    .section__container_title {
      display: flex;
      justify-content: center;
    }

    .section__container-title-text {
      color: white;
      font-size: 2rem;
    }

    .section__container_cards {
      display: grid;
      grid-template-columns: 100%;
      gap: 1rem;
      padding: 1rem;
      justify-content: center;
      background-color: blue;
    }

    .card_text {
      color: green;
      font-size: 2rem;
    }
  `
}

customElements.define('section-header-mobile', SectionHeaderMobile)
