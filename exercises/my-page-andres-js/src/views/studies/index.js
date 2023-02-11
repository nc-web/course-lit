import { LitElement, html, css } from 'lit';

// Components
import './StudiesDesktop.js';
import './StudiesMobile.js';

export class IndexStudies extends LitElement {
  render() {
    if (window.screen.width > 425) {
      return html`<studies-desktop></studies-desktop>`;
    }
    if (
      window.screen.width <= 425 ||
      window.screen.width <= 375 ||
      window.screen.width <= 320
    ) {
      return html`<studies-mobile></studies-mobile>`;
    }
    return html`Error al cargar el menu`;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}

customElements.define('index-studies', IndexStudies);
