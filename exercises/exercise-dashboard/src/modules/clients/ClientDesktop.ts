import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Layout
import '../../views/layout/LayoutDesktop.js';

@customElement('client-desktop')
export class ClientDesktop extends LitElement {
  render() {
    return html`
      <layout-desktop>
        <h4>CLIENT DESKTOP</h4>
      </layout-desktop>
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
