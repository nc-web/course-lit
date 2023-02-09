
import { LitElement, html, css } from 'lit'

// Components
import './cards/CardBasic02.js'

class ExercisesCamiloJs extends LitElement {
  render() {
    return html`
      <main>
        <card-basic-02></card-basic-02>
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
