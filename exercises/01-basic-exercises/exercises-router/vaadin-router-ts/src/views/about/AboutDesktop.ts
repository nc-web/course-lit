
import { LitElement, html, css  } from 'lit';
import { customElement } from 'lit/decorators.js'

// Layout
import '../../layouts/LayoutDesktop'


@customElement('about-desktop')
export class AboutDesktop extends LitElement {

    render() {
        return html`
            <layout-desktop>
                <div>
                    <h2>ABOUT DESKTOP</h2>
                </div>
            </layout-desktop>
        `
    }

    static styles = css`
    
        :host {
            display: block;
        }
        
    `

}