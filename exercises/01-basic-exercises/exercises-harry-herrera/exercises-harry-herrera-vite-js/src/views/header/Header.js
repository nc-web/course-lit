
import { LitElement, html, css } from 'lit'

// Manejador de Traducciones
import i18next from 'i18next'

// SweetAlert2
import Swal from 'sweetalert2'

// Context Mediante Props
import '../../context/context-prop.js'

export class HeaderTest01 extends LitElement {

  i18next = i18next.init({
    fallbackLng: ['en', 'es'],
    lng: 'en',
    resources: {
      en: {
        translation: {
          bienvenida: 'Welcome',
          title: 'About Us',
          celular: 'cellphone',
          presentacion: 'My name is jenny',
          acerca: 'I am 30 years old',
          variables: '{{indicativo}} {{number}}'
        },
        card_text: {
          card_text_title: 'I am a card!',
          card_text_description: 'Can I change my Text Language! :D',
          card_text_button: 'Save'
        }
      },
      es: {
        translation: {
          bienvenida: 'Bienvenido',
          title: 'Acerca de',
          celular: 'celular',
          presentacion: 'Mi nombre harry',
          acerca: 'tengo 20 años',
          variables: '{{indicativo}} {{number}}'
        },
        // Card Header
        card_text: {
          card_text_title: 'Soy un card!',
          card_text_description: 'Puedo cambiar mi Texto de Idioma! :D',
          card_text_button: 'Guardar'
        }
      },
      de: {
        translation: {
          bienvenida: 'Willkommen',
          title: 'Um',
          celular: 'Handy',
          presentacion: 'Mein Name Richtofen',
          acerca: 'Ich bin 50 Jahre alt',
          variables: ' {{indicativo}} {{number}}'
        },
        card_text: {
          card_text_title: 'Ich bin eine Karte!',
          card_text_description: 'Kann ich meine Textsprache ändern?! :D',
          card_text_button: 'Ich'
        }
      }
    }
  })

  static get properties () {

    return {
      propLanguageSelect: { type: String,
        reflect: true },
      propButton: { type: Boolean,
        reflect: true }
    }

  }

  constructor () {

    super()
    window.addEventListener('DOMContentLoaded', () => {

      this.propLanguageSelect = localStorage.getItem('language') || 'es'
      this.updateTranslations()
      // console.log("DOM Loaded Data", this.propLanguageSelect);

    })

    this.propButton = false

  }

  handleButtonClick () {

    if (this.propButton === false) {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.propButton = true
      console.log(this.propButton)

    } else {

      this.propButton = false
      console.log(this.propButton)

    }

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

  render() {
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
          <h1>${i18next.t('bienvenida')}</h1>
        </div>

        <div>
          <div>
            <div>
              <h4>${i18next.t('title')}</h4>
            </div>
            <div>
              <p>${i18next.t('presentacion')}</p>
            </div>
            <div class="card">
              <div>
              <h2 class="card__title">${i18next.t('card_text_title', { ns: 'card_text' })}</h2>
              </div>
              <div>
                <div>
                  <p class="card__text">${i18next.t('card_text_description', { ns: 'card_text' })}</p>
                </div>
                <div class="card__button">
                  <button @click=${this.handleButtonClick} class="button">${i18next.t('card_text_button', {ns: 'card_text'})}</button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <a href="/missions.html"><h4>Mission Us</h4></a>
            </div>
            <div>
              <p>${i18next.t('acerca')}</p>
            </div>
          </div>

          <div>
            <div>
              <a href="/contact.html"><h4>Contact Us</h4></a>
            </div>
            <div class="footer__text-container">
              <p>
                ${i18next.t('celular')}: +
                ${i18next.t('variables', { indicativo: '57',
    number: '333' })}
              </p>
              <p>email: example@example.com</p>
              <p>visit my page: example.com</p>
            </div>
          </div>
        </div>

        <div>
            <div>
              <a href="/invoice.html"><h4>Factura</h4></a>
            </div>
            <div>
              <p>${i18next.t('acerca')}</p>
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
      width: 18rem;
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
      justify-content: center;
    }
    
    .button {
      color: crimson;
      padding: 2rem;
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
customElements.define('header-test-01', HeaderTest01)
