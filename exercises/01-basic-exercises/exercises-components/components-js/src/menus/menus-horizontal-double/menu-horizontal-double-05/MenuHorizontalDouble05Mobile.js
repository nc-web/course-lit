import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { animate } from '@lit-labs/motion';

// components
import './MenuSocialMediaDesktop01MHD5.js';

const Logo = new URL('/assets/img/logo128.png', import.meta.url).href;

export class MenuHorizontalDouble05Mobile extends LitElement {
  static properties = {
    propMenu: { type: Boolean, reflect: true },
    slid: { type: Boolean },
  };

  constructor() {
    super();
    this.propMenu = false;
    this.slid = false;
  }

  1;

  handleMenu() {
    if (this.propMenu === false) {
      this.propMenu = true;
      console.log(this.propMenu);
    } else {
      this.propMenu = false;
      console.log(this.propMenu);
    }
    this.slid = !this.slid;
  }

  render() {
    return html`
      <div class="main">
        <div class="menusm">
          <menu-social-media-desktop-01-mhd5></menu-social-media-desktop-01-mhd5>
        </div>
        <div class="menu">
          <div class="menu__company">
            <img class="menu__company-img" src=${Logo} alt="Logo" />
          </div>
          <div
            class="menu__button"
            id="menu__button"
            @click=${this.handleMenu}
            @keyup=${this.handleMenu}
          >
            ${this.propMenu
              ? html`
                  <svg class="menu__button-svg" viewBox="0 0 24 24">
                    <title>menu</title>
                    <path
                      d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
                    />
                  </svg>
                `
              : html`
                  <svg class="menu__button-svg" viewBox="0 0 24 24">
                    <title>menu</title>
                    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                  </svg>
                `}
          </div>
          <div>
            ${this.propMenu
              ? html`
                  <nav
                    class="menu__nav ${classMap({ slid: this.slid })}"
                    ${animate()}
                    id="menu__nav"
                  >
                    <slot></slot>
                  </nav>
                `
              : html``}
          </div>
        </div>
        <div></div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }

    :host([propMenu]) .menu__nav {
      display: grid;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 6rem;
      right: 0;
      width: 60%;
      padding: 1rem;
      color: #3a3a3a;
      list-style: none;
      border-bottom-left-radius: 0.8rem;
      background-color: rgb(255, 255, 255, 0.4);
      backdrop-filter: blur(10px);
      z-index: 10;
      transition-timing-function: ease-in-out;
      transition: 0.5s;

      /* --box-size: 25vw;
      height: var(--box-size);
      width: var(--box-size); */
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

    .slid {
      left: calc(100% - var(--box-size));
    }

    .main {
      position: absolute;
      width: 100%;
      height: 40rem;
    }

    .menusm {
      display: flex;
      justify-content: end;
    }

    .menu {
      position: sticky;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      width: 100%;
      height: 5rem;
      z-index: 2;
      background-color: rgb(255, 255, 255, 0.4);
      backdrop-filter: blur(10px);
    }

    .menu__company {
      margin: 0.3rem;
    }

    .menu__company-img {
      width: 3rem;
      z-index: 20;
    }

    .menu__button {
      position: absolute;
      top: 1.5rem;
      right: 2rem;
    }

    .menu__button-svg {
      width: 2rem;
      height: 2rem;
      margin-top: auto;
      padding: 0.4rem;
      border-radius: 50%;
      fill: #ffffff;
      background-color: #3a3a3a;
      cursor: pointer;
    }
  `;
}

customElements.define(
  'menu-horizontal-double-05-mobile',
  MenuHorizontalDouble05Mobile
);
