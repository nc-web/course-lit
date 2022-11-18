
import { html, css, LitElement } from 'lit'

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
            Section Calculator 01
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
  `
}

customElements.define('index-calculator-01', IndexCalculator01)
