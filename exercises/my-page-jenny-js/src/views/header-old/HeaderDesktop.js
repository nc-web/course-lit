
import { LitElement, html, css } from 'lit'

// Components 
import './cards/Card-01.js'

// Images 
import HTML5 from '/img/html5.png'
import CSS from '/img/css3.png'
import JS from '/img/javascript.png'
import REACT from '/img/react.png'

export class HeaderDesktop extends LitElement {
    render() {
        return html`
           <section class='section'>
                <div class='section__cards'>
                    <div class='section__cards-01'>
                            <img class='section__cards-01-img' src=${HTML5} />
                    </div>

                    <div class='section__cards-02'>
                        <img class='section__cards-02-img' src=${CSS}/>
                    </div>

                    <div class='section__cards-03'>
                        <card-01></card-01>
                    </div>

                    <div class='section__cards-04'>
                        <img class='section__cards-03-img' src=${JS}/>
                    </div>

                    <div class='section__cards-05'>
                        <img class='section__cards-04-img' src=${REACT}/>
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

        .section__cards {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            gap: 2rem;
            top: 28rem;
            left: 0rem;
            //filter: blur(1px);
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

customElements.define('header-desktop', HeaderDesktop)