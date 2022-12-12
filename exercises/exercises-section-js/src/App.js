
import { LitElement, html, css } from 'lit'

export class CardIcon01 extends LitElement {

    render() {
        return html`
            <div class='card'>
                <div class='card__header'>
                    <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                        <path fill="#2196F3" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                    </svg>
                </div>
                <div class='card__body'>
                    <h2 class='card__header-title'>Card Icon 02</h2>
                    <p>Este es mi primer card en lit</p>
                </div>
                <div class='card__body'>
                    <button> Card Icon </button>
                </div>
            </div>
        `
    }

    static styles = css`

        :host {
            display: inline-block;
            margin: 0;
            padding: 0;
        }

        .card {
            padding: 1rem;
            background-color: #E0E0E0;
            border-radius: .5rem;
        }

        .card__header {
            display: grid;
            justify-content: center;
        }
    `
}

customElements.define('card-icon-01', CardIcon01)
