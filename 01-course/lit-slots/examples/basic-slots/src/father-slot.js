
import { LitElement, css, html } from 'lit';

class FatherSlot extends LitElement {

    render() {
        return html`
            <div>
                <h1>SLOT BASIC USE</h1>
                <h2>Text into component father - This have a slot / Texto en el componente padre - Este tiene un slot</h2>
                <div>
                    <slot></slot>
                </div>
                
            </div>
        `
    }
}

customElements.define('father-slot', FatherSlot);