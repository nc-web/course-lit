
import { LitElement, html, css} from 'lit'

// Components

import './cards/Card-01.js'

// Img
import HTML from '/img/html5.png'
import CSS from '/img/css3.png'
import JS from '/img/javascript.png'
import REACT from '/img/react.png'

export class HeaderMobile extends LitElement {
    render() {
        return html`
            <section class="section">
                <div class="section__main">
                    <div class="section__cards">
                        <card-01></card-01>
                    </div>

                    <div class="section__body">
                        <div class="section__body-01">
                            <img class="section__body-01-img" src=${HTML} />
                        </div>

                        <div class="section__body-02">
                            <img class="section__body-02-img" src=${CSS} />
                        </div>
                    </div>

                    <div class="section__footer">
                        <div class="section__footer-04">
                            <img class="section__footer-04-img" src=${JS} />
                        </div>

                        <div class="section__footer-05">
                            <img class="section__footer-05-img" src=${REACT} />
                        </div>
                    </div>
                </div>
            </section> 
        `
    }

    static styles = css`
        :host{
            display: block;
            height: 50rem;
            margin: 0;
            padding: 0;
            background: url(/img/background-01.webp);
        }

        .section{
            padding: 1rem;
        }

        .section__main{
            display: grid;
            grid-template-columns: 100%;
            position: relative;
            top: 17rem;
            left: 0;
        }

        .section__cards{
            display: grid;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }

        .section__body{
            display: grid;
            grid-template-columns: 100%;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }

        .section__body-01-img{
            width: 5rem;
            height: 5rem;
        }

        .section__body-02-img{
            width: 5rem;
            height: 5rem;
        }

        .section__footer{
            display: grid;
            grid-template-columns: 100%;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }

        .section__footer-04-img{
            width: 5rem;
            height: 5rem;
        }

        .section__footer-05-img{
            width: 2rem;
            height: 2rem;
        }
    `
}

customElements.define('header-mobile', HeaderMobile)