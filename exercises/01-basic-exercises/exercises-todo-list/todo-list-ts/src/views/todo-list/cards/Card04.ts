
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('card-04')
export class Card04 extends LitElement {

  render() {
    return html`
            <a href='/todo-list-02'>
                <div class='card'>
                    <div class='card__header'>
                        <h3>TODO LIST 04</h3>
                    </div>

                    <div class='card__body'>
                        <svg class='card__body_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>list-box</title><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 7H9V9H7V7M7 11H9V13H7V11M7 15H9V17H7V15M17 17H11V15H17V17M17 13H11V11H17V13M17 9H11V7H17V9Z" /></svg>
                    </div>

                    <div class='card__footer'>
                        <h4>Autor:</h4>
                        <small>Andres Giraldo</small>
                    </div>
                </div>
            </a>
            
        `
  }

  static styles = css`
  
    :host {
        display: block
    }

    a {
        text-decoration: none;
        
        &:link {
            color: #FFFFFF;
        }
        
        &:visited {
            color: #FFFFFF;
        }
    }

    /* CARD */ 
    .card {
        text-align: center;
        padding: 1rem;
        border-radius: .5rem;
        box-shadow: .2rem .2rem .2rem .2rem rgba(255, 255, 255, .2);
        cursor: pointer;
        transition: .3s;

        &:hover {
            margin-right: 1rem;
            transform: scale(1.2rem);
            box-shadow: .1rem .1rem .1rem .1rem rgba(255, 196 ,0, 0.3);
        }

        &:hover .card__body_svg {
            fill: #FFC400   
        } 
    }

    /* CARD HEADER */
    .card__header {
        color: white;
    }


    /* CARD BODY */
    .card__body_svg {
        width: 6rem;
        fill: #FFAB00;
        margin-right: .3rem;
    }

  `

}
