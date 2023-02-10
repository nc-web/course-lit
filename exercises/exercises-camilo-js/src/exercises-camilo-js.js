
import { LitElement, html, css } from 'lit'

// Components
import './cards/Card04.js'

class ExercisesCamiloJs extends LitElement {
  render() {
    return html`
      <main>
        <card-04></card-04>
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

customElements.define('exercises-camilo-js', ExercisesCamiloJs);
