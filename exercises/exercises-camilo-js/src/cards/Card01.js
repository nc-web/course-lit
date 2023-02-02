
import { LitElement, html,css } from 'lit' 

    //components
import '../components-js/buttons/basic-buttons/ButtonBasicPoint04'
    
    // images
const Lit = new URL('../../public/img/foto1.png',import.meta.url).href
export class Card01 extends LitElement {
    render() {
        return html`
        <article class='card'>
            <div class='card__header'>
                <img class='card__header-img' src=${Lit} alt="TiendaVirtual"/>
            </div>

            <div class='card__body'>
                <h1 class='card__body-tittle'> Lorem Ipsum </h1>
                <h4 class='card__body-subtittle'> Lorem Ipsum is simply the dummy text of the printers and typesetters.</h4>
                <p class='card__body-text'> Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer used a gallery of texts and mixed them in such a way that he managed to make a textbook specimen. </p>
            </div>

            <div class='card__footer'>
            <button-basic-04> Register </button-basic-04>
            </div>

        </article>

        `
    }

    static styles = css `
        :host {
            display:inline-block;
            padding:0;
            margin:1rem;

        }

    .card {
        width:18.7rem;
        background-color:#283593;
        padding:.625rem;
        border-radius:1rem;
        box-shadow: .1rem .1rem .1rem .1rem rgba(0,0,0,0.3);
        
    }

    .card__header {
        display:grid;
        justify-content:center;
    }

    .card__header-img{
        width:19rem;
        
        
    }

    
    .card__body-tittle {
        color:white;
        text-align:center;

    }

    .card__body-subtittle {
        color:#E8EAF6;
    }

    .card__body-text {
        color: #9FA8DA;
        text-align:center;

    }

    .card__footer {
        display:grid;
        justify-content:center;
    }
    `
}

customElements.define('card-01', Card01)