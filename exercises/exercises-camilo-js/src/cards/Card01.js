
import { LitElement, html, css } from 'lit'

// Images
import Profile from '/img/jenny.png'

export class Card01 extends LitElement {
    render() {
        return html`
            <article class='card'>
                <div class='card__header'>
                    <img class='card__header-img' src=${Profile} alt="" />
                </div>

                <div class='card__body'>
                    <h2 class='card__body-title'> Lorem Ipsum </h2>
                    <h4 class='card__body-subtitle'> other times on purpose </h4>
                    <p class='card__body-text'> development state. Many versions have evolved over the years, sometimes by accident, other times on purpose </p>
                 </div>

                <div class='card__footer'>
                    <button class='card__footer-button'> lorem </button>
                </div>
            </article>
        `
    }

    static styles = css`
        :host {
            display: inline-block;
            margin: 0;
            padding: 0;
        }

        .card {
            width: 18.7rem;
            padding: .625rem;
            border-radius: 1rem;
            background-color:#EEEEEE;
        }

        .card__header-img {
            width: 9.3rem;
        }
    `
}

customElements.define('card-01', Card01)