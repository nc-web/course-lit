
import { LitElement, html, css } from "lit"

// Components 
import './cards/Card-01.js'

// Images 
import HTML5 from '/img/html5.png'
import CSS from '/img/css3.png'
import JS from '/img/javascript.png'
import REACT from '/img/react.png'

export class HeaderMobile extends LitElement {
    render() {
        return html`
            <section class='section'>
                <div class='section__main'>
                    <div class='section__cards'>
                        
                    </div>

                    <div class='section__body'>
                        <div class='section__body-container-01'>
                            <img class='section__body-container-01-img' src=${ HTML5 } />
                        </div>

                        <div class='section__body-container-02'>
                            <img class='section__body-container-02-img' src=${ CSS } />
                        </div>
                    </div>

                    <div class='section__footer'>
                        <div class='section__footer-container-04'>
                            <img class='section__footer-container-04-img' src=${ JS } />
                        </div>

                        <div class='section__footer-container-05'>
                            <img class='section__footer-container-05-img' src=${REACT } />
                        </div>
                    </div>
                </div>
            </section>
            
        `
    }

    static styles = css`
        :host {
            display: block;
            height: 50rem;
            margin: 0;
            padding: 0;
            //background: url('/img/background-01.webp');
        }

        .section {
            padding: 1rem;
        }

        .section__main {
            position: relative;
            top: 17rem;
            left: 0;
        }

        .section__cards {
            background-color: #897;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
        }

        .section__img {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }

        .section__cards-01-img {
            width: 5rem;
            height: 5rem;
        }

        .section__cards-02-img {
            width: 5rem;
            height: 5rem;
        }

        .section__cards-04-img {
            width: 5rem;
            height: 5rem;
        }

        .section__cards-05-img {
            width: 5rem;
            height: 5rem;
        }
    `
}

customElements.define('header-mobile', HeaderMobile)