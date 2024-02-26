
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
// import '@/layouts/MainLayoutDesktop'
import '../../layouts/MainLayoutDesktop'

// Cards
import './cards/Card01'

@customElement('home-desktop')
export class HomeDesktop extends LitElement {

  render() {
    return html`
            <main-layout-desktop>
                <div class='header'>
                    <h2>TODO LIST'S - TYPESCRIPT</h2>
                </div>
                
                <div class='body'>
                    <card-01></card-01>
                    <card-01></card-01>
                    <card-01></card-01>
                    <card-01></card-01>
                </div> 
            </main-layout-desktop>
        `
  }

  static styles = css`

        :host {
            display: block;
        }

        /* HEADER */
        .header {
            text-align: center;
        }

        /* BODY */
        .body {
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-columns: repeat(2, 1fr);
            text-align: center;
            gap: 1.5rem;
            padding: 1rem 2rem;
        }


    `

}
