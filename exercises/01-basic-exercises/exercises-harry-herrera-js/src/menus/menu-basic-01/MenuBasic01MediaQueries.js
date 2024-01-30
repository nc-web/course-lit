import { LitElement, html, css } from 'lit';

const Logo = new URL('/assets/img/logo128.png', import.meta.url).href;

export class MenuBasic01 extends LitElement {
  static properties = {
    propButton: {},
    propMenu: {},
  };

  constructor() {
    super();
    this.propButton = {};
    this.propMenu = {};
    // this.propButton = this.getElementsByClassName('.menu__button');
    // this.propMenu = this.getElementsByClassName('.menu__nav');
    // this. ('menu__nav--show');
  }

  animationMenu() {
    this.propButton = this.getElementsByClassName('menu__button');
    this.propMenu = this.getElementsByClassName('menu__nav');
    console.log(this.propButton);
    console.log(this.propMenu);

    this.propMenu = this.classList('menu__nav--show');
    // this.propMenu.toggle('menu__nav--show');

    // this.propButton.addEventListener('click', () => {
    //   this.propMenu.classList.toggle('menu__nav--show');
    // });
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
          @click=${this.animationMenu}
          @keyup=${this.handleMenu}
        >
          <svg class="menu__button-svg" viewBox="0 0 24 24">
            <title>menu</title>
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </div>
        <nav class="menu__nav" id="menu__nav">
          <slot class="menu__nav-slot" name="menu__nav-slot1"
            ><li class="menu__nav-li">Lorem 1</li></slot
          >
          <slot class="menu__nav-slot" name="menu__nav-slot2"
            ><li class="menu__nav-li">Lorem 2</li></slot
          >
          <slot class="menu__nav-slot" name="menu__nav-slot3"
            ><li class="menu__nav-li">Lorem 3</li></slot
          >
          <slot class="menu__nav-slot" name="menu__nav-slot4"
            ><li class="menu__nav-li">Lorem 4</li></slot
          >
          <slot class="menu__nav-slot" name="menu__nav-slot5"
            ><li class="menu__nav-li">Lorem 5</li></slot
          >
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

    @media (min-width: 425px) {
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
        transform: translateY(-100%);
        width: 100%;
        background-color: rgba(190, 126, 234, 0.5);
        color: #ffffff;
      }

      .menu__nav--show {
        display: grid;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(0);
        width: 100%;
        background-color: rgba(190, 126, 234, 0.5);
        color: #ffffff;
      }

      .menu__nav-slot {
      }

      .menu__nav-li {
        list-style: none;
        margin: 0.3rem 0;
      }
    }

    /* VIEWS TABLE 768 */
    @media (min-width: 768px) {
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
        display: none;
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
        justify-content: center;
        align-items: center;
        transform: translateY(0);
        width: 100%;
        background-color: rgba(190, 126, 234, 0);
        color: #ffffff;
      }

      .menu__nav-slot {
      }

      .menu__nav-li {
        list-style: none;
        margin: 0.3rem 0;
      }
    }
  `;
}

customElements.define('menu-basic-01', MenuBasic01);
