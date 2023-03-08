import { LitElement, html, css } from 'lit';

// Components
import './MenuBasic01Mobile.js';
import './MenuBasic01TableLaptop.js';
import './MenuBasic01Desktop.js';

export class IndexMenuBasic01 extends LitElement {
  render() {
    if (window.screen.width > 1024) {
      return html` <menu-basic-01-desktop>
        <ul class="menu__nav-ul-d">
          <slot class="menu__nav-slot" name="menu__nav-d-slot1"> </slot>
        </ul>

        <slot class="menu__nav-slot" name="menu__nav-d-slot2"> </slot>

        <slot class="menu__nav-slot" name="menu__nav-d-slot3"> </slot>

        <slot class="menu__nav-slot" name="menu__nav-d-slot4"> </slot>

        <slot class="menu__nav-slot" name="menu__nav-d-slot5"> </slot>
      </menu-basic-01-desktop>`;
    }
    if (window.screen.width > 425 && window.screen.width <= 1024) {
      return html` <menu-basic-01-table-laptop>
        <slot class="menu__nav-slot" name="menu__nav-tl-slot1"> </slot>

        <slot class="menu__nav-slot" name="menu__nav-tl-slot2"> </slot>

        <slot class="menu__nav-slot" name="menu__nav-tl-slot3"> </slot>

        <slot class="menu__nav-slot" name="menu__nav-tl-slot4"> </slot>

        <slot class="menu__nav-slot" name="menu__nav-tl-slot5"> </slot>
      </menu-basic-01-table-laptop>`;
    }
    if (
      window.screen.width <= 425 ||
      window.screen.width <= 375 ||
      window.screen.width <= 320
    ) {
      return html`
        <menu-basic-01-mobile>
          <div>
            <ul class="menu__nav-ul-m">
              <slot class="menu__nav-slot-m" name="menu__nav-m-slot1"> </slot>
            </ul>

            <ul class="menu__nav-ul-m">
              <slot class="menu__nav-slot-m" name="menu__nav-m-slot2"> </slot>
            </ul>

            <ul class="menu__nav-ul-m">
              <slot class="menu__nav-slot-m" name="menu__nav-m-slot3"> </slot>
            </ul>

            <ul class="menu__nav-ul-m">
              <slot class="menu__nav-slot-m" name="menu__nav-m-slot4"> </slot>
            </ul>

            <ul class="menu__nav-ul-m">
              <slot class="menu__nav-slot-m" name="menu__nav-m-slot5"> </slot>
            </ul>
          </div>
        </menu-basic-01-mobile>
      `;
    }
    return html`Error al cargar el menu`;
  }

  static styles = css`
    :host {
      display: block;
    }

    ::slotted(a) {
      padding: 0 1rem;
      border-radius: 0.5rem;
      text-decoration: none;
      text-align: center;
      text-decoration-line: none;
      color: #3a3a3a;
      backdrop-filter: blur(10px);
    }

    /* div ::slotted {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(0, 0, 0, 0.4);
      backdrop-filter: blur(10px);
    } */

    /* ::slotted(div) {
      padding: 0 1rem;
      border-radius: .5rem;
      text-decoration: none;
      text-align: center;
      text-decoration-line: none;
      color: #3a3a3a;
      backdrop-filter: blur(10px);
    } */

    .menu__nav-ul-m {
      display: grid;
      justify-content: center;
      margin: 0.5rem;
    }

    .menu__nav-slot-m {
      margin: 0.5rem 0;
      line-height: 2.5rem;
      font-size: 1rem;
    }
  `;
}

customElements.define('index-menu-basic-01', IndexMenuBasic01);
