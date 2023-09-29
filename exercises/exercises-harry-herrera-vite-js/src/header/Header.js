/* eslint-disable no-undef */
import { LitElement, html, css } from "lit";

import i18next from "i18next";

export class HeaderTest01 extends LitElement {
  i18next = i18next.init({
    fallbackLng: ["en", "es"],
    lng: "en",
    resources: {
      en: {
        translation: {
          bienvenida: 'Welcome',
          title: "About Us",
          p: "cellphone",
          presentacion: "My name is jenny",
          acerca: "I am 30 years old",
          variables: "{{indicativo}} {{number}}",
        },
      },
      es: {
        translation: {
          bienvenida: 'Bienvenido',
          title: "Acerca de",
          p: "celular",
          presentacion: "Mi nombre harry",
          acerca: "tengo 20 años",
          variables: "{{indicativo}} {{number}}",
        },
      },
      de: {
        translation: {
          bienvenida: 'Willkommen',
          title: "Um",
          p: "Handy",
          presentacion: "Mein Name Richtofen",
          acerca: "Ich bin 50 Jahre alt",
          variables: " {{indicativo}} {{number}}",
        },
      },
    },
  });

  static get properties() {
    return {
      propLanguageSelect: { type: String },
    };
  }

  constructor() {
    super();
    this.propLanguageSelect = "es";
  }
  
  changeLanguage(language) {
    this.propLanguageSelect = language;
    this.updateTranslations();
  }

  updateTranslations() {
    i18next.changeLanguage(this.propLanguageSelect, (err, t) => {
      if (err) return console.error("Error al cambiar de idioma", err);
      this.requestUpdate();
    });
  }

  render() {
    return html`
  <section class="section">
      <div class="languaje">
        <div>
          <button class="btn-en" @click="${() => this.changeLanguage("en")}">
            EN
          </button>
        </div>

        <div>
          <button class="btn-es" @click="${() => this.changeLanguage("es")}">
            ES
          </button>
        </div>

        <div>
          <button class="btn-de" @click="${() => this.changeLanguage("de")}">
            DE
          </button>
        </div>
      </div>

        <div>
          <h1>${i18next.t("bienvenida")}</h1>
        </div>

        <div>
          <div>
            <div>
              <h4>${i18next.t("title")}</h4>
            </div>
            <div>
              <p>${i18next.t("presentacion")}</p>
            </div>
          </div>

          <div>
            <div>
              <h4>Mission Us</h4>
            </div>
            <div>
              <p>${i18next.t("acerca")}</p>
            </div>
          </div>

          <div>
            <div>
              <a href="/contact.html"><h4>Contact Us</h4></a>
            </div>
            <div class="footer__text-container">
              <p>${i18next.t("p")}: + ${i18next.t("variables", {indicativo: "57", number:"333"})}</p>
              <p>email: example@example.com</p>
              <p>visit my page: example.com</p>
            </div>
          </div>
        </div>
      </section>
    `;
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
  `;
}
customElements.define("header-test-01", HeaderTest01);
