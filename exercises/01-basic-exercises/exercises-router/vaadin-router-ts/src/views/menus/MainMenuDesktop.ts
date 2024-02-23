
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Router
import { Router } from '@vaadin/router'


@customElement('main-menu-desktop')
export class MainMenuDesktop extends LitElement {

  render() {
    return html`
            <div class='menu'>

                <div>
                    <h2>MENU</h2>
                </div>

                <nav class='menu__nav'>
                    <a href=''>
                        HOME
                    </a>

                    <a href='/about'>
                        ABOUT
                    </a>

                    <a href='/login'>
                        LOGIN
                    </a>
                </nav>
                
            </div>
        `
  }

  static styles = css`
    
        :host {
            display: block;
        }

        .menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .menu__nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
    `

}
