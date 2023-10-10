import { LitElement, html, css } from "lit";

class GlobalState extends LitElement {
  static properties = {
    counter: { type: Number },
    language: { type: String },
  };

  constructor() {
    super();
    this.counter = 0;
    this.language = localStorage.getItem("language") || "en";
  }

  changeLanguage(language) {
    this.language = language;
    // Guarda el idioma en localStorage para que persista en las recargas de página
    localStorage.setItem("language", language);

    // Dispara un evento personalizado para notificar a otros componentes sobre el cambio de idioma
    this.dispatchEvent(
      new CustomEvent("language-changed", { detail: language })
    );
  }

  static styles = css``;

  render() {
    return html`
      <p>Contador desde el estado global: ${this.counter}</p>
      <p>Lenguaje desde el estado global: ${this.language}</p>
    `;
  }
}

customElements.define("global-state", GlobalState);
