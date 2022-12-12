
import { LitElement, html, css} from 'lit'

// Images
//import { CapitanAmerica } from '../public/img/capitan-america.webp'

export class CardAndres extends LitElement {

    render() {
        return html`
            <div class='card'>
                <div class='card__header'>
                </div>
                <div class='card__body'>
                    <h2>Andres Giraldo</h2>
                </div>
                <div class='card__footer'>
                    <button>Ver</button>
                </div>
            </div>
        `
    }

}

customElements.define('card-andres', CardAndres)