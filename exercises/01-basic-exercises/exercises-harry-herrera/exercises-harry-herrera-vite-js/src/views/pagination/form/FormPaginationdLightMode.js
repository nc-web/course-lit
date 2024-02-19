import { LitElement, html, css } from 'lit'

export class FormPaginationLightMode extends LitElement {
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
            <div class="title">
              Data Client & Project
              <div class="line"></div>
            </div>
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
                  <label for="tab-tl-1" class="tab tab-primary">Client</label>
                  <input
                    id="tab-tl-2"
                    type="radio"
                    class="tab-tl tab"
                    name="tab-tl"
                  />
                  <label for="tab-tl-2" class="tab tab-secondary"
                    >Proyect (1)</label
                  >
                  <input
                    id="tab-tl-3"
                    type="radio"
                    class="tab-tl tab"
                    name="tab-tl"
                  />
                  <label for="tab-tl-3" class="tab tab-terceary"
                    >Proyect (2)</label
                  >
                  <input
                    id="tab-tl-4"
                    type="radio"
                    class="tab-tl tab"
                    name="tab-tl"
                  />
                  <label for="tab-tl-4" class="tab tab-fourty"
                    >Proyect (3)</label
                  >
                  <input
                    id="tab-tl-5"
                    type="radio"
                    class="tab-tl tab"
                    name="tab-tl"
                  />
                  <label for="tab-tl-5" class="tab tab-fivety"
                    >Proyect (4)</label
                  >
                  <section class="content-tl">
                    <div class="item-tl" id="content-tl-1">
                      <h2 class="tab-title tab-primary">Data Client</h2>
                      <div class="item-tl-input">
                        <div class="item-tl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Document Client:
                          </label>
                        </div>

                        <div>
                          <div>
                            <select id="" name="" required>
                              <option>Seleccionar Identificacion</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="item-tl-input">
                        <div class="item-tl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Client Name:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input type="text" placeholder="Client Name" />
                          </div>
                        </div>
                      </div>

                      <div class="item-tl-input">
                        <div class="item-tl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Client Surname:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input type="text" placeholder="Client Surname" />
                          </div>
                        </div>
                      </div>

                      <div class="item-tl-input">
                        <div class="item-tl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            CellPhone Client:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input type="text" placeholder="CellPhone Client" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="item-tl" id="content-tl-2">
                      <h2 class="tab-title tab-secondary">Proyect Info (1)</h2>
                      <div class="item-tl-input">
                        <div class="item-tl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Proyect Name:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input type="text" placeholder="Proyect name" />
                          </div>
                        </div>
                      </div>

                      <div class="item-tl-input">
                        <div class="item-tl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Project Objective:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="5"
                              cols="40"
                              placeholder="What does the project work to achieve?"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item-tl" id="content-tl-3">
                      <h2 class="tab-title tab-terceary">Proyect Info (2)</h2>
                      <div class="item-tl-input">
                        <div class="item-tl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Business Case:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="4"
                              cols="40"
                              placeholder="What is the problem being solved? Who/what is impacted? What are the business benefits?"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-tl-input">
                        <div class="item-tl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Risks:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="4"
                              cols="40"
                              placeholder="What are the identified or considered risks?"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item-tl" id="content-tl-4">
                      <h2 class="tab-title tab-fourty">Proyect Info (3)</h2>
                      <div class="item-tl-input">
                        <div class="item-tl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Out Scope of Proyect:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="7"
                              cols="40"
                              placeholder="What activities, items, and capabilities are out of scope for the project?"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-tl-input">
                        <div class="item-tl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Technical Desing Diagram:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input
                              type="text"
                              placeholder="The diagram should illustrate all required new and existing technical resources."
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="item-tl" id="content-tl-5">
                      <h2 class="tab-title tab-fivety">Proyect Info (4)</h2>
                      <div class="item-tl-input">
                        <div class="item-tl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Connection y Location:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="5"
                              cols="40"
                              placeholder="Designate how new infrastructure will connect with existing infrastructure and where it will be located."
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-tl-input">
                        <div class="item-tl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Server & Storage & Network:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="5"
                              cols="40"
                              placeholder="Except in the case tech issues a expected  require physical resources, assume all are virtual."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div class="form__container-tr">
            <div class="title">
              Technical Specifications of the servers
              <div class="line"></div>
            </div>
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
                    >App Server</label
                  >
                  <input
                    id="tab-tr-2"
                    type="radio"
                    class="tab-tr tab"
                    name="tab-tr"
                  />
                  <label for="tab-tr-2" class="tab tab-tr-secondary"
                    >File Server</label
                  >
                  <input
                    id="tab-tr-3"
                    type="radio"
                    class="tab-tr tab"
                    name="tab-tr"
                  />
                  <label for="tab-tr-3" class="tab tab-tr-terceary"
                    >Web Server</label
                  >
                  <input
                    id="tab-tr-4"
                    type="radio"
                    class="tab-tr tab"
                    name="tab-tr"
                  />
                  <label for="tab-tr-4" class="tab tab-tr-fourty"
                    >DB Servers</label
                  >
                  <section class="content-tr">
                    <div class="item-tr" id="content-tr-1">
                      <h2 class="tab-title tab-primary">Application Server</h2>
                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Operating System:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input type="text" placeholder="Operating System" />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Application Memory:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input
                              type="text"
                              placeholder="Application Memory"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Application CPU:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input type="text" placeholder="Application CPU" />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Functional Characteristics:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input
                              type="text"
                              placeholder="Functional Characteristics"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Expected Transaction Volume:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Expected in Application Transaction Volume"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item-tr" id="content-tr-2">
                      <h2 class="tab-title tab-secondary">File Server</h2>
                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Operating System:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input type="text" placeholder="Operating System" />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Application Memory:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input
                              type="text"
                              placeholder="Application Memory"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Application CPU:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input type="text" placeholder="Application CPU" />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Functional Characteristics:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input
                              type="text"
                              placeholder="Functional Characteristics"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Expected Transaction Volume:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Expected in File Transaction Volume"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item-tr" id="content-tr-3">
                      <h2 class="tab-title tab-terceary">Web Server</h2>
                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Operating System:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input type="text" placeholder="Operating System" />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Application Memory:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input
                              type="text"
                              placeholder="Application Memory"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Application CPU:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input type="text" placeholder="Application CPU" />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Functional Characteristics:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input
                              type="text"
                              placeholder="Functional Characteristics"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Expected Transaction Volume:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Expected in Web Transaction Volume"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item-tr" id="content-tr-4">
                      <h2 class="tab-title tab-fourty">Data Base Server</h2>
                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Operating System:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input type="text" placeholder="Operating System" />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Application Memory:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input
                              type="text"
                              placeholder="Application Memory"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Application CPU:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input type="text" placeholder="Application CPU" />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Functional Characteristics:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input
                              type="text"
                              placeholder="Functional Characteristics"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="item-tr-input">
                        <div class="item-tr-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Expected Transaction Volume:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Expected in Data Base Transaction Volume"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div class="form__container-bl">
            <div class="title">
              Requeriments
              <div class="line"></div>
            </div>
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
                  <label for="tab-bl-1" class="tab tab-primary">Server</label>
                  <input
                    id="tab-bl-2"
                    type="radio"
                    class="tab-bl tab"
                    name="tab-bl"
                  />
                  <label for="tab-bl-2" class="tab tab-secondary">Access</label>
                  <input
                    id="tab-bl-3"
                    type="radio"
                    class="tab-bl tab"
                    name="tab-bl"
                  />
                  <label for="tab-bl-3" class="tab tab-terceary"
                    >Data Base</label
                  >
                  <input
                    id="tab-bl-4"
                    type="radio"
                    class="tab-bl tab"
                    name="tab-bl"
                  />
                  <label for="tab-bl-4" class="tab tab-fourty">Resources</label>
                  <section class="content-bl">
                    <div class="item-bl" id="content-bl-1">
                      <h2 class="tab-title tab-primary">Server Request</h2>
                      <div class="item-bl-input">
                        <div class="item-bl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Server Requets:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="4"
                              cols="40"
                              placeholder="Server Requets"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-bl-input">
                        <div class="item-bl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            File Request:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="4"
                              cols="40"
                              placeholder="File Request"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-bl-input">
                        <div class="item-bl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Data Base Requets:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="4"
                              cols="40"
                              placeholder="Data Base Requets"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item-bl" id="content-bl-2">
                      <h2 class="tab-title tab-secondary">
                        Access Requeriments
                      </h2>
                      <div class="item-bl-input">
                        <div class="item-bl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Number Access Requirement:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input
                              type="text"
                              placeholder="Number Access Requirement"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="item-bl-input">
                        <div class="item-bl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Type Access Requirement:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="5"
                              cols="40"
                              placeholder="Type Access Requirement (Developers, Admin etc)"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item-bl" id="content-bl-3">
                      <h2 class="tab-title tab-terceary">Data Base Request</h2>
                      <div class="item-bl-input">
                        <div class="item-bl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Data Base Requets:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="6"
                              cols="40"
                              placeholder="Data Base Requets"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item-bl" id="content-bl-4">
                      <h2 class="tab-title tab-fourty">
                        Resources Requeriments
                      </h2>
                      <div class="item-bl-input">
                        <div class="item-bl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Staff Resources:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Staff Resources"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-bl-input">
                        <div class="item-bl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Staff Dependencies:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Staff Dependencies"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-bl-input">
                        <div class="item-bl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            technical Dependencies:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="technical Dependencies"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-bl-input">
                        <div class="item-bl-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Other Dependencies:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Other Dependencies"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div class="form__container-br">
            <div class="title">
              Assumptions
              <div class="line"></div>
            </div>
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
                  <label for="tab-br-1" class="tab tab-primary">Team</label>
                  <input
                    id="tab-br-2"
                    type="radio"
                    class="tab-br tab"
                    name="tab-br"
                  />
                  <label for="tab-br-2" class="tab tab-secondary"
                    >Issues & Concers
                  </label>
                  <input
                    id="tab-br-3"
                    type="radio"
                    class="tab-br tab"
                    name="tab-br"
                  />
                  <label for="tab-br-3" class="tab tab-terceary">Costs</label>
                  <section class="content-br">
                    <div class="item-br" id="content-br-1">
                      <h2 class="tab-title tab-primary">Assumptions Team</h2>
                      <div class="item-br-input">
                        <div class="item-br-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Assumptions One:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Assumptions One"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-br-input">
                        <div class="item-br-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Assumptions Two:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Assumptions Two"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-br-input">
                        <div class="item-br-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Assumptions Three:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Assumptions Three"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-br-input">
                        <div class="item-br-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Assumptions Four:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Assumptions Four"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item-br" id="content-br-2">
                      <h2 class="tab-title tab-secondary">Issues & Concers</h2>
                      <div class="item-br-input">
                        <div class="item-br-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Issues & Concers One:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Issues & Concers One"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-br-input">
                        <div class="item-br-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Issues & Concers Two:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Issues & Concers Two"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-br-input">
                        <div class="item-br-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Issues & Concers Three:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Issues & Concers Three"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-br-input">
                        <div class="item-br-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Issues & Concers Four:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="3"
                              cols="40"
                              placeholder="Issues & Concers Four"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item-br" id="content-br-3">
                      <h2 class="tab-title tab-terceary">Costs</h2>
                      <div class="item-br-input">
                        <div class="item-br-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Cost Project:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input type="text" placeholder="Cost Project" />
                          </div>
                        </div>
                      </div>

                      <div class="item-br-input">
                        <div class="item-br-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Cost Project Update:
                          </label>
                        </div>

                        <div>
                          <div>
                            <textarea
                              rows="5"
                              cols="40"
                              placeholder="Cost Project Update"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="item-br-input">
                        <div class="item-br-input-container">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>file-document-edit</title>
                            <path
                              d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                            />
                          </svg>
                          <label class="item-tl-input-container-label" for="">
                            Cost Totally Project Diagram:
                          </label>
                        </div>

                        <div>
                          <div>
                            <input
                              type="text"
                              placeholder="Link or File Cost Totally Project Diagram"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
            <table class="table">
          <caption class="table__container">
            <div class="table__container-text">
              <svg
                class="table__container-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>table</title>
                <path
                  d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                />
              </svg>
              <h5 class="table__container-title">DOCUMENT TRACKING</h5>
            </div>
          </caption>

          <thead class="table__header">
            <tr class="table__header-content">
              <th class="table__header-content-text">VERSION</th>
              <th class="table__header-content-text">EDITS COMPLETED BY</th>
              <th class="table__header-content-text">DATE</th>
              <th class="table__header-content-text">DESCRIPTION OF EDIT</th>
            </tr>
          </thead>

          <tbody class="table__body">
            <tr class="table__body-content">
              <td class="table__body-content-text">
                <input class="" type="text" placeholder="version del odcumento"/>
              </td>
              <td class="table__body-content-text">
              <input class="" type="text" placeholder="version del odcumento"/>
              </td>
              <td class="table__body-content-text">
              <input class="" type="date"/>
              </td>
              <td class="table__body-content-text">
                <textarea rows="3" cols="30"></textarea>
              </td>
            </tr>
            <tr>
              <td class="table__body-content-text">
                <small class="table__body-content-small">lorem</small>
              </td>
              <td class="table__body-content-text">
                <small class="table__body-content-small">predefined</small>
              </td>
              <td class="table__body-content-text">
                <small class="table__body-content-small">chunks</small>
              </td>
              <td class="table__body-content-text">
                <small class="table__body-content-small">Admin</small>
              </td>
            </tr>
            <tr>
              <td class="table__body-content-text">
                <small class="table__body-content-small">chunks</small>
              </td>
              <td class="table__body-content-text">
                <small class="table__body-content-small">when</small>
              </td>
              <td class="table__body-content-text">
                <small class="table__body-content-small">Ipsum</small>
              </td>
              <td class="table__body-content-text">
                <small class="table__body-content-small">Admin</small>
              </td>
            </tr>
          </tbody>

          <tfoot class="table__foot">
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <br />

            <tr class="table__foot-content">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
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
      background-color: #f5f5f5;
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

    .icon {
      width: 1.3rem;
    }

    .form__icon-tile-title {
      margin: 0.7rem 0;
      text-align: center;
      color: #424242;
    }

    .title {
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
      color: #5f5f5f;
      font-family: "Playfair Display SC";
    }

    .line {
      width: 50%;
      margin: 1.5rem auto 0 auto;
      height: 1px;
      background-color: #b0b0b0;
    }

    .form__container {
      display: grid;
      grid-template-columns: repeat(2, auto);
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
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
      max-width: 40.5rem;
      min-height: 8.75rem;
      min-width: 40.18rem;
      border-radius: 0.625rem;
      margin: 0 auto;
    }
    .form__container-tl-tab-card-tabs {
      text-align: left;
    }

    .content-tl .item-tl {
      visibility: hidden;
      position: absolute;
      padding: 0.625rem 1.25rem;
    }

    #tab-tl-1:checked ~ section #content-tl-1,
    #tab-tl-2:checked ~ section #content-tl-2,
    #tab-tl-3:checked ~ section #content-tl-3,
    #tab-tl-4:checked ~ section #content-tl-4,
    #tab-tl-5:checked ~ section #content-tl-5 {
      opacity: 1;
      visibility: visible;
    }

    .form__container-tl-tab-card-tabs .tab-tl + label {
      margin: 0.75rem -0.5rem;
      width: 15%;
      transition: all 0.3s;
      text-align: center;
      border: none;
      display: inline-flex;
      padding: 0.375rem 0.8rem;
      justify-content: flex-start;
      font-size: 1rem;
      background: #e7e7e7;
      margin-bottom: 0.5px;
      border-radius: 0.4rem 0.4rem 0 0;
      border-left: 1px solid #3b3d3f;
      font-family: "antique-olive";
      cursor: pointer;
    }

    .content-tl {
      text-align: left;
      line-height: 1.25rem;
      height: 18rem;
      border-radius: 0.3rem;
      padding: 1.25rem;
      z-index: 2;
      border-top: 1px solid #3b3d3f;
      position: relative;
    }

    .form__container-tl-tab-card .form__container-tl-tab-card-container {
      max-width: 37.5rem;
      min-height: 8.75rem;
      border-radius: 0.625rem;
      border: none;
      margin: 0 auto;
      z-index: 4;
      position: relative;
      background: #efefef;
      box-shadow: 0.3rem 0.6rem 0.7rem 0.3rem #d2d2d2;
    }

    .content-tl .item-tl-input {
      display: flex;
      letter-spacing: 0.75px;
      font-size: 1rem;
      color: #5a5a5a;
      line-height: 30px;
      margin-top: 0.8rem;
      font-family: "freight-display-pro";
      font-weight: 300;
    }

    .item-tl-input-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .item-tl-input-container-label {
      margin: 0 0.7rem;
      color: #757575;
    }

    h2.tab-title.tab-fivety,
    h2.tab-title.tab-secondary,
    h2.tab-title.tab-primary,
    h2.tab-title.tab-terceary,
    h2.tab-title.tab-fourty {
      display: inline-flex;
      color: #5a5a5a;
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
      color: #75e900;
    }

    #tab-tl-2:checked + label {
      color: #75e900;
    }

    #tab-tl-3:checked + label {
      color: #75e900;
    }

    #tab-tl-4:checked + label {
      color: #75e900;
    }

    #tab-tl-5:checked + label {
      color: #75e900;
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
      max-width: 40.5rem;
      min-height: 8.75rem;
      min-width: 40.18rem;
      border-radius: 0.625rem;
      margin: 0 auto;
    }
    .form__container-tr-tab-card-tabs {
      text-align: left;
    }

    .content-tr .item-tr {
      visibility: hidden;
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
      display: inline-flex;
      padding: 0.375rem 0.8rem;
      justify-content: flex-start;
      background: #e7e7e7;
      font-size: 1rem;
      margin-bottom: 0.5px;
      border-radius: 0.4rem 0.4rem 0 0;
      border-left: 1px solid #3b3d3f;
      font-family: "antique-olive";
      cursor: pointer;
    }

    .content-tr {
      text-align: left;
      line-height: 1.25rem;
      height: 18rem;
      border-radius: 0.3rem;
      padding: 1.25rem;
      z-index: 2;
      border-top: 1px solid #3b3d3f;
      position: relative;
    }

    .form__container-tr-tab-card .form__container-tr-tab-card-container {
      max-width: 37.5rem;
      min-height: 8.75rem;
      border-radius: 0.625rem;
      border: none;
      margin: 0 auto;
      z-index: 4;
      position: relative;
      background: #efefef;
      box-shadow: 0.3rem 0.6rem 0.7rem 0.3rem #d2d2d2;
    }

    .content-tr .item-tr-input {
      display: flex;
      letter-spacing: 0.75px;
      font-size: 1rem;
      color: #5a5a5a;
      line-height: 30px;
      margin-top: 0.8rem;
      font-family: "freight-display-pro";
      font-weight: 300;
    }

    .item-tr-input-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .item-tr-input-container-label {
      margin: 0 0.7rem;
      color: #757575;
    }

    h2.tab-title.tab-tr-fourty,
    h2.tab-title.tab-tr-secondary,
    h2.tab-title.tab-tr-primary,
    h2.tab-title.tab-tr-terceary {
      display: inline-flex;
      color: #5a5a5a;
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
      color: #75e900;
    }

    #tab-tr-2:checked + label {
      color: #75e900;
    }

    #tab-tr-3:checked + label {
      color: #75e900;
    }

    #tab-tr-4:checked + label {
      color: #75e900;
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
      max-width: 40.5rem;
      min-height: 8.75rem;
      min-width: 40.18rem;
      border-radius: 0.625rem;
      margin: 0 auto;
    }
    .form__container-bl-tab-card-tabs {
      text-align: left;
    }

    .content-bl .item-bl {
      visibility: hidden;
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
      display: inline-flex;
      padding: 0.375rem 0.8rem;
      justify-content: flex-start;
      background: #e7e7e7;
      font-size: 1rem;
      margin-bottom: 0.5px;
      border-radius: 0.4rem 0.4rem 0 0;
      border-left: 1px solid #3b3d3f;
      font-family: "antique-olive";
      cursor: pointer;
    }

    .content-bl {
      text-align: left;
      line-height: 1.25rem;
      height: 22rem;
      border-radius: 0.3rem;
      padding: 1.25rem;
      z-index: 2;
      border-top: 1px solid #3b3d3f;
      position: relative;
    }

    .form__container-bl-tab-card .form__container-bl-tab-card-container {
      max-width: 37.5rem;
      min-height: 8.75rem;
      border-radius: 0.625rem;
      border: none;
      margin: 0 auto;
      z-index: 4;
      position: relative;
      background: #efefef;
      box-shadow: 0.3rem 0.6rem 0.7rem 0.3rem #d2d2d2;
    }

    .content-bl .item-bl-input {
      display: flex;
      letter-spacing: 0.75px;
      font-size: 1rem;
      color: #5a5a5a;
      line-height: 30px;
      margin-top: 0.8rem;
      font-family: "freight-display-pro";
      font-weight: 300;
    }

    .item-bl-input-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .item-bl-input-container-label {
      margin: 0 0.7rem;
      color: #757575;
    }

    h2.tab-title.tab-bl-fourty,
    h2.tab-title.tab-bl-secondary,
    h2.tab-title.tab-bl-primary,
    h2.tab-title.tab-bl-terceary {
      display: inline-flex;
      color: #5a5a5a;
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
      color: #75e900;
    }

    #tab-bl-2:checked + label {
      color: #75e900;
    }

    #tab-bl-3:checked + label {
      color: #75e900;
    }

    #tab-bl-4:checked + label {
      color: #75e900;
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
      max-width: 40.5rem;
      min-height: 8.75rem;
      min-width: 40.18rem;
      border-radius: 0.625rem;
      margin: 0 auto;
    }
    .form__container-br-tab-card-tabs {
      text-align: left;
    }

    .content-br .item-br {
      visibility: hidden;
      position: absolute;
      padding: 0.625rem 1.25rem;
    }

    #tab-br-1:checked ~ section #content-br-1,
    #tab-br-2:checked ~ section #content-br-2,
    #tab-br-3:checked ~ section #content-br-3 {
      opacity: 1;
      visibility: visible;
    }

    .form__container-br-tab-card-tabs .tab-br + label {
      margin: 0.75rem -0.5rem;
      width: 18%;
      transition: all 0.3s;
      text-align: center;
      border: none;
      display: inline-flex;
      padding: 0.375rem 0.8rem;
      justify-content: flex-start;
      background: #e7e7e7;
      font-size: 1rem;
      margin-bottom: 0.5px;
      border-radius: 0.4rem 0.4rem 0 0;
      border-left: 1px solid #3b3d3f;
      font-family: "antique-olive";
      cursor: pointer;
    }

    .content-br {
      text-align: left;
      line-height: 1.25rem;
      height: 22rem;
      border-radius: 0.3rem;
      padding: 1.25rem;
      z-index: 2;
      border-top: 1px solid #3b3d3f;
      position: relative;
    }

    .form__container-br-tab-card .form__container-br-tab-card-container {
      max-width: 37.5rem;
      min-height: 8.75rem;
      border-radius: 0.625rem;
      border: none;
      margin: 0 auto;
      z-index: 4;
      position: relative;
      background: #efefef;
      box-shadow: 0.3rem 0.6rem 0.7rem 0.3rem #d2d2d2;
    }

    .content-br .item-br-input {
      display: flex;
      letter-spacing: 0.75px;
      font-size: 1rem;
      color: #5a5a5a;
      line-height: 30px;
      margin-top: 0.8rem;
      font-family: "freight-display-pro";
      font-weight: 300;
    }

    .item-br-input-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .item-br-input-container-label {
      margin: 0 0.7rem;
      color: #757575;
    }

    h2.tab-title.tab-tr-terceary h2.tab-title.tab-tr-secondary,
    h2.tab-title.tab-tr-primary {
      display: inline-flex;
      color: #5a5a5a;
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
      color: #75e900;
    }

    #tab-br-2:checked + label {
      color: #75e900;
    }

    #tab-br-3:checked + label {
      color: #75e900;
    }


    
    /* // --------------------------------------- TABLE CSS ---------------------------------- */

    .table {
      overflow-x: auto;
      white-space: nowrap;
      background-color: white;
      padding: 1rem;
      border-bottom-left-radius: 0.6rem;
      border-bottom-right-radius: 0.6rem;
    }

    .table__container {
      margin: 0 0 0.2rem 0;
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
    }

    .table__container-text {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .table__container-icon {
      fill: #616161;
      width: 1.3rem;
    }

    .table__container-title {
      padding: 0.5rem;
      color: #616161;
    }

    .table__header-content {
      background-color: #757575;
      color: #75e900;
    }

    .table__header-content-text {
      padding: 0.2rem 1rem;
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
    }

    tr:nth-child(even) {
      background-color: #cecece;
    }

    .table__body-content-text {
      text-align: center;
      padding: 0 0.5rem;
    }

    .table__body-content-small {
      color: #616161;
    }

    .table__body-content-text-button {
      display: grid;
      justify-content: center;
      padding: 0 0.5rem;
    }

    .table__foot-content {
      margin: 5.6rem 0;
    }

    .table__foot-content-text-td {
      text-align: center;
      padding: 0.2rem;
      border-bottom-left-radius: 0.3rem;
    }

    .table__foot-content-text1 {
      color: #ffffff;
    }

    .table__foot-content-text-td-1 {
      text-align: center;
      padding: 0.2rem;
      border-bottom-right-radius: 0.3rem;
    }

  `
}
customElements.define('form-pagination-light-mode', FormPaginationLightMode)
