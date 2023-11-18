import { LitElement, html, css } from 'lit'

export class PaginationTest01 extends LitElement {
  render() {
    return html`
      <div class="wrapper">
        <div class="container">
          <div class="card tabs">
            <input
              id="tab-1"
              type="radio"
              class="tab tab-selector"
              checked
              name="tab"
            />
            <label for="tab-1" class="tab tab-primary">Product</label>
            <input
              id="tab-2"
              type="radio"
              class="tab tab-selector"
              name="tab"
            />
            <label for="tab-2" class="tab tab-success">Options</label>
            <input
              id="tab-3"
              type="radio"
              class="tab tab-selector"
              name="tab"
            />
            <label for="tab-3" class="tab tab-default">Shipping</label>
            <input
              id="tab-4"
              type="radio"
              class="tab tab-selector"
              name="tab"
            />
            <label for="tab-4" class="tab tab-warning">Published</label>
            <div class="tabsShadow"></div>
            <div class="glider"></div>
            <section class="content">
              <div class="item" id="content-1">
                <h2 class="tab-title tab-primary">Tab 1</h2>
                <p>
                  <span class="numit">1</span> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor
                </p>
              </div>
              <div class="item" id="content-2">
                <h2 class="tab-title tab-success">Tab 2</h2>
                <p>
                  <span class="numit">2</span> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor
                </p>
              </div>
              <div class="item" id="content-3">
                <h2 class="tab-title tab-default">Tab 3</h2>
                <p>
                  <span class="numit">3</span> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis
                </p>
              </div>
              <div class="item" id="content-4">
                <h2 class="tab-title tab-warning">Tab 4</h2>
                <p>
                  <span class="numit">4</span> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    `
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }

    .container {
      width: 100%;
      padding: 10px 0;
      text-align: center;
      width: 90%;
      padding: 10px 0px;
      text-align: center;
    }
    .container .card {
      max-width: 600px;
      min-height: 140px;
      min-width: 595px;
      border-radius: 10px;
      margin: 0 auto;
    }
    .tabs {
      text-align: left;
    }

    .content .item {
      visibility: hidden;
      transition: all 0.3s;
      position: absolute;
      padding: 10px 20px;
    }

    #tab-1:checked ~ section #content-1,
    #tab-2:checked ~ section #content-2,
    #tab-3:checked ~ section #content-3,
    #tab-4:checked ~ section #content-4 {
      opacity: 1;
      visibility: visible;
    }

    .tabs input + label {
      margin: 12px -8px;
      width: 15%;
      transition: all 0.3s;
      text-align: center;
      border: none;
      border-bottom: 0.5pt solid #1d1e22;
      color: #161929;
      display: inline-flex;
      padding: 5pt 10pt;
      justify-content: flex-start;
      background: #333;
      font-size: 1rem;
      background: #26292c;
      margin-bottom: 0.5px;
      border-radius: 7px 7px 0 0;
      border-top: 1px solid #3b3d3f;
      font-family: "antique-olive";
      cursor: pointer;
    }

    .content {
      text-align: left;
      line-height: 20px;
      height: 240px;
      border-radius: 5px;
      padding: 1.25rem;
      z-index: 2;
      border-top: 1px solid #3b3d3f;
      background: hsl(232deg 16% 15%);
      position: relative;
    }

    .container .card {
      max-width: 600px;
      min-height: 140px;
      border-radius: 10px;
      border: none;
      margin: 0 auto;
      z-index: 4;
      position: relative;
      background: linear-gradient(#141e30, #243b55);
      background: #16181a;
      border-top: 1px solid #3b3d3f;
      background: hsl(232deg 18% 8%);
    }

    .content p {
      letter-spacing: 0.75px;
      font-size: 14pt;
      font-style: normal;
      color: #f0f2fc;
      line-height: 30px;
      margin-top: 10pt;
      font-family: "freight-display-pro";
      font-weight: 300;
    }
    h2.tab-title.tab-warning,
    h2.tab-title.tab-success,
    h2.tab-title.tab-primary,
    h2.tab-title.tab-default {
      display: inline-flex;
      color: #fff;
      background-position: bottom center;
      margin-bottom: 0pt;
      margin-top: 6pt;
      height: 22pt;
      text-transform: capitalize;
      font-size: 24px;
      letter-spacing: 0px;
      font-family: "Manrope";
      font-weight: 800;
    }

    .tabs input {
      position: relative;
      opacity: 0;
      margin: auto;
      padding: 0;
    }

    #tab-1:checked + label {
      color: #2282f0;
    }

    #tab-2:checked + label {
      color: #51a14c;
    }

    #tab-3:checked + label {
      color: #b7a124;
    }

    #tab-4:checked + label {
      color: #ffadfa;
    }
  `
}
customElements.define('pagination-test-01', PaginationTest01)
