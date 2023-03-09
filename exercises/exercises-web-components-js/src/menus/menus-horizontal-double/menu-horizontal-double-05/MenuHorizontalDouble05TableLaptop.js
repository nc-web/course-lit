import { LitElement, html, css } from 'lit';

// components
import './MenuSocialMediaDesktop01MHD5.js';

const Logo = new URL('/assets/img/logo128.png', import.meta.url).href;

export class MenuHorizontalDouble05TableLaptop extends LitElement {
  render() {
    return html`
      <div class="menusm">
        <menu-social-media-desktop-01-mhd5></menu-social-media-desktop-01-mhd5>
      </div>
      <div class="menu">
        <div class="menu__company">
          <div>
            <img class="menu__company-img" src=${Logo} alt="Logo" />
          </div>
          <h4 class="menu__company-title">COMPANY</h4>
        </div>
        <nav class="menu__nav" id="menu__nav">
          <slot></slot>
        </nav>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }

    ::slotted(ul) {
      text-align: center;
      margin: 0 0.3rem;
      padding: 0.2rem 0.8rem;
      border-radius: 0.5rem;
    }

    ::slotted(ul:hover) {
      transition: 0.5s;
      transform: scale(1.2);
      filter: drop-shadow(0.5rem 0.5rem 0.5rem #000000);
    }

    .menusm {
      display: flex;
      justify-content: end;
    }

    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      background-color: rgb(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
    }

    .menu__company {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.3rem;
    }

    .menu__company-img {
      width: 3rem;
      margin-right: 0.3rem;
    }

    .menu__company-title {
      color: #616161;
      font-size: 1.1rem;
    }

    .menu__button-svg {
      width: 2rem;
      height: 2rem;
      padding: 0.3rem;
      border-radius: 50%;
      fill: #ffffff;
      background-color: #616161;
      cursor: pointer;
    }

    .menu__nav {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #ffffff;
    }
  `;
}

customElements.define(
  'menu-horizontal-double-05-table-laptop',
  MenuHorizontalDouble05TableLaptop
);
