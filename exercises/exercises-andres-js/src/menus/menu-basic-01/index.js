import { LitElement, html, css } from 'lit';

// Components
import './MenuBasic01Mobile.js';
import './MenuBasic01TableLaptop.js';
import './MenuBasic01Desktop.js';

export class IndexMenuBasic01 extends LitElement {
  render() {
    if (window.screen.width > 1024) {
      return html` <menu-basic-01-desktop>
        <slot class="menu__nav-slot" name="menu__nav-d-slot1">
          <li class="menu__nav-li">Lorem 1</li>
        </slot>

        <slot class="menu__nav-slot" name="menu__nav-d-slot2">
          <li class="menu__nav-li">Lorem 2</li>
        </slot>

        <slot class="menu__nav-slot" name="menu__nav-d-slot3">
          <li class="menu__nav-li">Lorem 3</li>
        </slot>

        <slot class="menu__nav-slot" name="menu__nav-d-slot4">
          <li class="menu__nav-li">Lorem 4</li>
        </slot>

        <slot class="menu__nav-slot" name="menu__nav-d-slot5">
          <li class="menu__nav-li">Lorem 5</li>
        </slot>
      </menu-basic-01-desktop>`;
    }
    if (window.screen.width > 425 && window.screen.width <= 1024) {
      return html` <menu-basic-01-table-laptop>
        <slot class="menu__nav-slot" name="menu__nav-tl-slot1">
          <li class="menu__nav-li">Lorem 1</li>
        </slot>

        <slot class="menu__nav-slot" name="menu__nav-tl-slot2">
          <li class="menu__nav-li">Lorem 2</li>
        </slot>

        <slot class="menu__nav-slot" name="menu__nav-tl-slot3">
          <li class="menu__nav-li">Lorem 3</li>
        </slot>

        <slot class="menu__nav-slot" name="menu__nav-tl-slot4">
          <li class="menu__nav-li">Lorem 4</li>
        </slot>

        <slot class="menu__nav-slot" name="menu__nav-tl-slot5">
          <li class="menu__nav-li">Lorem 5</li>
        </slot>
      </menu-basic-01-table-laptop>`;
    }
    if (
      window.screen.width <= 425 ||
      window.screen.width <= 375 ||
      window.screen.width <= 320
    ) {
      return html`
        <menu-basic-01-mobile>
          <slot class="menu__nav-slot-m" name="menu__nav-m-slot1">
            <!-- <li class="menu__nav-li-m">Lorem 1</li> -->
          </slot>

          <slot class="menu__nav-slot-m" name="menu__nav-m-slot2">
            <!-- <li class="menu__nav-li-m">Lorem 2</li> -->
          </slot>

          <slot class="menu__nav-slot-m" name="menu__nav-m-slot3">
            <li class="menu__nav-li-m">Lorem 3</li>
          </slot>

          <slot class="menu__nav-slot-m" name="menu__nav-m-slot4">
            <li class="menu__nav-li-m">Lorem 4</li>
          </slot>

          <slot class="menu__nav-slot-m" name="menu__nav-m-slot5">
            <li class="menu__nav-li-m">Lorem 5</li>
          </slot>
        </menu-basic-01-mobile>
      `;
    }
    return html`Error al cargar el menu`;
  }

  static styles = css`
    :host {
      display: block;
    }

    .menu__nav-slot-m {
      margin: 0.5rem 0;
    }

    .menu__nav-li-m {
      list-style: none;
      margin: 0.5rem 0rem;
    }

    .menu__nav-li {
      list-style: none;
      margin: 0 0.5rem;
    }
  `;
}

customElements.define('index-menu-basic-01', IndexMenuBasic01);
