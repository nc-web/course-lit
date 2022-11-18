
import { html, css, LitElement } from 'lit'

// Components
import './cards/CardCalculator01'
import './cards/CardCalculator02'

export class HomeDesktop extends LitElement {
  static properties = {
    state01: { type: Number }
  }

  constructor () {
    super()
    this.state01 = 0
  }

  render () {
    return html`
            <main class='home'>
                <div class='home__header'>
                    <h3 class='home__header-title'>EXERCISES CALCULATOR - LIT</h3>
                </div>
                <div class='home__body'>
                    <card-calculator-01></card-calculator-01>
                    <card-calculator-02></card-calculator-02>
                </div>
            </main>
        `
  }

  static styles = css`
        :host {
            display: block;
            margin: 0;
            padding: 0;
        }

        .home {
            padding: 1rem 2rem;
            background-color: #FAFAFA;
        }

        .home__header {
            display: grid;
            justify-content: center;
            margin: .5rem 0;
        }

        .home__header-title {
            color: #1E88E5;
        }

        .home__body {
            display: grid;
            grid-template-columns: repeat(6, auto);
            gap: 1rem;
            justify-content: center;
        }
    `
}

customElements.define('home-desktop', HomeDesktop)
