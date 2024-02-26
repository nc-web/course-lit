
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('theme-menu-desktop')
export class ThemeMenuDesktop extends LitElement {

  render() {
    return html`
            <nav class='menu'>

                <a href='/'>
                    <div class='menu__item'>
                        <div>
                            <svg class='menu__item_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
                        </div>
                        <small>Dark</small>
                    </div>
                </a>
                    
                <a href='/todo-list'>
                    <div class='menu__item'>
                        <div>
                            <svg class='menu__item_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
                        </div>
                        <small>Light</small>
                    </div>
                </a>
                    
                <a href='/about'>
                    <div class='menu__item'>
                        <div>
                            <svg class='menu__item_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
                        </div>
                        <small>System</small>
                    </div>
                </a>
                
            </nav>
        `
  }

  static styles = css`

    :host {
        display: block;
    }

    /* MENU NAV*/
    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menu__item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 .5rem;
        padding: .3rem .5rem;
        border-radius: .5rem;
        cursor: pointer;
        transition: .3s;

        &:hover {
            margin-right: 1rem;
            transform: scale(1.2rem);
            box-shadow: .1rem .1rem .1rem .1rem rgba(255, 255 ,255, 0.1);
        }

        &:hover .menu__item_svg {
            fill: #FFC400   
        } 
    }
    .menu__item_svg {
        width: 1.8rem;
        fill: #FFAB00;
        margin-right: .3rem;
    }

    `

}
