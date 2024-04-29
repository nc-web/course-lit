
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
import '../../../layouts/MainLayoutDesktop'

// Back Menu
import '../menus/BackMenuTLDesktop'

// Components
import './TodoList03'
import './DetailsCreditsTL03'


@customElement('section-todo-list-03')
export class SectionTodoList03 extends LitElement {

  render() {
    return html`
            <main-layout-desktop>
                <div>
                  <back-menu-tl-desktop></back-menu-tl-desktop>
                </div>
                <todo-list-03></todo-list-03>
                <details-credits-tl03></details-credits-tl03>
            </main-layout-desktop>
        `
  }

  static styles = css`
  
    :host {
        display: block;
    }

  `

}
