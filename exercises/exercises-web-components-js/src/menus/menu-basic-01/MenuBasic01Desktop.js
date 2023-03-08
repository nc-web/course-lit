import { LitElement, html, css } from 'lit';

const Logo = new URL('/assets/img/logo128.png', import.meta.url).href;

export class MenuBasic01Desktop extends LitElement {
  render() {
    return html`
      <div class="menu">
        <div class="menu__company">
          <img class="menu__company-img" src=${Logo} alt="Logo" />
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
      flex-direction: row;
      justify-content: end;
      align-items: center;
      transform: translateY(0);
      width: 100%;
      color: #ffffff;
    }
  `;
}

customElements.define('menu-basic-01-desktop', MenuBasic01Desktop);
