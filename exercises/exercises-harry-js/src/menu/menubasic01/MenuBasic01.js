import { LitElement, html, css } from "lit";

// Images
const Logo = new URL('../../../assets/img/logo128.png', import.meta.url).href;

export class MenuBasic01 extends LitElement{
    static properties = {
        propButton: {},
        propMenu: {},
    };

  constructor() {
    super();
    this.propButton = {},
    this.propMenu = {};
  }

//   animationMenu() {
//     this.propButton = document.('menu__button');
//     propMenu = this.getElementsById('menu__menu');
//     console.log(this.propButton)
//     console.log(this.propMenu)

//     this.propButton.this.addEventListener('click',);
//   }
    render() {
        return html`
            <div class="menu">
                <div class="menu__company">
                    <img class="menu__company-img" src=${Logo} alt="Logo">
                </div>
                <div @click=${this.tooglepropButton} class="menu__button" id="menu__button"> ${this.propMenu}
                    <svg class="menu__button-icon" viewBox="0 0 24 24">
                        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                    </svg>
                </div>
                <nav class="menu__nav" id="menu__nav">${this.propMenu}
                    <ul>
                        <slot name="menu__nav-slot" class="menu__nav-slot1"><li class="menu__nav-li"> Lorem 1 </li></slot>
                        <slot name="menu__nav-slot" class="menu__nav-slot2"><li class="menu__nav-li"> Lorem 2 </li></slot>
                        <slot name="menu__nav-slot" class="menu__nav-slot3"><li class="menu__nav-li"> Lorem 3 </li></slot>
                        <slot name="menu__nav-slot" class="menu__nav-slot4"><li class="menu__nav-li"> Lorem 4 </li></slot>
                        <slot name="menu__nav-slot" class="menu__nav-slot5"><li class="menu__nav-li"> Lorem 5 </li></slot>
                    </ul>
                </nav>
            </div>
            
        `
    }
    
    tooglepropButton() {
        this.propButton = this.propMenu
    }

    static styles = css`
    :host {
      display: block;
      padding: 0;
      margin: 0;
    }
    
    .menu {
        display: flex;
        justify-content: space-between;
        background: linear-gradient(180deg, #235, #248);
        padding: .5rem;
        border-radius: .5rem;
    }
    
    .menu__company{
        margin-left: .5rem;
    }

    .menu__button-icon{
        width: 2.5rem;
        height: 2.5rem;
        cursor: pointer;
        fill: #000000;
        border-radius: 50%;
    }

    .menu__company-img{
        width: 3rem;
    }

    .menu__nav{
        display: grid;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -1000px;
        left: 0;
        width: 100%;
        text-align: center;
        border-radius: 1rem;
        font-size: medium;
        color: white;
        background: linear-gradient(180deg, #235, #248);
    }

    .menu__nav--show{
        display: grid;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 5rem;
        left: 0;
        width: 100%;
        text-align: center;
        border-radius: 1rem;
        font-size: medium;
        color: white;
        background: linear-gradient(180deg, #235, #248);
    }


    `

}

customElements.define('menu-basic-01', MenuBasic01)