
import { html, css, LitElement } from 'lit'

export class CardCalculator02 extends LitElement {
  static properties = {
    state01: { type: Number }
  }

  constructor () {
    super()
    this.state01 = 0
  }

  render () {
    return html`
            <a href='#' >
                <article class='card'>
                    <div class='card__h'>
                        <svg style="width:60px; height:60px" viewBox="0 0 24 24">
                            <path fill="#1E88E5" d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H17V4H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z" />
                        </svg>
                    </div>
                    <div class='card__b'>
                        <h4 class='card__b-title'>CALCULATOR 02</h4>
                    </div>
                </article>
            </a>
        `
  }

  static styles = css`
        :host {
            display: inline-block;
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none;
        }

        .card {
            width: 12rem;
            padding: 1rem;
            border-radius: .5rem;
            box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.1);
            cursor: pointer;
        }   

        .card:hover {
            filter: drop-shadow(0 0 2em #325cffaa);
            animation: rotation .3s linear;
        }
        
        @keyframes rotation  {
            0% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(5deg);
            }
            100% {
                transform: rotate(0deg);
            }
        }
        
        .card__h {
            margin: 1rem;
            text-align: center;
        }

        .card__b {
            text-align: center;
            color: #616161;
        }

    `
}

customElements.define('card-calculator-02', CardCalculator02)
