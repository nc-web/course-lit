import {LitElement, html, css} from 'lit'

//imagen
const Avatar = new URL ('/public/img/avatar1.png',import.meta.url).href

export class Card02 extends LitElement {
    render() {
        return html`
          <article class='card'>
            <div class='card__header'>
                <img class='card__header-img' src=${Avatar} alt='Foto1'>
            </div>
            <div class='card__body'>
                <h1 class='card__body-tittle'> Lorem Ipsum </h1>
                <h3 class='card__body-subtittle'> Lorem Ipsum has been the industry's standard dummy text</h3>
            </div>
            <div class='card__footer'>
                <button class='card__footer-button-rigth'>
                     <svg style="width:24px; height:24px" viewBox="0 0 24 24"><title>phone-incoming</title>
                        <path fill="#ffffff" d="M4,3A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.17L13.21,17.37C10.38,15.93 8.06,13.62 6.62,10.78L8.82,8.57C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4M19,11V9.5H15.5L21,4L20,3L14.5,8.5V5H13V11H19Z" />
                    </svg>

                </button>
                        <svg style="width:24px; height:24px" viewBox="0 0 24 24"><title>email</title>
                            <path fill="#b4b4b4" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                        </svg>

                <button class='card__footer-button-left'> 
                    <svg style="width:24px; height:24px" viewBox="0 0 24 24"><title>phone-incoming</title>
                        <path fill="#ffffff" d="M4,3A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.17L13.21,17.37C10.38,15.93 8.06,13.62 6.62,10.78L8.82,8.57C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4M19,11V9.5H15.5L21,4L20,3L14.5,8.5V5H13V11H19Z" />
                    </svg>
                </button>
            </div>
            

          </article>
        `

    }

    static styles = css `
        :host {
            display: inline-block;
            padding:0;
            margin:10rem;
            
        }

    .card {
        position: relative;
        width: 16.2rem;
        padding: .625rem;
        border-radius: 2rem;
        background: linear-gradient(135deg,#FFA726,#E65100);
        
                   
    }

    .card__header {
        display: grid;
        justify-content: center;  
        position: absolute;
        top: -9rem;   
        left: 1rem;
    }

    .card__header-img {
        width: 15rem;
        border-radius:50%;
        box-shadow: .1rem .1rem .1rem .1rem rgba(0,0,0,0.4)
        
    }

    .card__body-tittle { 
        margin: 6rem 0 0;
        color:white;
        text-align: center;
        font-size: 2rem;
    }
    
    .card__body-subtittle {
        color: #FFCC80;
        text-align: center;
        
    }

    .card__footer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        
    }

    .card__footer-button-rigth {
        border-style: none;
        border-radius: 50%;
        width: 4.5rem;
        height: 4.5rem;
        cursor: pointer;
        background: linear-gradient(135deg,#FF7043,#BF360C)
        
        }

    .card__footer-button-left {
        border-style: none;
        border-radius: 50%;
        width: 4.5rem;
        height: 4.5rem;
        cursor: pointer;
        background: linear-gradient(135deg,#81C784,#1B5E20)
            
            }
    

    `
}

customElements.define('card-02',Card02)