import { LitElement, html, css } from 'lit';

// img
const Logo = new URL('/assets/img/LogoSC.webp', import.meta.url).href;
const Icono = new URL('/assets/img/menu.svg', import.meta.url).href;

export class MenuHorizontalBasic01 extends LitElement {
  render() {
    return html`
      <div class="menu">
        <div class="menu__logo">
          <img src=${Logo} alt="logo" />
        </div>
        <div>
          <img src=${Icono} alt="icono" />
        </div>
        <nav class="menu__nav">
          <a class="menu__nav-links" href="#">INICIO</a>
          <a class="menu__nav-links" href="#">NOSOTROS</a>
          <a class="menu__nav-links" href="#">PRODUCCIONES</a>
          <a class="menu__nav-links" href="#">DEPENDENCIAS</a>
          <a class="menu__nav-links" href="#">CONTACTANOS</a>
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

    a {
      text-decoration: none;
      color: #263238;
      margin: 0 0.6rem;
    }

    .menu {
      width: 100%;
      height: 5rem;
      background-color: #cfcfcf;
      border-radius: 0.6rem;
      display: flex;
      justify-content: space-around;
    }

    .menu__logo {
      display: flex;
      margin: 1rem;
    }

    .menu__nav {
      display: flex;
      justify-content: start;
      align-items: center;
      font-size: 1.2rem;
      font-family: roboto;
      color: #263238;
    }

    .menu__logo:hover {
      transform: scale(1.15);
      transition: 0.5s;
      cursor: pointer;
    }

    .menu__nav-links:hover {
      color: #263238;
      font-weight: bold;
      transition: 0.2s;
    }
  `;
}

customElements.define('menu-horizontal-basic-01', MenuHorizontalBasic01);
