import { LitElement, html, css } from 'lit';

class FooterComponent extends LitElement {
  static styles = css`
    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 20px;
    }
    p {
      margin: 0;
      font-size: 1rem;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      footer {
        padding: 15px;
      }
    }
  `;

  render() {
    return html`
      <footer>
        <p>&copy; 2024 Mi pagina. todos los derechos son reservados creo......</p>
        <p><a href="https://www.google.com/" target="_blank">Politica de privacidad</a></p>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
