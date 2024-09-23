import { LitElement, html, css } from 'lit';

class AboutUsComponent extends LitElement {
  static styles = css`
    section {
      padding: 50px 20px;
      text-align: center;
      background-color: #ECF0F1;
      border-radius: 10px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      margin: 50px 0;
    }

    h2 {
      font-size: 2.5rem;
      margin-bottom: 30px;
      color: #2C3E50;
      text-transform: uppercase;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.8;
      margin-bottom: 20px;
      color: #7F8C8D;
    }

    @media (max-width: 768px) {
      section {
        padding: 30px 10px;
      }
    }
  `;

  render() {
    return html`
      <section id="about-us">
        <h2>Sobre Nosotros</h2>
        <p>veterinaria con venta de productos para animales.</p>
        <p>servicio de atecion 24/7 con maniquiure y pediquiure</p>
      </section>
    `;
  }
}

customElements.define('about-us-component', AboutUsComponent);
