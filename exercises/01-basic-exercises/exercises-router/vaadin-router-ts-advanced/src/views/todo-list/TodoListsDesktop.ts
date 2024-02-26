
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
import '../../layouts/MainLayoutDesktop'

// Back Menu
import '../menus/back-menu/BackMenuDesktop'

@customElement('todo-list-desktop')
export class TodoListDesktop extends LitElement {

  render() {
    return html`
            <main-layout-desktop>
              <div>
                <div>
                  <back-menu-desktop></back-menu-desktop>
                </div>
                <h4>Todo List Desktop</h4>
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
    
  `

}
