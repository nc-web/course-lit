import { LitElement, html, css } from 'lit';

const Logo = new URL('/assets/img/logo128.png', import.meta.url).href;

export class MenuBasic01Mobile extends LitElement {
  static properties = {
    propMenu: false,
  };

  constructor() {
    super();
    this.propMenu = false;
  }

  handleMenu() {
    if (this.propMenu === false) {
      this.propMenu = true;
      console.log(this.propMenu);
    } else {
      this.propMenu = false;
      console.log(this.propMenu);
    }
  }

  render() {
    return html`
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
          <svg class="menu__button-svg" viewBox="0 0 24 24">
            <title>menu</title>
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </div>
        <div>
          ${this.propMenu
            ? html`
                <nav class="menu__nav" id="menu__nav">
                  <slot></slot>
                </nav>
              `
            : html``}
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: blue;
      padding: 0.5rem;
      height: 4rem;
    }

    .menu__company {
      margin: 0.3rem;
    }

    .menu__company-img {
      width: 3rem;
    }

    .menu__button {
      position: absolute;
      top: 1rem;
      right: 0.5rem;
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
      display: grid;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 5rem;
      left: 0;
      width: 100%;
      background-color: #757575;
      color: #ffffff;
      transition: 0.5s;
    }

    .menu__nav-li {
      list-style: none;
      margin: 0.3rem 0;
    }
  `;
}

customElements.define('menu-basic-01-mobile', MenuBasic01Mobile);
