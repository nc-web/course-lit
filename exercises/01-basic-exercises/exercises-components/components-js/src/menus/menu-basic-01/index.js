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
          <slot class="menu__nav-slot-d" name="menu__nav-d-slot1"> </slot>
        </ul>

        <ul class="menu__nav-ul-d">
          <slot class="menu__nav-slot-d" name="menu__nav-d-slot2"> </slot>
        </ul>

        <ul class="menu__nav-ul-d">
          <slot class="menu__nav-slot-d" name="menu__nav-d-slot3"> </slot>
        </ul>

        <ul class="menu__nav-ul-d">
          <slot class="menu__nav-slot-d" name="menu__nav-d-slot4"> </slot>
        </ul>

        <ul class="menu__nav-ul-d">
          <slot class="menu__nav-slot-d" name="menu__nav-d-slot5"> </slot>
        </ul>
      </menu-basic-01-desktop>`;
    }
    if (window.screen.width > 425 && window.screen.width <= 1024) {
      return html` <menu-basic-01-table-laptop>
        <ul class="menu__nav-ul-tl">
          <slot class="menu__nav-slot-tl" name="menu__nav-tl-slot1"> </slot>
        </ul>

        <ul class="menu__nav-ul-tl">
          <slot class="menu__nav-slot-tl" name="menu__nav-tl-slot2"> </slot>
        </ul>

        <ul class="menu__nav-ul-tl">
          <slot class="menu__nav-slot-tl" name="menu__nav-tl-slot3"> </slot>
        </ul>

        <ul class="menu__nav-ul-tl">
          <slot class="menu__nav-slot-tl" name="menu__nav-tl-slot4"> </slot>
        </ul>

        <ul class="menu__nav-ul-tl">
          <slot class="menu__nav-slot-tl" name="menu__nav-tl-slot5"> </slot>
        </ul>
      </menu-basic-01-table-laptop>`;
    }
    if (
      window.screen.width <= 425 ||
      window.screen.width <= 375 ||
      window.screen.width <= 320
    ) {
      return html`
        <menu-basic-01-mobile>
          <ul class="menu__nav-ul-m">
            <slot class="menu__nav-slot-m" name="menu__nav-m-slot1"></slot>
          </ul>

          <ul class="menu__nav-ul-m">
            <slot class="menu__nav-slot-m" name="menu__nav-m-slot2"></slot>
          </ul>

          <ul class="menu__nav-ul-m">
            <slot class="menu__nav-slot-m" name="menu__nav-m-slot3"></slot>
          </ul>

          <ul class="menu__nav-ul-m">
            <slot class="menu__nav-slot-m" name="menu__nav-m-slot4"></slot>
          </ul>

          <ul class="menu__nav-ul-m">
            <slot class="menu__nav-slot-m" name="menu__nav-m-slot5"></slot>
          </ul>
        </menu-basic-01-mobile>
      `;
    }
    return html`Error al cargar el menu`;
  }

  static styles = css`
    :host {
      display: block;
    }

    ::slotted(div) {
      text-decoration: none;
      text-decoration-line: none;
      text-align: center;
      color: #ffffff;
    }

    /* ::slotted(a) {
      text-decoration: none;
      text-decoration-line: none;
      text-align: center;
      color: #FFFFFF;
    } */

    .menu__nav-slot-m {
      margin: 0.5rem 0;
      line-height: 2.5rem;
      font-size: 1rem;
    }

    .menu__nav-ul-m {
      display: grid;
      justify-content: center;
      margin: 0.5rem 0;
    }

    .menu__nav-ul-tl {
      margin: 0 0;
    }

    .menu_nav-ul-tl:hover {
      background-color: chartreuse;
    }

    .menu__nav-slot-tl {
      font-size: 0.8rem;
    }

    .menu__nav-slot-d {
      font-size: 0.9rem;
    }
  `;
}

customElements.define('index-menu-basic-01', IndexMenuBasic01);
