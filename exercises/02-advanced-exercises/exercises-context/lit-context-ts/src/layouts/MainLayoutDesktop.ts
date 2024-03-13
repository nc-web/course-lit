
import { LitElement, html, css } from 'lit'
import { customElement, property, state, query } from 'lit/decorators.js'
import { consume } from '@lit/context'

// Context
import { contextTheme, TypeTheme } from '../context/themes/context-themes.js'

// Menus
import '../views/menus/main-menu/MainMenuDesktop.js'
import '../views/menus/theme-menu/ThemeMenuDesktop.js'

// Images
const Logo = new URL('../../public/images/nc-web-logo.png', import.meta.url).href

@customElement('main-layout-desktop')
export class MainLayoutDesktop extends LitElement {

  // CONTEXT
  @consume({context: contextTheme, subscribe: true})
  @state()
  private stateTheme?: TypeTheme

  constructor() {
    super()
    
  }
  
  render() {

    if (this.stateTheme === 'dark') {
      
      return html`
        <div class='layout-dark' id='layout'>
            <div class='layout__menu'>
              <main-menu-desktop></main-menu-desktop>
            </div>

            <div class='layout__body'>
                <slot></slot>
            </div>

            <div class='layout__footer'>
              
              <div class='layout__footer_images'>
                <img src='${Logo}' class='layout__footer_images_logo'/>
              </div>
              
              <div class='layout__footer_nc'>
                <small>Newsoft Computer</small>
                <small>www.newsoftcomputer.com</small>
                <small>info@newsoftcomputer.com</small>  
              </div>
              
            </div>
        </div>
      `
    } 
    
    if (this.stateTheme === 'light') {
      
      return html`
        <div class='layout-ligth' id='layout'>
            <div class='layout__menu'>
                <main-menu-desktop></main-menu-desktop>
            </div>

            <div class='layout__body'>
                <slot></slot>
            </div>

            <div class='layout__footer'>
              
              <div class='layout__footer_images'>
                <img src='${Logo}' class='layout__footer_images_logo'/>
              </div>
              
              <div class='layout__footer_nc'>
                <small>Newsoft Computer</small>
                <small>www.newsoftcomputer.com</small>
                <small>info@newsoftcomputer.com</small>  
              </div>
              
            </div>
        </div>
      `
    }
  }


  // LOGIC


  // STYLES
  static styles = css`
    
    :host .layout-dark {
        display: block;
        height: 100vh;
        margin: 0;
        background-color: #212121;
        color: #FFFFFF;

        & a {
          text-decoration: none;
          color: #FFFFFF;

          &:link {
            text-decoration: none;
            color: #FFFFFF;
          }

          &:visited {
            text-decoration: none;
            color: #FFFFFF;
          }
        }

        
    }

    :host .layout-ligth {
        display: block;
        height: 100vh;
        margin: 0;
        background-color: #EEEEEE;
        color: #212121;

        & a {
          text-decoration: none;
          color: #212121;

          &:link {
            text-decoration: none;
            color: #212121;
          }

          &:visited {
            text-decoration: none;
            color: #212121;
          }
        }

        
    }


    /* LAYOUT FOOTER */
    .layout__footer {
      display: grid;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 2rem 0;
    }

    .layout__footer_images_logo {
      width: 6rem;
    }

    .layout__footer_nc {
      display: grid;
      justify-content: center;
      align-items: center;
    }

  `
}
