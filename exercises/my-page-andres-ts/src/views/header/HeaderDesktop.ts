
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Components
import './cards/Card01.js'

// Images
import HTML5 from '/img/html5.png'
import CSS3 from '/img/css3.png'
import JS from '/img/javascript.png'
import React from '/img/react.png'

@customElement('header-desktop')
export class HeaderDesktop extends LitElement {

    render() {
        return html`
            <section class='section' id='section-header'>
                <div class='section__cards'>
                    <div class='section__cards-01'>
                        <img class='section__cards-01-img' src=${HTML5}/>
                    </div>

                    <div class='section__cards-02'>
                        <img class='section__cards-02-img' src=${CSS3}/>
                    </div>

                    <div class='section__cards03'>
                        <card-01></card-01>
                    </div>

                    <div class='section__cards-04'>
                        <img class='section__cards-03-img' src=${JS}/>
                    </div>

                    <div class='section__cards-05'>
                        <img class='section__cards-04-img' src=${React}/>
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
            // filter: blur(2px);
        }

        .section {
            padding: 1rem;
        }

        .section__cards {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            gap: 2rem;
            top: 28rem;
            left: 0rem;
        }

        .section__cards-01-img {
            width: 10rem;
            height: 10rem;
        }

        .section__cards-02-img {
            width: 10rem;
            height: 10rem;
        }

        .section__cards-03-img {
            width: 10rem;
            height: 10rem;
        }

        .section__cards-04-img {
            width: 10rem;
            height: 10rem;
        }
    `

}