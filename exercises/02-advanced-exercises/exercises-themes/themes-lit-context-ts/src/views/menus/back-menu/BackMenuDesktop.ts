
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'


@customElement('back-menu-desktop')
export class BackMenuDesktop extends LitElement {

  render() {
    return html`
            <div class='menu'>

                <nav class='menu__nav'>

                    <a href='/'>
                        <div class='menu__nav_item'>
                            <div>
                                <svg class='menu__nav_item_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left-circle</title><path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M18,11H10L13.5,7.5L12.08,6.08L6.16,12L12.08,17.92L13.5,16.5L10,13H18V11Z" /></svg>
                            </div>
                            <small>BACK</small>
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
        
        &:link {
            color: #FFFFFF;
        }
        
        &:visited {
            color: #FFFFFF;
        }
    }


    /* MENU */
    .menu {
        display: flex;
        justify-content: flex-end;
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
