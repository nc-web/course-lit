
import { LitElement, html, css } from 'lit'

// Images
import Profile from '/lit.webp'

export class CardHorizontal01 extends LitElement {
    render() {
        return html`
           <article class='card'>
                <div class='card__left'>
                    <div class='card__left-header'>
                        <h2 class='card__left__header-title'> Jenny Gomez Parra </h2>
                    </div>

                    <div class='card__left-body'>
                        <p class='card__left-body-text'> t is a long established fact that a reader will be distracted by the </p>

                    </div>

                    <div class='card__left-footer'>
                        <button class='card__left-footer-button'> LOREM </button>
                    </div>
                </div>

                <div class='card__right'> 
                    <div class='card__right-container-img'>
                        <img class='card__right-container-img-img' src=${Profile}/>
                    </div>

                    <div class='card__right-nav'>
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M10.74 10.75L12 8L13.25 10.75L16 12L13.25 13.26L12 16L10.74 13.26L8 12L10.74 10.75Z" />
                        </svg>

                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M10.74 10.75L12 8L13.25 10.75L16 12L13.25 13.26L12 16L10.74 13.26L8 12L10.74 10.75Z" />
                        </svg>

                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M10.74 10.75L12 8L13.25 10.75L16 12L13.25 13.26L12 16L10.74 13.26L8 12L10.74 10.75Z" />
                        </svg>

                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M10.74 10.75L12 8L13.25 10.75L16 12L13.25 13.26L12 16L10.74 13.26L8 12L10.74 10.75Z" />
                        </svg>
                    </div>
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

        }
    `
}

customElements.define('card-horizontal-01', CardHorizontal01)