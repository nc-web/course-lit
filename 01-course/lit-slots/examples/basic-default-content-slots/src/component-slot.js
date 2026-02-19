
import { LitElement, css, html } from 'lit';

class ComponentSlot extends LitElement {

    render() {
        return html`
            <div>
                <h1>SLOT BASIC USE - ENVIANDO CONTENIDO POR DEFECTO DENTRO DEL SLOT</h1>
                <h2>This is the component that has a slot / Este es el componente que tiene un slot</h2>
                <div>
                    <slot>
                        <p>⚠️ Contenido por defecto del slot</p>
                        <p>Nota: Se puede usar el slot para poner contenido por defecto</p>
                    </slot>
                </div>
                
            </div>
        `
    }
}

customElements.define('component-slot', ComponentSlot);