
import { LitElement, html, css } from 'lit'

export class ButtonAnimation01 extends LitElement {

    button() {
        const button = document.querySelector('.button');
    
        button.onmousemove = function(e){
            const x = e.pageX - button.offsetLeft;
            const y = e.pageY - button.offsetTop;

            button.style.setProperty('--x', x + 'rem');
            button.style.setProperty('--y', y + 'rem');
        }
    }

    render() {
        return html`
        <div class='button'>
            <span><slot></slot></span>
        </div>
            
        `
    }

    static styles = css` 
        :host {
            display: inline-block;
            margin: 0;
            padding: 0;
            //box-sizing: border-box;
        }

        .button {
            border: none;
            position: relative;
            display: inline-flex;
            border-radius: 0.5rem;
            padding: .625rem 1.8rem;
            background: #9E9E9E;
            color: #FFFFFF;
            cursor: pointer;
            text-decoration: none;
            letter-spacing: .063rem; 
            overflow: hidden;
            z-index: 2;
        }

        .button span {
            position: relative;
            z-index: 2;
        }

        .button::before {
            content: '';
            position: absolute;
            top: var(--y);
            left: var(--x);
            transform: translate(-50%,-50%);
            width: 0;
            height: 0;
            border-radius: 50%;
            background: #2196F3;
            transition: width 0.5s, height 0.5s;
        }

        .button:hover::before {
            width: 18.7rem;
            height: 18.7rem;
            background-color: #2196F3;
        }
    `
}

customElements.define('button-animation-01', ButtonHover01)