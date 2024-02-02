import { LitElement, html, css } from 'lit';

// components
import './MenuSocialMediaDesktop01.js';

// img
const Logo = new URL('/assets/img/LogoSC.webp', import.meta.url).href;

export class MenuHorizontalDoubleDesktop01 extends LitElement {
  render() {
    return html`
      <div class="menusm">
        <menu-social-media-desktop-01></menu-social-media-desktop-01>
      </div>
      <div class="menu">
        <div class="menu__logo">
          <img src=${Logo} alt="logo" />
        </div>
        <nav class="menu__nav">
          <div class="menu__nav-links">
            <a class="menu__nav-links-1" href="#">INICIO</a>
            <a class="menu__nav-links-2" href="#">NOSOTROS</a>
            <a class="menu__nav-links-3" href="#">PRODUCCIONES</a>
            <a class="menu__nav-links-4" href="#">DEPENDENCIAS</a>
            <a class="menu__nav-links-4" href="#">CONTACTANOS</a>
          </div>
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

    .menusm {
      display: flex;
      justify-content: end;
    }

    .menu {
      width: 100%;
      height: 5rem;
      background-color: #cfcfcf;
      border-radius: 0.6rem 0rem 0.6rem 0.6rem;
      display: flex;
      justify-content: space-around;
    }

    .menu__logo {
      display: flex;
      margin: 1rem;
    }

    .menu__nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.2rem;
      font-family: roboto;
      color: #263238;
    }

    a {
      text-decoration: none;
      color: #263238;
    }

    .menu__logo:hover {
      transform: scale(1.15);
      transition: 0.5s;
      cursor: pointer;
    }

    .menu__nav-links-1:hover {
      color: #263238;
      font-weight: bold;
      transition: 0.2s;
    }

    .menu__nav-links-2:hover {
      color: #263238;
      font-weight: bold;
      transition: 0.2s;
    }

    .menu__nav-links-3:hover {
      color: #263238;
      font-weight: bold;
      transition: 0.2s;
    }

    .menu__nav-links-4:hover {
      color: #263238;
      font-weight: bold;
      transition: 0.2s;
    }

    .menu__login:hover {
      transform: scale(1.15);
      transition: 0.5s;
    }

    a {
      margin: 0 0.6rem;
    }
  `;
}

customElements.define(
  'menu-horizontal-double-desktop-01',
  MenuHorizontalDoubleDesktop01
);
