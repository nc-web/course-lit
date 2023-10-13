import { LitElement, html, css } from 'lit'

// manejador de Divisas
import currency from '../../assets/utils/divisas/currency'

import { convertCurrency, formatCurrency } from '../../assets/utils/divisas/currency-utils'

// Convertidor de Tasas
// import { convertCurrency } from "../divisas/convert-currency";

// Manejador de Traducciones
import i18next from 'i18next'

// Traducciones
import translation from '../../assets/utils/translates/languaje'

// Context Mediante Props
import '../../context/context-prop.js'

export class MisionsTest01 extends LitElement {

  i18next = i18next.init({
    fallbackLng: ['en', 'es'],
    lng: 'en',
    resources: translation
  })

  static get properties () {

    return {
      propLanguageSelect: { type: String,
        reflect: true }
    }

  }

  constructor () {

    super()
    window.addEventListener('DOMContentLoaded', () => {

      this.propLanguageSelect = localStorage.getItem('language') || 'es'
      this.updateTranslations()

    })

  }

  updateTranslations () {

    i18next.changeLanguage(this.propLanguageSelect, (err, t) => {

      if (err) {

        return console.error('Error al cambiar de idioma', err)

      }
      this.requestUpdate()

    })

  }

  changeLanguage (language) {

    // console.log(`changeLanguage(${language}) llamado`);
    this.propLanguageSelect = language
    localStorage.setItem('language', language)
    const globalState = this.shadowRoot.querySelector('global-state')
    globalState.changeLanguage(language)
    this.dispatchEvent(
      new CustomEvent('language-changed', { detail: language })
    )
    this.updateTranslations()

  }

  firstUpdated () {

    const currencySelect = this.shadowRoot.querySelector('#currencySelect')
    currencySelect.addEventListener('change', (e) => {

      const selectedCurrency = e.target.value
      this.updateFormattedValue(selectedCurrency)

    })

    const amountInput = this.shadowRoot.querySelector('#amount-input')
    amountInput.addEventListener('input', () => {

      this.updateFormattedValue()

    })

    this.updateFormattedValue()

  }

  updateFormattedValue (selectedCurrency) {

    if (typeof selectedCurrency === 'undefined') {

      // Si selectedCurrency es undefined, establece el valor predeterminado a 'us' (DOL).
      selectedCurrency = 'cop'

    }

    const amountInput = this.shadowRoot.querySelector('#amount-input')
    const amountFormatted = this.shadowRoot.querySelector('#amount-formatted')

    // Obtén el valor del monto ingresado por el usuario.
    const inputValue = parseFloat(amountInput.value) || 0

    // Llama a la función `currency` para formatear el valor.
    const convertedAmount = convertCurrency(inputValue, 'us', selectedCurrency)

    // Formatea el valor convertido con el símbolo de la moneda
    const formattedValue = formatCurrency(convertedAmount, selectedCurrency)

    // Actualiza el contenido del elemento #amount-formatted con el resultado formateado.
    amountFormatted.textContent = formattedValue

  }

  render () {

    const welcomeText = i18next.t('bienvenida')
    const presentationText = i18next.t('presentacion')

    return html`
      <section class="section">
        <div class="languaje">
          <div>
            <button class="btn-en" @click="${() => this.changeLanguage('en')}">
              EN
            </button>
          </div>

          <div>
            <button class="btn-es" @click="${() => this.changeLanguage('es')}">
              ES
            </button>
          </div>

          <div>
            <button class="btn-de" @click="${() => this.changeLanguage('de')}">
              DE
            </button>
          </div>
        </div>

        <div>
          <h1>${welcomeText}</h1>
        </div>

        <div>
          <div>
            <div>
              <h4>Mission Us</h4>
            </div>
            <div>
              <p>${presentationText}</p>
            </div>
            <div class="card">
              <div>
                <h2 class="card__title">
                  ${i18next.t('card_text_title', { ns: 'card_text' })}
                </h2>
              </div>
              <div>
                <div>
                  <p class="card__text">
                    ${i18next.t('card_text_description', { ns: 'card_text' })}
                  </p>
                  <div class="input-container">
                    <label for="amount-input">Valor (sin formato)</label>
                    <input
                      id="amount-input"
                      type="number"
                      placeholder="por ejemplo 0"
                      min="0"
                      step="0.01"
                      value="0"
                    />
                  </div>
                  <div>
                    <select id="currencySelect" name="currencySelect">
                      <option data-region="us" value="us">DOLAR</option>
                      <option data-region="cop" value="cop">COP</option>
                      <option data-region="eu" value="eu">EUR</option>
                      <option data-region="jp" value="jp">YEN</option>
                      <option data-region="cn" value="cn">YUAN</option>
                    </select>
                  </div>

                  <h2>Resultado:</h2>
                  <div id="amount-formatted">1.300,75 €</div>
                </div>
                <div class="card__button">
                  <button class="button">
                    ${i18next.t('card_text_button', { ns: 'card_text' })}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <a href="/contact.html"><h4>Contact Us</h4></a>
            </div>
          </div>
        </div>

        <global-state></global-state>
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
      padding: 2rem;
    }

    .languaje {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
    }

    .card {
      width: 65rem;
      height: 18rem;
      padding: 2rem;
      background-color: crimson;
    }

    .card__title {
      font-size: 2rem;
      font-weight: bold;
      color: white;
    }

    .card__text {
      font-size: 1.5rem;
      font-weight: bolder;
      color: white;
    }

    .card__button {
      display: flex;
      align-items: center;
      justify-content: end;
    }

    .button {
      color: crimson;
      font-size: 2rem;
    }

    .footer__text-container {
      display: grid;
      align-items: center;
      padding-left: 2rem;
      color: red;
    }
  `

}
customElements.define('misions-test-01', MisionsTest01)
