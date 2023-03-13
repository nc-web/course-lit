
import { LitElement, html, css } from "lit"

// Components 
import './cards/Card-01.js'

// Images
const OWC = new URL('/assets/img/owc.svg', import.meta.url).href

export class HeaderMobile extends LitElement {
    render() {
        return html`
            <section class='section'>
                <div class='section__main'>
                    <div class='section__cards'>
                        <card-01></card-01>
                    </div>

                    <div class='section__body'>
                        <div class='section__body-container-img-01'>
                            <img class='section__body-container-img-01-img' src=${ OWC } alt='OWC'/>
                        </div>
                
                        <div class='section__body-container-img-02'>
                            <img class='section__body-container-img-02-img' src=${ OWC } alt='OWC'/>
                        </div>
                    </div>

                    <div class='section__footer'>
                        <div class='section__footer-container-img-04'>
                            <img class='section__footer-container-img-04-img' src=${ OWC } alt='OWC'/>
                        </div>

                        <div class='section__footer-container-img-05'>
                            <img class='section__footer-container-img-05-img' src=${OWC } alt='OWC'/>
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
            background: url('/img/background-01.webp');
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
            background-color: #896;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
        }

        .section__body {
            display: grid;
            grid-template-columns: 100%;
            gap: 1rem;
        }

        .section__body-container-img-01-img {
            width: 5rem;
            height: 5rem;
        }

        .section__body-container-img-02-img {
            width: 5rem;
            height: 5rem;
        }

        .section__footer {
            display: grid;
            grid-template-columns: 100%;
            gap: 1rem;
        }

        .section__body-container-img-04-img {
            width: 5rem;
            height: 5rem;
        }

        .section__body-container-img-05-img {
            width: 5rem;
            height: 5rem;
        }
    `
}

customElements.define('header-mobile', HeaderMobile)