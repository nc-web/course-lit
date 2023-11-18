import { LitElement, html, css } from 'lit'

export class FormPagination extends LitElement {
  render() {
    return html`
      <div class="form">
        <div class="form__icon-title">
          <div class="form__icon-tile-container">
            <svg
              class="form__icon-tile-container-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>account</title>
              <path
                d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
              />
            </svg>
          </div>
          <h3 class="form__icon-tile-title">Form New Requeriments</h3>
        </div>

        <form class="form__container">
          <div class="form__container-tl">
            <div class="form__container-tl-tab">
              <div class="form__container-tl-tab-card">
                <div
                  class="form__container-tl-tab-card-container form__container-tl-tab-card-tabs"
                >
                  <input
                    id="tab-tl-1"
                    type="radio"
                    class="tab-tl tab"
                    checked
                    name="tab-tl"
                  />
                  <label for="tab-tl-1" class="tab tab-primary">Product</label>
                  <input
                    id="tab-tl-2"
                    type="radio"
                    class="tab-tl tab"
                    name="tab-tl"
                  />
                  <label for="tab-tl-2" class="tab tab-success">Options</label>
                  <input
                    id="tab-tl-3"
                    type="radio"
                    class="tab-tl tab"
                    name="tab-tl"
                  />
                  <label for="tab-tl-3" class="tab tab-default">Shipping</label>
                  <input
                    id="tab-tl-4"
                    type="radio"
                    class="tab-tl tab"
                    name="tab-tl"
                  />
                  <label for="tab-tl-4" class="tab tab-warning"
                    >Published</label
                  >
                  <section class="content-tl">
                    <div class="item-tl" id="content-tl-1">
                      <h2 class="tab-title tab-primary">Tab 1</h2>
                      <p>
                        <span>1</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                      </p>
                    </div>
                    <div class="item-tl" id="content-tl-2">
                      <h2 class="tab-title tab-success">Tab 2</h2>
                      <p>
                        <span>2</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                      </p>
                    </div>
                    <div class="item-tl" id="content-tl-3">
                      <h2 class="tab-title tab-default">Tab 3</h2>
                      <p>
                        <span>3</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis
                      </p>
                    </div>
                    <div class="item-tl" id="content-tl-4">
                      <h2 class="tab-title tab-warning">Tab 4</h2>
                      <p>
                        <span>4</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div class="form__container-tr">
            <div class="form__container-tr-tab">
              <div class="form__container-tr-tab-card">
                <div
                  class="form__container-tr-tab-card-container form__container-tr-tab-card-tabs"
                >
                  <input
                    id="tab-tr-1"
                    type="radio"
                    class="tab-tr tab"
                    name="tab-tr"
                    checked
                  />
                  <label for="tab-tr-1" class="tab tab-tr-primary"
                    >Product</label
                  >
                  <input
                    id="tab-tr-2"
                    type="radio"
                    class="tab-tr tab"
                    name="tab-tr"
                  />
                  <label for="tab-tr-2" class="tab tab-tr-success"
                    >Options</label
                  >
                  <input
                    id="tab-tr-3"
                    type="radio"
                    class="tab-tr tab"
                    name="tab-tr"
                  />
                  <label for="tab-tr-3" class="tab tab-tr-default"
                    >Shipping</label
                  >
                  <input
                    id="tab-tr-4"
                    type="radio"
                    class="tab-tr tab"
                    name="tab-tr"
                  />
                  <label for="tab-tr-4" class="tab tab-tr-warning"
                    >Published</label
                  >
                  <section class="content-tr">
                    <div class="item-tr" id="content-tr-1">
                      <h2 class="tab-title tab-primary">Tab 1</h2>
                      <p>
                        <span class="numit">1</span> Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor
                      </p>
                    </div>
                    <div class="item-tr" id="content-tr-2">
                      <h2 class="tab-title tab-success">Tab 2</h2>
                      <p>
                        <span class="numit">2</span> Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor
                      </p>
                    </div>
                    <div class="item-tr" id="content-tr-3">
                      <h2 class="tab-title tab-default">Tab 3</h2>
                      <p>
                        <span class="numit">3</span> Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis
                      </p>
                    </div>
                    <div class="item-tr" id="content-tr-4">
                      <h2 class="tab-title tab-warning">Tab 4</h2>
                      <p>
                        <span class="numit">4</span> Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div class="form__container-bl">
            <div class="form__container-bl-tab">
              <div class="form__container-bl-tab-card">
                <div
                  class="form__container-bl-tab-card-container form__container-bl-tab-card-tabs"
                >
                  <input
                    id="tab-bl-1"
                    type="radio"
                    class="tab-bl tab"
                    checked
                    name="tab-bl"
                  />
                  <label for="tab-bl-1" class="tab tab-primary">Product</label>
                  <input
                    id="tab-bl-2"
                    type="radio"
                    class="tab-bl tab"
                    name="tab-bl"
                  />
                  <label for="tab-bl-2" class="tab tab-success">Options</label>
                  <input
                    id="tab-bl-3"
                    type="radio"
                    class="tab-bl tab"
                    name="tab-bl"
                  />
                  <label for="tab-bl-3" class="tab tab-default">Shipping</label>
                  <input
                    id="tab-bl-4"
                    type="radio"
                    class="tab-bl tab"
                    name="tab-bl"
                  />
                  <label for="tab-bl-4" class="tab tab-warning"
                    >Published</label
                  >
                  <section class="content-bl">
                    <div class="item-bl" id="content-bl-1">
                      <h2 class="tab-title tab-primary">Tab 1</h2>
                      <p>
                        <span>1</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                      </p>
                    </div>
                    <div class="item-bl" id="content-bl-2">
                      <h2 class="tab-title tab-success">Tab 2</h2>
                      <p>
                        <span>2</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                      </p>
                    </div>
                    <div class="item-bl" id="content-bl-3">
                      <h2 class="tab-title tab-default">Tab 3</h2>
                      <p>
                        <span>3</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis
                      </p>
                    </div>
                    <div class="item-bl" id="content-bl-4">
                      <h2 class="tab-title tab-warning">Tab 4</h2>
                      <p>
                        <span>4</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div class="form__container-br">
            <div class="form__container-br-tab">
              <div class="form__container-br-tab-card">
                <div
                  class="form__container-br-tab-card-container form__container-br-tab-card-tabs"
                >
                  <input
                    id="tab-br-1"
                    type="radio"
                    class="tab-br tab"
                    checked
                    name="tab-br"
                  />
                  <label for="tab-br-1" class="tab tab-primary">Product</label>
                  <input
                    id="tab-br-2"
                    type="radio"
                    class="tab-br tab"
                    name="tab-br"
                  />
                  <label for="tab-br-2" class="tab tab-success">Options</label>
                  <input
                    id="tab-br-3"
                    type="radio"
                    class="tab-br tab"
                    name="tab-br"
                  />
                  <label for="tab-br-3" class="tab tab-default">Shipping</label>
                  <input
                    id="tab-br-4"
                    type="radio"
                    class="tab-br tab"
                    name="tab-br"
                  />
                  <label for="tab-br-4" class="tab tab-warning"
                    >Pubrished</label
                  >
                  <section class="content-br">
                    <div class="item-br" id="content-br-1">
                      <h2 class="tab-title tab-primary">Tab 1</h2>
                      <p>
                        <span>1</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                      </p>
                    </div>
                    <div class="item-br" id="content-br-2">
                      <h2 class="tab-title tab-success">Tab 2</h2>
                      <p>
                        <span>2</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                      </p>
                    </div>
                    <div class="item-br" id="content-br-3">
                      <h2 class="tab-title tab-default">Tab 3</h2>
                      <p>
                        <span>3</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis
                      </p>
                    </div>
                    <div class="item-br" id="content-br-4">
                      <h2 class="tab-title tab-warning">Tab 4</h2>
                      <p>
                        <span>4</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    `
  }

  static styles = css`
    :host {
      display: inline-block;
      margin: 0;
      padding: 0;
    }

    .form {
      width: 100%;
      display: grid;
      align-items: center;
      justify-content: center;
    }

    .form__icon-title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1.6rem 0 0 0;
    }

    .form__icon-tile-container {
      display: grid;
      justify-content: center;
      box-shadow: 0.1rem 0.2rem 0.5rem 0.2rem #d6d6d6;
      border-radius: 0.6rem;
      padding: 0.5rem;
      margin: 0 0.7rem 0 1.6rem;
    }

    .form__icon-tile-container-icon {
      width: 1.8rem;
      fill: #c9c8c8;
    }

    .form__icon-tile-title {
      margin: 0.7rem 0;
      text-align: center;
      color: #424242;
    }

    .form__container {
      display: grid;
      grid-template-columns: repeat(2, auto);
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }

    /* // ------------------------------------------------ STYLES FOR FORM__CONTAINER-TL-TAB-CARD ----------------------------------------------- */
    .form__container-tl-tab-card {
      width: 100%;
      padding: 0.625rem 0;
      text-align: center;
      width: 90%;
      padding: 0.625rem 0px;
      text-align: center;
    }
    .form__container-tl-tab-card .form__container-tl-tab-card-container {
      max-width: 600px;
      min-height: 8.75rem;
      min-width: 37.18rem;
      border-radius: 0.625rem;
      margin: 0 auto;
    }
    .form__container-tl-tab-card-tabs {
      text-align: left;
    }

    .content-tl .item-tl {
      visibility: hidden;
      transition: all 0.3s;
      position: absolute;
      padding: 0.625rem 1.25rem;
    }

    #tab-tl-1:checked ~ section #content-tl-1,
    #tab-tl-2:checked ~ section #content-tl-2,
    #tab-tl-3:checked ~ section #content-tl-3,
    #tab-tl-4:checked ~ section #content-tl-4 {
      opacity: 1;
      visibility: visible;
    }

    .form__container-tl-tab-card-tabs .tab-tl + label {
      margin: 0.75rem -0.5rem;
      width: 15%;
      transition: all 0.3s;
      text-align: center;
      border: none;
      border-bottom: 0.5pt solid #1d1e22;
      color: #161929;
      display: inline-flex;
      padding: 5pt 0.8rem;
      justify-content: flex-start;
      background: #333;
      font-size: 1rem;
      background: #26292c;
      margin-bottom: 0.5px;
      border-radius: 0.4rem 0.4rem 0 0;
      border-top: 1px solid #3b3d3f;
      font-family: "antique-olive";
      cursor: pointer;
    }

    .content-tl {
      text-align: left;
      line-height: 1.25rem;
      height: 15rem;
      border-radius: 0.3rem;
      padding: 1.25rem;
      z-index: 2;
      border-top: 1px solid #3b3d3f;
      background: hsl(232deg 16% 15%);
      position: relative;
    }

    .form__container-tl-tab-card .form__container-tl-tab-card-container {
      max-width: 600px;
      min-height: 8.75rem;
      border-radius: 0.625rem;
      border: none;
      margin: 0 auto;
      z-index: 4;
      position: relative;
      background: linear-gradient(#141e30, #243b55);
      background: #16181a;
      border-top: 1px solid #3b3d3f;
      background: hsl(232deg 18% 8%);
    }

    .content-tl p {
      letter-spacing: 0.75px;
      font-size: 1rem;
      color: #f0f2fc;
      line-height: 30px;
      margin-top: 0.8rem;
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
      margin-bottom: 0;
      margin-top: 0.5rem;
      height: 1.625rem;
      text-transform: capitalize;
      font-size: 1.5rem;
      letter-spacing: 0px;
      font-family: "Manrope";
      font-weight: 800;
    }

    .form__container-tl-tab-card-tabs .tab-tl {
      position: relative;
      opacity: 0;
      margin: auto;
      padding: 0;
    }

    #tab-tl-1:checked + label {
      color: #2282f0;
    }

    #tab-tl-2:checked + label {
      color: #51a14c;
    }

    #tab-tl-3:checked + label {
      color: #b7a124;
    }

    #tab-tl-4:checked + label {
      color: #ffadfa;
    }

    /* // ------------------------------------------------ STYLES FOR FORM__CONTAINER-TR-TAB-CARD ----------------------------------------------- */

    .form__container-tr-tab-card {
      width: 100%;
      padding: 0.625rem 0;
      text-align: center;
      width: 90%;
      padding: 0.625rem 0px;
      text-align: center;
    }
    .form__container-tr-tab-card .form__container-tr-tab-card-container {
      max-width: 600px;
      min-height: 8.75rem;
      min-width: 37.18rem;
      border-radius: 0.625rem;
      margin: 0 auto;
    }
    .form__container-tr-tab-card-tabs {
      text-align: left;
    }

    .content-tr .item-tr {
      visibility: hidden;
      transition: all 0.3s;
      position: absolute;
      padding: 0.625rem 1.25rem;
    }

    #tab-tr-1:checked ~ section #content-tr-1,
    #tab-tr-2:checked ~ section #content-tr-2,
    #tab-tr-3:checked ~ section #content-tr-3,
    #tab-tr-4:checked ~ section #content-tr-4 {
      opacity: 1;
      visibility: visible;
    }

    .form__container-tr-tab-card-tabs .tab-tr + label {
      margin: 0.75rem -0.5rem;
      width: 15%;
      transition: all 0.3s;
      text-align: center;
      border: none;
      border-bottom: 0.5pt solid #1d1e22;
      color: #161929;
      display: inline-flex;
      padding: 5pt 0.8rem;
      justify-content: flex-start;
      background: #333;
      font-size: 1rem;
      background: #26292c;
      margin-bottom: 0.5px;
      border-radius: 0.4rem 0.4rem 0 0;
      border-top: 1px solid #3b3d3f;
      font-family: "antique-olive";
      cursor: pointer;
    }

    .content-tr {
      text-align: left;
      line-height: 1.25rem;
      height: 15rem;
      border-radius: 0.3rem;
      padding: 1.25rem;
      z-index: 2;
      border-top: 1px solid #3b3d3f;
      background: hsl(232deg 16% 15%);
      position: relative;
    }

    .form__container-tr-tab-card .form__container-tr-tab-card-container {
      max-width: 600px;
      min-height: 8.75rem;
      border-radius: 0.625rem;
      border: none;
      margin: 0 auto;
      z-index: 4;
      position: relative;
      background: linear-gradient(#141e30, #243b55);
      background: #16181a;
      border-top: 1px solid #3b3d3f;
      background: hsl(232deg 18% 8%);
    }

    .content-tr p {
      letter-spacing: 0.75px;
      font-size: 1rem;
      color: #f0f2fc;
      line-height: 30px;
      margin-top: 0.8rem;
      font-family: "freight-display-pro";
      font-weight: 300;
    }
    h2.tab-title.tab-tr-warning,
    h2.tab-title.tab-tr-success,
    h2.tab-title.tab-tr-primary,
    h2.tab-title.tab-tr-default {
      display: inline-flex;
      color: #fff;
      background-position: bottom center;
      margin-bottom: 0pt;
      margin-top: 0.5rem;
      height: 1.625rem;
      text-transform: capitalize;
      font-size: 1.5rem;
      letter-spacing: 0px;
      font-family: "Manrope";
      font-weight: 800;
    }

    .form__container-tr-tab-card-tabs .tab-tr {
      position: relative;
      opacity: 0;
      margin: auto;
      padding: 0;
    }

    #tab-tr-1:checked + label {
      color: #2282f0;
    }

    #tab-tr-2:checked + label {
      color: #51a14c;
    }

    #tab-tr-3:checked + label {
      color: #b7a124;
    }

    #tab-tr-4:checked + label {
      color: #ffadfa;
    }

  

    /* // ------------------------------------------------ STYLES FOR FORM__CONTAINER-BL-TAB-CARD ----------------------------------------------- */

    .form__container-bl-tab-card {
      width: 100%;
      padding: 0.625rem 0;
      text-align: center;
      width: 90%;
      padding: 0.625rem 0px;
      text-align: center;
    }
    .form__container-bl-tab-card .form__container-bl-tab-card-container {
      max-width: 600px;
      min-height: 8.75rem;
      min-width: 37.18rem;
      border-radius: 0.625rem;
      margin: 0 auto;
    }
    .form__container-bl-tab-card-tabs {
      text-align: left;
    }

    .content-bl .item-bl {
      visibility: hidden;
      transition: all 0.3s;
      position: absolute;
      padding: 0.625rem 1.25rem;
    }

    #tab-bl-1:checked ~ section #content-bl-1,
    #tab-bl-2:checked ~ section #content-bl-2,
    #tab-bl-3:checked ~ section #content-bl-3,
    #tab-bl-4:checked ~ section #content-bl-4 {
      opacity: 1;
      visibility: visible;
    }

    .form__container-bl-tab-card-tabs .tab-bl + label {
      margin: 0.75rem -0.5rem;
      width: 15%;
      transition: all 0.3s;
      text-align: center;
      border: none;
      border-bottom: 0.5pt solid #1d1e22;
      color: #161929;
      display: inline-flex;
      padding: 5pt 0.8rem;
      justify-content: flex-start;
      background: #333;
      font-size: 1rem;
      background: #26292c;
      margin-bottom: 0.5px;
      border-radius: 0.4rem 0.4rem 0 0;
      border-top: 1px solid #3b3d3f;
      font-family: "antique-olive";
      cursor: pointer;
    }

    .content-bl {
      text-align: left;
      line-height: 1.25rem;
      height: 15rem;
      border-radius: 0.3rem;
      padding: 1.25rem;
      z-index: 2;
      border-top: 1px solid #3b3d3f;
      background: hsl(232deg 16% 15%);
      position: relative;
    }

    .form__container-bl-tab-card .form__container-bl-tab-card-container {
      max-width: 600px;
      min-height: 8.75rem;
      border-radius: 0.625rem;
      border: none;
      margin: 0 auto;
      z-index: 4;
      position: relative;
      background: linear-gradient(#141e30, #243b55);
      background: #16181a;
      border-top: 1px solid #3b3d3f;
      background: hsl(232deg 18% 8%);
    }

    .content-bl p {
      letter-spacing: 0.75px;
      font-size: 1rem;
      color: #f0f2fc;
      line-height: 30px;
      margin-top: 0.8rem;
      font-family: "freight-display-pro";
      font-weight: 300;
    }
    h2.tab-title.tab-tr-warning,
    h2.tab-title.tab-tr-success,
    h2.tab-title.tab-tr-primary,
    h2.tab-title.tab-tr-default {
      display: inline-flex;
      color: #fff;
      background-position: bottom center;
      margin-bottom: 0pt;
      margin-top: 0.5rem;
      height: 1.625rem;
      text-transform: capitalize;
      font-size: 1.5rem;
      letter-spacing: 0px;
      font-family: "Manrope";
      font-weight: 800;
    }

    .form__container-bl-tab-card-tabs .tab-bl {
      position: relative;
      opacity: 0;
      margin: auto;
      padding: 0;
    }

    #tab-bl-1:checked + label {
      color: #2282f0;
    }

    #tab-bl-2:checked + label {
      color: #51a14c;
    }

    #tab-bl-3:checked + label {
      color: #b7a124;
    }

    #tab-bl-4:checked + label {
      color: #ffadfa;
    }

    

    /* // ------------------------------------------------ STYLES FOR FORM__CONTAINER-BR-TAB-CARD ----------------------------------------------- */

    .form__container-br-tab-card {
      width: 100%;
      padding: 0.625rem 0;
      text-align: center;
      width: 90%;
      padding: 0.625rem 0px;
      text-align: center;
    }
    .form__container-br-tab-card .form__container-br-tab-card-container {
      max-width: 600px;
      min-height: 8.75rem;
      min-width: 37.18rem;
      border-radius: 0.625rem;
      margin: 0 auto;
    }
    .form__container-br-tab-card-tabs {
      text-align: left;
    }

    .content-br .item-br {
      visibility: hidden;
      transition: all 0.3s;
      position: absolute;
      padding: 0.625rem 1.25rem;
    }

    #tab-br-1:checked ~ section #content-br-1,
    #tab-br-2:checked ~ section #content-br-2,
    #tab-br-3:checked ~ section #content-br-3,
    #tab-br-4:checked ~ section #content-br-4 {
      opacity: 1;
      visibility: visible;
    }

    .form__container-br-tab-card-tabs .tab-br + label {
      margin: 0.75rem -0.5rem;
      width: 15%;
      transition: all 0.3s;
      text-align: center;
      border: none;
      border-bottom: 0.5pt solid #1d1e22;
      color: #161929;
      display: inline-flex;
      padding: 5pt 0.8rem;
      justify-content: flex-start;
      background: #333;
      font-size: 1rem;
      background: #26292c;
      margin-bottom: 0.5px;
      border-radius: 0.4rem 0.4rem 0 0;
      border-top: 1px solid #3b3d3f;
      font-family: "antique-olive";
      cursor: pointer;
    }

    .content-br {
      text-align: left;
      line-height: 1.25rem;
      height: 15rem;
      border-radius: 0.3rem;
      padding: 1.25rem;
      z-index: 2;
      border-top: 1px solid #3b3d3f;
      background: hsl(232deg 16% 15%);
      position: relative;
    }

    .form__container-br-tab-card .form__container-br-tab-card-container {
      max-width: 600px;
      min-height: 8.75rem;
      border-radius: 0.625rem;
      border: none;
      margin: 0 auto;
      z-index: 4;
      position: relative;
      background: linear-gradient(#141e30, #243b55);
      background: #16181a;
      border-top: 1px solid #3b3d3f;
      background: hsl(232deg 18% 8%);
    }

    .content-br p {
      letter-spacing: 0.75px;
      font-size: 1rem;
      color: #f0f2fc;
      line-height: 30px;
      margin-top: 0.8rem;
      font-family: "freight-display-pro";
      font-weight: 300;
    }
    h2.tab-title.tab-tr-warning,
    h2.tab-title.tab-tr-success,
    h2.tab-title.tab-tr-primary,
    h2.tab-title.tab-tr-default {
      display: inline-flex;
      color: #fff;
      background-position: bottom center;
      margin-bottom: 0pt;
      margin-top: 0.5rem;
      height: 1.625rem;
      text-transform: capitalize;
      font-size: 1.5rem;
      letter-spacing: 0px;
      font-family: "Manrope";
      font-weight: 800;
    }

    .form__container-br-tab-card-tabs .tab-br {
      position: relative;
      opacity: 0;
      margin: auto;
      padding: 0;
    }

    #tab-br-1:checked + label {
      color: #2282f0;
    }

    #tab-br-2:checked + label {
      color: #51a14c;
    }

    #tab-br-3:checked + label {
      color: #b7a124;
    }

    #tab-br-4:checked + label {
      color: #ffadfa;
    }
  `
}
customElements.define('form-pagination', FormPagination)
