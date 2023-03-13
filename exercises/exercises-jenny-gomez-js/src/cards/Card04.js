
import { LitElement, html, css } from 'lit'

// Images
const Profile = new URL('/public/img/img-header.jpg',import.meta.url).href

export class Card02 extends LitElement {
    render() {
        return html`
           <article class='card'>
                <div class='card__header'>
                    <img class='card__header-img' src=${Profile} alt=''/>
                </div>

                <div class='card__body'>
                    <h1 class='card__body-title'> Lorem Ipsum </h1>
                    <h3 class='card__body-subtitle'> when an unknown </h3>
                </div>
                
                <div class='card__footer'>
                    <button class='card__footer-button-right'> 
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24"><title>phone-incoming</title>
                            <path fill="#F06292" d="M4,3A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.17L13.21,17.37C10.38,15.93 8.06,13.62 6.62,10.78L8.82,8.57C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4M19,11V9.5H15.5L21,4L20,3L14.5,8.5V5H13V11H19Z" />
                        </svg>
                    </button>
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24"><title>email</title>
                            <path fill="#BDBDBD" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                        </svg>
                    <button class='card__footer-button-left'>
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24"><title>phone-incoming</title>
                            <path fill="#3F51B5" d="M4,3A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.17L13.21,17.37C10.38,15.93 8.06,13.62 6.62,10.78L8.82,8.57C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4M19,11V9.5H15.5L21,4L20,3L14.5,8.5V5H13V11H19Z" />
                        </svg>
                    </button>
                </div>
           </article>
        `
    }

    static styles = css`
        :host {
            display: inline-block;
            padding: 0;
            margin: 1rem;
        }

        .card {
            width: 16.2rem;
            padding: .625rem;
            border-radius: 2rem;
            position: relative;
            background: linear-gradient(135deg, #7E57C2, #B39DDB )
        }

        .card:hover {
            transition: .3s;
            background-color: #EA80FC; 
        }

        .card__header {
            display: grid;
            justify-content: center;
            position: absolute;
            top: -8rem;
            left: 3.8rem;
        }

        .card__header-img {
            width: 9.3rem;
            height: 9.3rem;
            border-radius: 50%;
        }

        .card__body-title {
            margin: 2rem 0;
            text-align: center;
            color: #FFFF;
        }

        .card__body-subtitle {
            text-align: center;
            color: #616161;  
        }

        .card__footer {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .5rem;
        }

        .card__footer-button-right {
            width: 3rem;
            height: 3rem;
            border-style: none;
            border-radius: 50%;
            cursor: pointer;
            background: linear-gradient(130deg,#00ACC1, #f74fc5);
        }

        .card__footer-button-left {
            width: 3rem;
            height: 3rem;
            border-style: none;
            border-radius: 50%;
            cursor: pointer;
            background: linear-gradient(130deg,#00ACC1, #f74fc5);
        }
    `
}

customElements.define('card-02', Card02)






