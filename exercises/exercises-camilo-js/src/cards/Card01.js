
import { LitElement, html, css } from "lit"

//Imagen
import Foto from "/img/tienda_virtual.png"

export class Card01 extends LitElement {
    render() {
       return html`
        <article class="card">
                <div class="card__header">
                    <img class="card__header-img" src=${Foto} alt="foto" />
                </div>

                <div class="card__body">
                    <h2 class="card__body-tittle">Lorem Ipsum</h2>
                    <h4 class="card__body-subtittle"> Lorem Ipsum is simply the dummy text of the printers and typesetters. </h4>
                    <p class="card__body-text"> These texts make it sound like readable Spanish. Many desktop publishing packages and web page editors use Lorem Ipsum as their default text, and doing a search for "Lorem Ipsum" will return </p>
                </div>
                
                <div class="card__footer">
                    <button class="card__footer-button"> Lorem Ipsum</button>
                               
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

    .card{
        width: 18rem;
        padding: .625rem;
        border-radius:1rem; 
        background-color: #00838F;
            
    }

    .card__header-img  {
        width: 20rem;
      
    
    }

    ` 
}
customElements.define('card-01', Card01)