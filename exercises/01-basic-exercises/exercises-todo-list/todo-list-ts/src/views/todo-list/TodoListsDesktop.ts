
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
import '../../layouts/MainLayoutDesktop'

// Back Menu
import './menus/BackMenuTLDesktop'

// Cards
import './cards/Card01'
import './cards/Card02'
import './cards/Card03'
import './cards/Card04'

@customElement('todo-list-desktop')
export class TodoListDesktop extends LitElement {

  render() {
    return html`
            <main-layout-desktop>

                <div>
                  <back-menu-desktop></back-menu-desktop>
                </div>

                <div class='body'>
                    <card-01></card-01>
                    <card-02></card-02>
                    <card-03></card-03>
                    <card-04></card-04>
                </div> 
              
            </main-layout-desktop>
        `
  }

  static styles = css`
  
    :host {
        display: block;
        margin: 0;
        padding: 0;
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
