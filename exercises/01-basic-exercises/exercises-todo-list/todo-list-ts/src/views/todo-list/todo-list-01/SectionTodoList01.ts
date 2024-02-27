
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
import '../../../layouts/MainLayoutDesktop'

// Components
import './Header'
import './TodoList01'

@customElement('section-todo-list-01')
export class SectionTodoList01 extends LitElement {

  render() {
    return html`
            <main-layout-desktop>
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
