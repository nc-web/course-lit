import { LitElement, html, css } from "lit";

import'./cards/CardHeader01'
export class SectionHeaderDesktop extends LitElement {
  render() {
    return html`
      <section class="section">
        <div class="section_container">
          <div class="section_container-tilte">
            <h1 class="section_container-title-text">hola mundo</h1>
          </div>
          <div class="section_container_cards">
            <div>              
              <card-header-01>
                <h2>weisman muñoz</h2><!---sloot para el primer ingreso -->
                <p class="presentation">card de presentacion</p> <!---sloot para el segundo ingreso -->
              </card-header-01>
            </div>
            <div>              
              <card-header-01>
                <h2>otro nombre</h2>
                <p>segunda card</p>
              </card-header-01>
            </div>
            <div>              
              <card-header-01></card-header-01>
            </div>
            <div>              
              <card-header-01></card-header-01>
            </div>
          </div>
        </div>
      </section>
    `;
  }
  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
    
    .section {
        padding: 1rem;
        background: red;
    }
    
    .section_container-tilte {
      display: flex;
      justify-content: center;

    }
  
    .section_container-title-text {
      color: white;
      font-size: 2rem;
    }
    .section_container_cards{
      display: grid;
      background: blue;
      justify-content: center;
      grid-template-columns: repeat(3, auto);
      gap: 1rem;
      padding: 1rem;
    }
    .presentation{
      font-size: 2rem;
      color: green;
    }
  `;
}

customElements.define("section-header-desktop", SectionHeaderDesktop);
