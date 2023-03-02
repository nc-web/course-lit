import { LitElement, html, css } from 'lit'

// Components
import './views/menus/menu-basic-01/menu-basic-01.js'

class ExercisesJennyJs extends LitElement {
  render() {
    return html`
      <main>
        <menu-basic-01></menu-basic-01>
      </main>
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

customElements.define('exercises-jenny-js', ExercisesJennyJs);