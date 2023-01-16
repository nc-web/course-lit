
import { LitElement, html, css } from 'lit'

// Images 
import Profile from '/cap.webp'

export class CardHorizontal01 extends LitElement {

    render() {
        return html`
            <article class='card'>
                <div class='card__left'>
                    <div class='card__left-header'>
                        <h2 class='card__left-header-title'> ANDRES GIRALDO ARENAS</h2>
                    </div>
                    <div class='card__left-body'>
                        <p class='card__left-body-text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno</p>
                    </div>
                    <div class='card__left-footer'>
                        <button class='card__left-footer-button'>LOREM</button>
                    </div>
                </div>
                <div class='card__right'>
                    <div class='card__right-container-img'>
                        <img class='card__right-container-img-img' src=${Profile} />
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
    `
}

customElements.define('card-horizontal-01', CardHorizontal01)