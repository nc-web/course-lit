
import { LitElement, html, css } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
// 
import { provide } from '@lit/context'

// // Context
import { contextTheme, TypeTheme } from '../context/themes/context-themes.js'

// Menus
import '../views/menus/main-menu/MainMenuDesktop.js'
import '../views/menus/theme-menu/ThemeMenuDesktop.js'

// Images
const Logo = new URL('../../public/images/nc-web-logo.png', import.meta.url).href

@customElement('main-layout-desktop')
export class MainLayoutDesktop extends LitElement {

  // CONTEXT
  @provide({context: contextTheme})
  @property({attribute: true})
    public propTheme: TypeTheme

  constructor() {
    super()

    this.propTheme = 'Andres Giraldo'
  }
  
  render() {
    return html`
        <div class='layout' id='layout'>
            <div class='layout__menu'>
                <theme-menu-desktop></theme-menu-desktop>
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


  // LOGIC

  @query('#layout')
  divElementLayout!: HTMLDivElement

  darkTheme() {
    
  }

  lightTheme() {

  }

  systemTheme() {

  }

  // STYLES
  static styles = css`
    
    :host {
        display: block;
    }

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
