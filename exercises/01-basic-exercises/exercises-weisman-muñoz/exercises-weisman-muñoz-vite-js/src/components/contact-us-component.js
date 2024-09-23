import { LitElement, html, css } from 'lit';

class ContactUsComponent extends LitElement {
  static styles = css`
    section {
      padding: 50px 20px;
      background-color: #ECF0F1;
      border-radius: 10px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    h2 {
      font-size: 2.5rem;
      margin-bottom: 30px;
      color: #2C3E50;
      text-transform: uppercase;
    }

    form {
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 0 auto;
    }

    input, textarea {
      padding: 15px;
      margin: 10px 0;
      font-size: 1rem;
      border-radius: 8px;
      border: 1px solid #ccc;
      outline: none;
      transition: border-color 0.3s ease;
    }

    input:focus, textarea:focus {
      border-color: #18BC9C;
    }

    button {
      padding: 15px;
      background-color: #18BC9C;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.2rem;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    button:hover {
      background-color: #16A085;
      transform: translateY(-3px);
    }
  `;

  render() {
    return html`
      <section id="contact-us">
        <h2>Contactanos</h2>
        <form>
          <input type="text" placeholder="Tu Nombre" required />
          <input type="email" placeholder="Tu Correo" required />
          <textarea rows="5" placeholder="Tu Peticion" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    `;
  }
}

customElements.define('contact-us-component', ContactUsComponent);
