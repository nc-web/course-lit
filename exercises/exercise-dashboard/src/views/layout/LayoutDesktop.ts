import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Views
import '../menus/menu-vertical/MenuVerticalDesktop.js';

@customElement('layout-desktop')
export class LayoutDesktop extends LitElement {
  render() {
    return html`
      <div class="layout">
        <div class="layout__menuhorizontal"></div>
        <div class="layout__menuvertical">
          <menu-vertical-desktop></menu-vertical-desktop>
        </div>
        <div class="layout__main">
          <slot>
            <h4>Layout Desktop Main</h4>
          </slot>
        </div>
      </div>
    `;
  }

  static style = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
