import { LitElement, html, css } from 'lit';
import './components/menu-component.js';
import './components/header-component.js';
import './components/about-us-component.js';
import './components/gallery-component.js';
import './components/contact-us-component.js';
import './components/footer-component.js';

class MyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
  `;

  render() {
    return html`
      <menu-component></menu-component>
      <header-component></header-component>
      <about-us-component></about-us-component>
      <gallery-component></gallery-component>
      <contact-us-component></contact-us-component>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('my-app', MyApp);
