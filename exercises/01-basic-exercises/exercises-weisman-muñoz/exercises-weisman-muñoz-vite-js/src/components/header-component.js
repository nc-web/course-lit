import { LitElement, html, css } from 'lit';

class HeaderComponent extends LitElement {
  static styles = css`
    header {
      background-image: url('images/guanda.jpg');
      background-position: center;
      background-repeat: no-repeat;

      color: white;
      text-align: center;
      padding: 150px 20px;
      font-family: 'Montserrat', sans-serif;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 2px;
      animation: fadeInDown 1s ease;
    }

    p {
      font-size: 1.5rem;
      animation: fadeInUp 1.5s ease;
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  render() {
    return html`
      <header id="header">
        <h1>veterinaria guanda</h1>
        <p>es una pagina de practica para conocer algunas funcionalidades de lit</p>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
