import { LitElement, html, css } from 'lit'

// Manejador de Traducciones
import i18next from 'i18next'

// Traducciones
import translation from '../../assets/utils/translates/languaje'

// Context Mediante Props
import '../../context/context-prop.js'

export class ContatcTest01 extends LitElement {

  i18next = i18next.init({
    fallbackLng: ['en', 'es'],
    lng: 'en',
    resources: translation
  })


  static get properties () {

    return {
      propLanguageSelect: { type: String }
    }

  }

  constructor () {

    super()
    window.addEventListener('DOMContentLoaded', () => {

      this.propLanguageSelect = localStorage.getItem('language') || 'es'
      this.updateTranslations()
      // console.log("DOM Loaded Data", this.propLanguageSelect);

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

  incrementCounter () {

    // Accede al estado global y actualiza la propiedad counter
    const globalState = this.shadowRoot.querySelector('global-state')
    globalState.counter += 1

  }

  render () {

    const welcomeText = i18next.t('bienvenida')
    const contador = i18next.t('contador')
    const celular = i18next.t('celular')
    const variables = i18next.t('variables', { indicativo: '57',
      number: '333' })

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
          <a href="/"><h1>${welcomeText}</h1></a>
        </div>

        <div>
          <div>
            <div>
              <a href="/contact.html"><h4>Contact Us</h4></a>
            </div>
            <div class="footer__text-container">
              <p>
                ${celular}: +
                ${variables}
              </p>
              <p>email: example@example.com</p>
              <p>visit my page: example.com</p>
            </div>
          </div>
        </div>

        <div>
          <p>${contador}</p>
          <button @click="${this.incrementCounter}">
            Incrementar contador
          </button>
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

    .footer__text-container {
      display: grid;
      align-items: center;
      padding-left: 2rem;
      color: red;
    }
  `

}
customElements.define('contact-test-01', ContatcTest01)
