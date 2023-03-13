
import { LitElement, html, css } from 'lit'

// Img
// const Img01 = new URL('/public/img/about-03.jpg',import.meta.url).href 
// const Img02 = new URL('/public/img/header-post-06.jpeg',import.meta.url).href 
// const Img03 = new URL('/',import.meta.url).href 
// const Img04 = new URL('',import.meta.url).href 
// const Img05 = new URL('',import.meta.url).href 
// const Img06 = new URL('',import.meta.url).href 

export class Card03 extends LitElement {
    render() {
        return html`
            <article>
                <div>
                   
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
    `
}

customElements.define('card-03', Card03)