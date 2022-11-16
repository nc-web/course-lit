
import { html, css, LitElement } from 'lit'


export class HelloWorld extends LitElement {
    
    static get properties() {
        return {}
    }

    constructor() {
        super()
    }

    render() {
        return html `
            <h2>Hello World</h2>
        `
    }

    static get styles() {
        return css`
            :host {
                background-color: aquamarine;
            }
        `
    }
        
}

customElements.define('hello-world', HelloWorld)

