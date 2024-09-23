import { LitElement, html, css } from 'lit';

// Components
import './SectionHeaderDesktop';
import'./SectionHeaderLaptop';
import'./SectionHeaderMobile';
import'./SectionHeaderTablet';

export class IndexMenuBasic01 extends LitElement {
  render() {
    if (window.screen.width > 1024) {
      return html` <section-header-desktop></section-header-desktop>`;
    }
    if (window.screen.width > 768 && window.screen.width <= 1024) {
      return html` <section-header-laptop></section-header-laptop>`;
    }
    if (window.screen.width > 425 && window.screen.width <= 768) {
      return html` <section-header-tablet></section-header-tablet>`;
    }
    if (
      window.screen.width <= 425) {
      return html`
        <section-header-mobile></section-header-mobile>
      `;
    }
    return html`Error al cargar el menu`;
  }
}

customElements.define('index-section-header', IndexMenuBasic01);
