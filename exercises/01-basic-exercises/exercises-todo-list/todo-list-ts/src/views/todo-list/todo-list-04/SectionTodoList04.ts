
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
import '../../../layouts/MainLayoutDesktop'

// Back Menu
import '../menus/BackMenuTLDesktop'

// Components
import './TodoList04'
import './DetailsCreditsTL04'


@customElement('section-todo-list-04')
export class SectionTodoList04 extends LitElement {

  render() {
    return html`
            <main-layout-desktop>
                <div>
                  <back-menu-tl-desktop></back-menu-tl-desktop>
                </div>
                <todo-list-04></todo-list-04>
                <details-credits-tl04></details-credits-tl04>
            </main-layout-desktop>
        `
  }

  static styles = css`
  
    :host {
        display: block;
    }

  `

}
