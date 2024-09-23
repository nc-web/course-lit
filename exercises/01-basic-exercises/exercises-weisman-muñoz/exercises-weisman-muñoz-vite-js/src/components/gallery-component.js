import { LitElement, html, css } from 'lit';

class GalleryComponent extends LitElement {
  static styles = css`
    section {
      padding: 50px 20px;
      background-color: #fff;
      text-align: center;
    }

    h2 {
      font-size: 2.5rem;
      margin-bottom: 40px;
      color: #2C3E50;
      text-transform: uppercase;
    }

    

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }

    .gallery img {
      width: 100%;
      border-radius: 15px;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
      cursor: pointer;
    }

    .gallery img:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      section {
        padding: 30px 10px;
      }
    }
  `;

  render() {
    return html`
      <section id="gallery">
        <h2>Galeria</h2>
        <div class="gallery">
          <img src="/images/roki.jpeg" alt="Image 1">
          <img src="/images/lulu.jpeg" alt="Image 2">
          <img src="/images/lupita.jpeg" alt="Image 3">
          <img src="/images/sakura.jpeg" alt="Image 4">
          <img src="/images/poli.jpeg" alt="Image 5">
        </div>
      </section>
    `;
  }
}

customElements.define('gallery-component', GalleryComponent);
