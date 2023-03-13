
import { LitElement, html, css } from 'lit'

// Images
const Jenny = new URL('/assets/img/jenny.png', import.meta.url).href

export class CardHorizontalFill01 extends LitElement {
    render() {
        return html`
           <article class='card'>
                <div class='card__left'>
                    <div class='card__left-header'>
                        <h3 class='card__left__header-title'> Jenny Gomez Parra </h3>
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
                        <img class='card__right-container-img-img' src=${Jenny} alt='Jenny'/>
                    </div>

                    <div class='card__right-nav'>
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="#EEEEEE" d="M10.74 10.75L12 8L13.25 10.75L16 12L13.25 13.26L12 16L10.74 13.26L8 12L10.74 10.75Z" />
                        </svg>

                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="#EEEEEE" d="M10.74 10.75L12 8L13.25 10.75L16 12L13.25 13.26L12 16L10.74 13.26L8 12L10.74 10.75Z" />
                        </svg>

                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="#EEEEEE" d="M10.74 10.75L12 8L13.25 10.75L16 12L13.25 13.26L12 16L10.74 13.26L8 12L10.74 10.75Z" />
                        </svg>

                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="#EEEEEE" d="M10.74 10.75L12 8L13.25 10.75L16 12L13.25 13.26L12 16L10.74 13.26L8 12L10.74 10.75Z" />
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

        /* VIEWS DESKTOP */
        .card {
            display: grid;
            //grid-template-columns: repeat(2, auto);
            grid-auto-rows: 15.6rem;
            grid-template-columns: repeat(auto-fill, minmax(min(100%, 15.6rem), 1fr));
            gap: .5rem;
            padding: 1.5rem;
            border-radius: 1rem;
            background-color: #673AB7;
            box-shadow: .1rem .1rem .1rem .1rem rgba(0, 0, 0, 0.2);

        }


        .card__left {
            display: grid;
            align-content: center;
            gap: .5rem;
            width: 80%;
        }

        .card__left__header-title {
            color:#FFFFFF;
        }

        .card__left-body-text {
            font-size: .9rem;
            color: #E0E0E0;
        }

        .card__left-footer {
            display: grid;
            justify-content: start;
            align-items: center;
        }

        .card__left-footer-button {
            padding: 1rem 2rem;
            border-radius: 1rem;
            border-style: none;
            color: #757575;
            background-color: #FFFFFF;
            cursor: pointer;
            transition: .3s;
        }

        .card__left-footer-button:hover {
            background-color: #2196F3;
        }

        .card__right-container-img {
            display: grid;
            justify-content: center;
            margin-bottom: .5rem;
        }

        .card__right-container-img-img {
            width: 15rem;
            height: 15rem;
            border-radius: 50%;
        }

        .card__right-nav {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        svg {
            cursor: pointer;
        }
    `
}

customElements.define('card-horizontal-fill-01', CardHorizontalFill01)