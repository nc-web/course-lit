
import { LitElement, html } from 'lit';

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
}

customElements.define('component-slot', ComponentSlot);