import { LitElement, html, css } from 'lit';

class MenuComponent extends LitElement {
  static styles = css`
    nav {
      background-color: #2C3E50;
      display: flex;
      justify-content: space-around;
      padding: 1rem 2rem;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease-in-out;
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 1.1rem;
      padding: 0.5rem 1rem;
      transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
      border-radius: 20px;
    }

    a:hover {
      background-color: #18BC9C;
      color: #fff;
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      nav {
        flex-direction: column;
        align-items: center;
      }

      a {
        padding: 1rem;
      }
    }
  `;

  render() {
    return html`
      <nav>
        <a href="#header">Inicio</a>
        <a href="#about-us">Sobre Nosotros</a>
        <a href="#gallery">Galeria</a>
        <a href="#contact-us">Contactanos</a>
      </nav>
    `;
  }
}

customElements.define('menu-component', MenuComponent);
