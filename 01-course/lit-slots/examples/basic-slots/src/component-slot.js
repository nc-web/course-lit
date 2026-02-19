
import { LitElement, html } from 'lit';

class ComponentSlot extends LitElement {

    render() {
        return html`
            <div>
                <h1>SLOT BASIC USE</h1>
                <h2>This is the component that has a slot / Este es el componente que tiene un slot</h2>
                <div>
                    <slot></slot>
                </div>
                
            </div>
        `
    }
}

customElements.define('component-slot', ComponentSlot);