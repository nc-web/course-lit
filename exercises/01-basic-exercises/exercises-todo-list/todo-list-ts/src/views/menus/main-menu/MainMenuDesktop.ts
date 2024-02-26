
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('main-menu-desktop')
export class MainMenuDesktop extends LitElement {

  render() {
    return html`
            <div class='menu'>

                <div class='menu__company'>
                        <svg class='menu__company_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-list-bulleted-type</title><path d="M5,9.5L7.5,14H2.5L5,9.5M3,4H7V8H3V4M5,20A2,2 0 0,0 7,18A2,2 0 0,0 5,16A2,2 0 0,0 3,18A2,2 0 0,0 5,20M9,5V7H21V5H9M9,19H21V17H9V19M9,13H21V11H9V13Z" /></svg>
                    <p>TODO LIST's - TS </p>
                </div>

                <nav class='menu__nav'>

                    <a href='/'>
                        <div class='menu__nav_item'>
                            <div>
                                <svg class='menu__nav_item_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
                            </div>
                            <small>HOME</small>
                        </div>
                    </a>
                    
                    <a href='/todo-list'>
                        <div class='menu__nav_item'>
                            <div>
                                <svg class='menu__nav_item_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
                            </div>
                            <small>TODO LIST</small>
                        </div>
                    </a>
                    
                    <a href='/about'>
                        <div class='menu__nav_item'>
                            <div>
                                <svg class='menu__nav_item_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
                            </div>
                            <small>ABOUT</small>
                        </div>
                    </a>
                    
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

    a {
        text-decoration: none;
    }


    /* MENU */
    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem 1rem;
    }


    /* MENU COMPANY */
    .menu__company {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menu__company_svg {
        width: 2rem;
        fill: #FFAB00;
        margin-right: .5rem;
    }


    /* MENU NAV*/
    .menu__nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menu__nav_item {
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

        &:hover .menu__nav_item_svg {
            fill: #FFC400   
        } 
    }
    .menu__nav_item_svg {
        width: 1.8rem;
        fill: #FFAB00;
        margin-right: .3rem;
    }

  `
}
