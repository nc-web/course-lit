
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
import '../../../layouts/MainLayoutDesktop'

// Back Menu
import '../menus/BackMenuTLDesktop'

// Components
import './HeaderTL02'
import './TodoList02'

@customElement('section-todo-list-02')
export class SectionTodoList02 extends LitElement {

  render() {
    return html`
            <main-layout-desktop>
                <div>
                  <back-menu-tl-desktop></back-menu-tl-desktop>
                </div>
                <header-tl02></header-tl02>
                <todo-list-02></todo-list-02>
            </main-layout-desktop>
        `
  }

  static styles = css`
  
    :host {
        display: block;
    }

  `

}
