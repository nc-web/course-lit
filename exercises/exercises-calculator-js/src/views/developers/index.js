
import { html, css, LitElement } from 'lit'

export class IndexDeveloper extends LitElement {
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
            <h4>DEVELOPERS</h4>
          </div>
          <div class='section__b'>

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
          padding: 1rem;
        }

        .section__h {
          color: #424242;
        }

        .section__b {
          display: grid;
          grid-template-columns: repeat(4, auto);
          justify-content: center;
        }
    `
}

customElements.define('index-developer', IndexDeveloper)
