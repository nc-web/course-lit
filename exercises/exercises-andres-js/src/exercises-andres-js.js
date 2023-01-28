
import { LitElement, html, css } from 'lit';

// Components
import './cards/Card01.js'
import './cards/CardHorizontal01.js'
import './cards/CardHorizontalFill01.js'
import './cards/CardHorizontalFit01.js'

class ExercisesAndresJs extends LitElement {

  render() {
    return html`
      <main>
        <p>My APP</p>
        <card-01></card-01>
        <card-horizontal-01></card-horizontal-01>
        <card-horizontal-fill-01></card-horizontal-fill-01>
        <card-horizontal-fit-01></card-horizontal-fit-01>
      </main>
    `
  }

  static styles = css`
    :host {
      display: host;
      margin: 0;
      padding: 0;
    }
  `
}

customElements.define('exercises-andres-js', ExercisesAndresJs);