
import { LitElement, css, html } from 'lit';

import './father-slot'

class ChildrenSlot extends LitElement {

    render() {
        return html`
            <div>
                <father-slot>
                    <h4>
                        This is the child, and we're inside the parent's slot / Este es el hijo y nosotros estamos dentro del slot del padre.
                    </h4>
                    <p>Note: The child component is being shown so that it displays both components. If only the parent component were called, only it would be displayed, not the child.</p>
                    <p>Nota: Se esta mostrando al componente hijo para que muestre los dos componentes. Si se llamara solo al componente padre solo se mostraria el solo pero no al hijo </p>
                </father-slot>
            </div>
        `
    }
}

customElements.define('children-slot', ChildrenSlot);