import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Components
import './section-header/index.js';
import './section-about/index.js';
import './section-sevices/index.js';
import './section-footer/index.js';

@customElement('page-home')
export class PageHome extends LitElement {
  render() {
    return html`
      <index-header id="section-header"></index-header>
      <index-about id="section-about"></index-about>
      <index-services></index-services>
      <index-footer></index-footer>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
