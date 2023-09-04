
import { LitElement, html, css } from 'lit'

// Components 
import './cards/Card-01.js'

// Images
const OWC = new URL('/assets/img/owc.svg', import.meta.url).href

export class HeaderTableLaptop extends LitElement {
    render() {
        return html`
            <section class='section'>
                <div class='section__main'>
                    <div class='section__cards'>
                        <div class='section__cards-03'>
                            <card-01></card-01>
                        </div>
                    </div>

                    <div class='section__img'>
                        <div class='section__cards-01'>
                            <img class='section__cards-01-img' src=${OWC} alt='OWC' />
                        </div>

                        <div class='section__cards-02'>
                            <img class='section__cards-02-img' src=${OWC} alt='OWC' />
                        </div>

                        <div class='section__cards-04'>
                                <img class='section__cards-04-img' src=${OWC} alt='OWC' />
                        </div>

                        <div class='section__cards-05'>
                            <img class='section__cards-05-img' src=${OWC} alt='OWC' />
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
            width: 10rem;
            height: 10rem;
        }

        .section__cards-02-img {
            width: 10rem;
            height: 10rem;
        }

        .section__cards-04-img {
            width: 10rem;
            height: 10rem;
        }

        .section__cards-05-img {
            width: 10rem;
            height: 10rem;
        }
    `
}

customElements.define('header-table-laptop', HeaderTableLaptop)