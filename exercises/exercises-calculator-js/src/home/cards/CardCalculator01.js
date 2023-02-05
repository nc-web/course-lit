
import { LitElement, html, css } from 'lit'

export class CardCalculator01 extends LitElement {
  render () {
    return html`
            <a href='../../../../pages/calculator01.html' >
                <article class='card'>
                    <div class='card__h'>
                        <svg style="width:60px; height:60px" viewBox="0 0 24 24">
                            <path fill="#1E88E5" d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H17V4H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z" />
                        </svg>
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="" d="M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z" />
                        </svg>
                    </div>
                    <div class='card__b'>
                        <h4 class='card__b-title'>CALCULATOR 01</h4>
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
            transition: .3s; 
        }  

        .card:hover {
            filter: drop-shadow(0 0 2em #325cffaa);
            animation: rotation .2s linear;
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

customElements.define('card-calculator-01', CardCalculator01)
