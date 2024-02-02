import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Views
import '../menus/menu-vertical/MenuVerticalDesktop.js';

@customElement('layout-desktop')
export class LayoutDesktop extends LitElement {
  render() {
    return html`
      <div class="layout">
        <div class="layout__menuvertical">
          <menu-vertical-desktop></menu-vertical-desktop>
        </div>
        <div class="layout__main">
          <div class="layout__main-menuhorizontal"></div>
          <div class="layout__main-content">
            <slot>
              <h4>Layout Desktop Main</h4>
            </slot>
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }

    .layout {
      display: grid;
      grid-template-columns: 15% 85%;
      justify-content: center;
    }

    .layout__menuvertical {
    }

    .layout__main {
      background-color: beige;
    }
  `;
}
