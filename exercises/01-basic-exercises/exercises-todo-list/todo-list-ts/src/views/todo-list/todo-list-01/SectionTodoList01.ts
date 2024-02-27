
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
import '../../../layouts/MainLayoutDesktop'

// Back Menu
import '../menus/BackMenuTLDesktop'

// Components
import './HeaderTL01'
import './TodoList01'

@customElement('section-todo-list-01')
export class SectionTodoList01 extends LitElement {

  render() {
    return html`
            <main-layout-desktop>
                <div>
                  <back-menu-tl-desktop></back-menu-tl-desktop>
                </div>
                <header-tl01></header-tl01>
                <todo-list-01></todo-list-01>
            </main-layout-desktop>
        `
  }

  static styles = css`
  
    :host {
        display: block;
    }

  `

}
