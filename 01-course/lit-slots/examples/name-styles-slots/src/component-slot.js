
import { LitElement, css, html } from 'lit';

class ComponentSlot extends LitElement {

    render() {
        return html`
            <article>
                <header>
                    <slot name="header"></slot>
                </header>

                <main>
                    <slot></slot>
                </main>

                <footer>
                    <slot name="footer"></slot>
                </footer>
            </article>
        `
    }

    static get styles() {
        return css`
        :host {
            max-width: 1280px;
            margin: 0 auto;
            padding: 2rem;
            text-align: center;
        }

        ::slotted(h2) {
            color: royalblue;
        }

        ::slotted(p) {
            font-size: 1.1rem;
            color: #E65100;
            font-style: italic;
        }

        `
  }
}

customElements.define('component-slot', ComponentSlot);