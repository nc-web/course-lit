
import { LitElement, html, css } from 'lit'

// Img
const Spring = new URL('/assets/img/spring-boot.webp', import.meta.url).href

export class MenuBasic01 extends LitElement {
    static properties = {
        proButton: {},
        proMenu: {},
      }
     
      constructor() {
        super();
        this.proButton = {};
        this.proMenu = {};
      }

      animationMenu() {
        this.proButton = document.getElementById('menu__button')
        this.proMenu = document.getElementById('menu__nav')
        console.log(this.proButton)
        console.log(this.proMenu)

        this.proButton.addEventListener('click', () => {
            this.proMenu.classList.toggle('menu__nav--show')
        })
      }
    
    render() {
        return html`
            <div class="menu">
                <div class="menu__company">
                    <img class="menu__company-img" src=${Spring} alt="Logo" />
                </div>
                <div class="menu__button" id="menu__button">
                    <svg class='menu__button-icon' viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                </div>
                <nav class="menu__nav" id="menu__nav">
                    <ul>
                        <slot class="menu__nav-slot" name="menu__nav-slot1"><li class="menu__nav-li">Lorem 1</li></slot>
                        <slot class="menu__nav-slot" name="menu__nav-slot2"><li class="menu__nav-li">Lorem 2</li></slot>
                        <slot class="menu__nav-slot" name="menu__nav-slot3"><li class="menu__nav-li">Lorem 3</li></slot>
                        <slot class="menu__nav-slot" name="menu__nav-slot4"><li class="menu__nav-li">Lorem 4</li></slot>
                        <slot class="menu__nav-slot" name="menu__nav-slot5"><li class="menu__nav-li">Lorem 5</li></slot>
                    </ul>
                </nav>
            </div>
        `
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
        height: 4rem;
        padding: 1rem;
        background-color: blue;
    }

    .menu__company {
        margin: .625rem;

    }

    .menu__company-img {
        width: 3.1rem;
    }

    .menu__button {
        position: absolute;
        top: 1.7rem;
        right: 5rem;
    }

    .menu__button-icon {
        width: 1.5rem;
        height: 1.5rem;
        padding: .3rem;
        border-radius: .3rem;
        cursor: pointer;
        fill: #FFFF;
        background-color: #4FC3F7;
    }

    .menu__nav {
        display: grid;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(-100%);
        padding: .625rem;
        width: 100%;
        background-color: #4FC3F7;
    }

    .menu__nav--show {
        display: grid;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(0);
        padding: .625rem;
        width: 100%;
        background-color: #4FC3F7;
    }

    .menu__nav-li {
        list-style: none;
        color: #FFFFFF;
    }

    /* VIEWS TABLE */
    @media (min-width: 768px) {
        .menu__nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transform: translateY(-20%);
            padding: .625rem;
            width: 100%;
            background-color: #4FC3F7;
        }
    }
  
        
`
}

customElements.define('menu-basic-01', MenuBasic01)