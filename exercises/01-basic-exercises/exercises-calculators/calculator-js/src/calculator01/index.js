
import { html, css, LitElement } from 'lit'

// Components Advanced
import './Calculator01.js'
import './Information.js'

export class IndexCalculator01 extends LitElement {
  static properties = {
    state01: { type: Number }
  }

  constructor () {
    super()
    this.state01 = 0
  }

  render () {
    return html`
        <section class='section'>
          <div class='section__h'>
            <h2>CALCULATOR 01</h2>
          </div>  
          
          <div class='section__b'>
            <calculator-01></calculator-01>
            <card-information></card-information>
          </div>
        </section>
    `
  }

  static styles = css`
    :host {
        display: block;
        margin: 0;
        padding: 0;
    }

    .section {
        display: grid;
        justify-content: center;
    }

    .section__h {
      display: grid;
      justify-content: center;
      color: #424242;
    }

    .section__b {
      justify-content: center;
    }
  `
}

customElements.define('index-calculator-01', IndexCalculator01)
