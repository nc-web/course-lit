
import { LitElement, html, css } from 'lit'

// Components
import './nav/index.js'
import './home/index'
import './calculator01/calculator01.js'

class ExercisesCalculatorJs extends LitElement {

  render() {
    return html`
      <main>
        <nav-horizontal-basic-01></nav-horizontal-basic-01>
        <index-home></index-home>
        <calculator-01></calculator-01>
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

customElements.define('exercises-calculator-js', ExercisesCalculatorJs);