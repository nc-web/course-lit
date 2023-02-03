
import { LitElement, html, css} from 'lit'

//imagen
const Imagen = new URL('/public/img/girl.png',import.meta.url).href
const Cell = new URL('/public/img/cell.png',import.meta.url).href
const Ferrari = new URL('/public/img/ferrari.png',import.meta.url).href
const Offer = new URL('/public/img/offer.png',import.meta.url).href
const Promo = new URL('/public/img/promo.png',import.meta.url).href

export class Card03 extends LitElement {
    render() {
        return html`
            <article class='card'> 
                <div class='card__body'>
                    <img class='card__body-bgphoto' src=${Imagen} alt='bgphoto'/>
                </div>
                <img class='card__img-cell' src=${Cell} alt='cellphone'/>
                <img class='card__img-ferrari' src=${Ferrari} alt='carferrari'/>
                <img class='card__img-offer' src=${Offer} alt='offer'/>
                <img class='card__img-promo' src=${Promo} alt='promo'/>
            </article>
            <body>
                
            </body>

        `
        
    } 

    static styles = css `
    
    :host {
        display: inline-block;
        padding:0;
        margin:5rem;
    }

    .card {
        width: 18.75rem;
        height: 17.75rem;
        background: linear-gradient(135deg,#FFF3E0, #FFE0B2);
        position: absolute;
        border-radius: 15px;
        border-color: #FFB74D;
        border-style: solid;
        border-width: 3px;
    }
    .card__body {
        position: relative;
        display:grid;
        align-items: center;

    }

    .card__body-bgphoto {
       position: relative;
       display: grid;
       align-items:center;
       top: 20px;
       width: 18rem;
       
    }
    .card__img-cell {
       position: relative;
       display: grid;
       align-items: center;  
       top: -190px; 
       left: 240px;
       width: 3rem;
    }
    .card__img-ferrari {
        position: relative;
        display: grid;
        align-items: center;
        width: 17rem;
        top: -40px;
        left: 20px;
    }

    .card__img-offer {
        position: relative;
        display: grid;
        align-items: center;
        width: 10rem;
        top: -240px;
        left: 170px;
    }

    .card__img-promo {
        position: relative;
        display: grid;
        align-items: center;
        width: 8rem;
        top: -590px;
    }

    `
}
customElements.define('card-3',Card03)

