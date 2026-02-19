
import { LitElement, css, html } from 'lit';

class FatherSlot extends LitElement {

    render() {
        return html`
            <div>
                <h1>SLOT BASIC USE - ENVIANDO UN MENSAJE POR DEFECTO DENTRO DEL SLOT</h1>
                <h2>Text into component father - This have a slot / Texto en el componente padre - Este tiene un slot</h2>
                <div>
                    <slot>
                        <p>⚠️ Contenido por defecto del slot padre</p>
                        <p>Nota: Se puede usar el slot para poner contenido por defecto</p>
                    </slot>
                </div>
                
            </div>
        `
    }
}

customElements.define('father-slot', FatherSlot);