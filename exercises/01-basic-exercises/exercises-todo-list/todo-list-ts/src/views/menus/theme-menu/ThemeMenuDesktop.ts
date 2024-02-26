
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
                            <svg class='menu__item_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>brightness-6</title><path d="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z" /></svg>
                        </div>
                        <small>Dark</small>
                    </div>
                </a>
                    
                <a href='/todo-list'>
                    <div class='menu__item'>
                        <div>
                            <svg class='menu__item_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunny</title><path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" /></svg>
                        </div>
                        <small>Light</small>
                    </div>
                </a>
                    
                <a href='/about'>
                    <div class='menu__item'>
                        <div>
                            <svg class='menu__item_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>laptop</title><path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" /></svg>
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
        margin: .5rem;
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
        width: 1.5rem;
        fill: #FFAB00;
        margin-right: .3rem;
    }

    `

}
