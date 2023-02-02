
import { LitElement, html, css } from 'lit'

// Components 
import '../components-js/buttons/basic-buttons/ButtonBasicPoint04'

// Img
const Lit = new URL('../../public/img/jenny.png',import.meta.url).href

export class Card01 extends LitElement {
    render() {
        return html`
            <article class='card'>
                <div class='card__header'>
                    <img class='card__header-img' src=${Lit} alt='Image' />
                </div>

                <div class='card__body'>
                    <h1 class='card__body-title'> lorem ipsum </h1>
                    <h4 class='card__body-subtitle'> inserting humor </h4>
                    <p class='card__body-text'> development state. Many versions have evolved over the years, sometimes by accident, other times on purpose (for example </p>
                </div>

                <div class='card__footer'>
                    <button-basic-04> lOREM </button-basic-04>
                </div>
            </article>
        `
    }

    static styles = css`
        :host {
            display: inline-block;
            margin: 1rem;  
            padding: 0;
        }

        .card {
            width: 18.7rem;
            padding: .625rem;
            border-radius: 1rem;
            box-shadow: .1rem .1rem .1rem .1rem  rgba(0, 0, 0, 0.2);
            background-color: #E0E0E0;
        }

        .card__header {
            display: grid;
            justify-content: center;
        }

        .card__header-img {
            width: 9.3rem;
            height: 9.3rem;
        }

        .card__body-title {
            text-align: center;
            color:#039BE5;
        }

        .card__body-subtitle {
            text-align: center;
            color:#F06292;
        }

        .card__body-text {
            text-align: center;
            color:#757575;
            
        }

        .card__footer {
            display: grid;
            justify-content: center;
        }



`
}

customElements.define('card-01', Card01)