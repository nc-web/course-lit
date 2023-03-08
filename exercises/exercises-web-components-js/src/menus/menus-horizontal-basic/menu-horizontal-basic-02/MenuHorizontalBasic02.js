import { LitElement, html, css } from 'lit';

// img
const Logo = new URL('/assets/img/LogoSC.webp', import.meta.url).href;

export class MenuHorizontalBasic02 extends LitElement {
  render() {
    return html`
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
        <div class="menu__login">
          <svg style="width:3rem; height:3rem:" viewBox="0 0 24 24">
            <title>account-circle</title>
            <path
              fill="#263238"
              d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
            />
          </svg>
          <p>LOGIN</p>
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

    .menu__login {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
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

customElements.define('menu-horizontal-basic-02', MenuHorizontalBasic02);
