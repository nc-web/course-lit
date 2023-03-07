import { LitElement, html, css } from 'lit';

// img
const Logo = new URL('/assets/adidas.png', import.meta.url).href;

export class MenuBasic01 extends LitElement {
  static properties = {
    propButton: {},
    propMenu: { state: true },
    remaining: { state: true },
  };

  constructor() {
    super();
    this.propButton = 60;
    this.propMenu = null;
  }

  animationMenu() {
    this.propButton = document.getElementById('menuButton');
    this.propMenu = document.getElementById('menu__nav');
    console.log(this.propButton);
    console.log(this.propMenu);
  }

  render() {
    return html`
      <div class="menu">
        <div class="menu__company">
          <img class="menu__company-img" src=${Logo} alt="LogoAdidas" />
        </div>
        <div class="menu__button" id="menu__button">
          <svg class="menu__button-svg" viewBox="0 0 24 24">
            <title>microsoft-xbox-controller-menu</title>
            <path
              d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M6,7H18V9H6V7M6,11H18V13H6V11M6,15H18V17H6V15Z"
            />
          </svg>
        </div>
        <nav class="menu__nav" id="menu__nav">
          <ul>
            <slot class="menu__nav-slot" name="menu__nav-slot1">
              <li class="menu__nav-li">Lorem1</li></slot
            >
            <slot class="menu__nav-slot" name="menu__nav-slot2">
              <li class="menu__nav-li">Lorem2</li></slot
            >
            <slot class="menu__nav-slot" name="menu__nav-slot3">
              <li class="menu__nav-li">Lorem3</li></slot
            >
            <slot class="menu__nav-slot" name="menu__nav-slot4">
              <li class="menu__nav-li">Lorem4</li></slot
            >
            <slot class="menu__nav-slot" name="menu__nav-slot5">
              <li class="menu__nav-li">Lorem5</li></slot
            >
          </ul>
        </nav>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
      background-color: red;
    }

    .menu {
      display: flex;
      justify-content: space-between;
      background-color: #90a4ae;
      height: 4rem;
      padding: 0.5rem;
    }

    .menu__company {
      margin: 0.5rem;
    }

    .menu__company-img {
      width: 3.5rem;
    }

    .menu__button-svg {
      position: absolute;
      top: 0.8rem;
      right: 0.5rem;
      width: 2rem;
      height: 3rem;
      padding: 0.5rem;
    }

    .menu__nav--show {
      transform: translatey(0);
      background-color: #90a4ae;
      padding: 1rem;
      font-size: 1.7rem;
      border-radius: 0 0 1rem 1rem;
      text-transform: uppercase;
      line-height: 3rem;
    }

    .menu__nav {
      transform: translatey(-500%);
      background-color: #90a4ae;
      padding: 1rem;
      font-size: 1.7rem;
      border-radius: 0 0 1rem 1rem;
      text-transform: uppercase;
      line-height: 3rem;
    }

    /* VIEWS TABLET */

    @media (min-width: 768px) {
      .menu__nav {
        display: flex;
        align-items: center;
        transform: translatey(0%);
        background-color: #90a4ae;
        padding: 1rem;
        font-size: 1.4rem;
        border-radius: 0 0 1rem 1rem;
        text-transform: uppercase;
        line-height: 3rem;
      }

      .menu__nav ul {
        display: flex;
        justify-content: space-between;
      }

      .menu__nav li {
        display: inline-block;
        padding: 0rem 1rem;
      }

      .menu__button-svg {
        display: none;
      }

      .menu__nav li:hover {
        background-color: #263238;
        border-radius: 0.4rem;
        color: #ccd6db;
        font-weight: bold;
        transition: 0.2s;
        transform: scale(1.09);
      }
    }
  `;
}
customElements.define('menu-basic-01', MenuBasic01);
