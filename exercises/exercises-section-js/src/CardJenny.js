
import { LitElement, html, css } from "lit";

export class CardJenny extends LitElement {

    render () {
        return html`
            <div class='card'> 
        
            <div class='card__body'>
                <h1> Card Jenny </h1>

            </div>

            <div class='card__footer'>

            </div>

            </div>
        `
    }

    static styles = css`
        :host {
            display: inline-block;
        }

        .card {
            border-radius: 2rem;
            padding: .625rem;
            background-color: #565484;
        }
    `
}

customElements.define('card-jenny', CardJenny)