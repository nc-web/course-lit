import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Components
import './views/nav/index.js';
import './views/header/index.js';

@customElement('my-page-andres-ts')
export class MyPageAndresTs extends LitElement {
  @property({ type: String }) header = 'My app';

  render() {
    return html`
      <main>
        <index-nav></index-nav>
        <index-header></index-header>
      </main>
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
