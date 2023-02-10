
import {LitElement, html, css} from 'lit'

// Components
import '../components-js/buttons/basic-buttons/ButtonBasicPoint01'

//imagen
const Avatar = new URL('/assets/img/avatar.webp',import.meta.url).href
const Premium = new URL('/assets/img/premium.webp',import.meta.url).href

export class CardBasic02 extends LitElement {
    render() {
        return html `
        <article>   
            <div class="card1">
                <div class="card1__decoration"> </div>
                <div class="card2__decoration"> </div>
                <img class="card1__img" src=${Avatar} alt="Photo"/>
                <h3 class="card1__name"> Martina Hings</h3>
                <p class="card1__email"> tucorreo<b>@micorreo.com</b></p>

            </div>
            <div class="card2">
                <div class="card2__header">
                    <img class="card2__header-img" src=${Premium} alt="Photo"/>
                    <h3 class="card2__header-tittle"> Premium</h3>
                    <p class="card2__header-subtittle"> <b>$45</b> per month</p>
                </div>
                <div class="card2__footer">
                    <p class="card2__footer-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <b>Minima saepe aut eos.</b> </p>
                    <p class="card2__footer-link"> Manage Your Account </p>
                    <div>
                                    </div>
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

    article {
    background-color: rgb(204, 200, 200);
    width: 300px;
    height: 380px;
    position: relative;
    left: 7px;
    border-radius: 10px;
    z-index: 1;
    
}

.card1 {
    width: 270px;
    height: 200px;
    background: linear-gradient(45deg, #9c80ff, #5390D9);
    position: absolute;
    align-items: center;
    left: 15px;
    top: 15px;
    border-radius: 10px;
    overflow: hidden;
    
}

.card1__img {
    width: 70px;
    position: absolute;
    left: 80px;
    border-radius: 20%;
    margin: 25px;
}     

.card1__name{
    position: absolute;
    text-align: center;
    color: white;
    font-size: 20px;
    top: 80px;
    left: 70px;
}
.card1__email{
    position: absolute;
    text-align: center;
    color: rgb(212, 212, 212);
    font-size: 14px;
    top: 110px;
    left: 55px;
}

.card2{
    width: 230px;
    height: 180px;
    background-color: rgb(255, 255, 255);
    position: absolute;
    top: 180px;
    left: 35px;
    padding: 7px;
    border-radius: 10px;
}

.card2__header-img {
    width: 60px;
    position: absolute;
    left: 20px;
    border-radius: 20%;
    margin: 0;
}  

.card2__header-tittle {
    position: relative;
    text-align: right;
    right: 40px;
}

.card2__header-subtittle {
    position: relative;
    text-align: right;
    font-size: 14px;
    right: 30px;
    top: -15px;
    color: #747575;
}

.card2__footer {
    width: 200px;
    position: absolute;
    background-color: #d0e5fd;
    font-size: 10px;
    left: 15px;
    padding: 0 10px;
    border-radius: 10px;
}

.card2__footer-link {
    color: #000000;
    font-weight: bolder;
    font-size: 12px;
}

.card1__decoration {
    width: 100px;
    height: 100px;
    background-color: #77acee;
    filter: blur(5px);
    position: absolute;
    left: 220px;
    border-radius: 10px;
    transform: rotate(45deg);
    z-index: 5;
}

.card2__decoration {
    width: 100px;
    height: 100px;
    background-color:#7856f5;
    filter: blur(5px);
    position: absolute;
    left: -50px;
    top: 100px;
    border-radius: 10px;
    transform: rotate(45deg);
    
}
    `

}

customElements.define('card-basic-02',CardBasic02)