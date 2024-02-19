import { LitElement, html, css } from 'lit'

import Logo from '/vite.svg'

export class Invoice01 extends LitElement {

  static get properties () {
    return {

      // TODO Cantidad de los productos
      cantidad1: Number,

      cantidad2: Number,

      cantidad3: Number,

      cantidad4: Number,

      cantidad5: Number,

      cantidad6: Number,

      // TODO Precio Individual de los productos
      precio1: Number,

      precio2: Number,

      precio3: Number,

      precio4: Number,

      precio5: Number,

      precio6: Number,



      // TODO Total Individual de los productos
      total1: Number,

      total2: Number,

      total3: Number,

      total4: Number,

      total5: Number,

      total6: Number,

      // TODO Valor Iva
      iva: Number,

      valorIva: Number,

      // TODO Valor Descuento
      descuento: Number,

      // TODO Totales
      subTotal: Number,

      SubTotalConIva: Number,

      totalFinal: Number
    }
  }

  constructor () {
    super()

    // TODO Cantidad de los productos iniciados en 0
    this.cantidad1 = 5
    this.cantidad2 = 5
    this.cantidad3 = 2
    this.cantidad4 = 0
    this.cantidad5 = 0
    this.cantidad6 = 0

    // TODO Precio Individual de los productos iniciados en 0
    this.valor1 = 40
    this.valor2 = 40
    this.valor3 = 5
    this.valor4 = 0
    this.valor5 = 0
    this.valor6 = 0

    // TODO Total Individual de los productos iniciados en 0
    this.total1 = this.cantidad1 * this.valor1
    this.total2 = this.cantidad2 * this.valor2
    this.total3 = this.cantidad3 * this.valor3
    this.total4 = this.cantidad4 * this.valor4
    this.total5 = this.cantidad5 * this.valor5
    this.total6 = this.cantidad6 * this.valor6


    // TODO Descuentos y SubTotal los inializamos en 0
    this.descuento = 0
    this.subTotal = this.total1 + this.total2 + this.total3 + this.total4 + this.total5 + this.total6
    console.log('subTotal', this.subTotal)

    // TODO Iva lo inicializamos en 0
    this.iva = 19
    this.valorIva = this.iva / 100
    console.log('valorIva', this.valorIva)

    this.SubTotalConIva = this.SubTotal
    console.log('SubTotalConIva', this.SubTotal)

    // TODO Total
    this.totalFinal = this.subTotal + this.valorIva - this.descuento
    console.log('sd', this.totalFinal)
  }

  render() {
    return html`
      <form class="facture">
        <div class="facture__header">
          <div class="facture__header-container">
            <div class="facture__header-container-left">
              <div class="facture__header-container-left-title">
                <h2 class="facture__header-container-left-title-title">Factura</h2>
              </div>

              <div class="facture__header-container-left-facture">
                <div>
                  <label class="facture__header-container-left-facture-label">
                    Numero de Factura:
                  </label>
                </div>
                <div class="facture__header-container-left-facture-input">
                  <input type="text" placeholder="factura No xxxxxxx"/>
                </div>
              </div>

              <div class="facture__header-container-left-date">
                <div>
                  <label class="facture__header-container-left-date-label">
                    Fecha:
                  </label>
                </div>
                <div class="facture__header-container-left-date-input">
                  <input type="datetime-local" />
                </div>
              </div>
            </div>

            <div class="facture__header-container-right">
              <div class="facture__header-container-right-top">
                <div class="facture__header-container-right-top-logo">
                  <img class="facture__header-container-right-top-logo-logo" src=${Logo} />
                </div>
              </div>

              <div class="facture__header-container-right-bottom">
                <a>
                  <p class="facture__header-container-right-bottom-text"> mail: <b>hola@gmail.com</b></p>
                </a>

                <a>
                  <p class="facture__header-container-right-bottom-text"> Cel: <b>12354765</b></p>
                </a>

                <a>
                  <p class="facture__header-container-right-bottom-text"> dirreccion: <b>cra 3 #34-54</b></p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="facture__body">
          <div class="facture__body-container">
            <div class="facture__body-container-client">
              <div class="facture__body-container-client-label">
                <label>Cliente:</label>
              </div>
              <div class="facture__body-container-client-input">
                <input class="facture__body-container-client-input-input" type="text" placeholder="Cliente" />
              </div>
            </div>

            <div class="facture__body-container-client">
              <div class="facture__body-container-client-label">
                <label>Fecha de Entrega:</label>
              </div>
              <div  class="facture__body-container-client-input">
                <input class="facture__body-container-client-input-date" type="date" placeholder="Fecha de Entrega" />
              </div>
            </div>

            <div class="facture__body-container-client">
              <div class="facture__body-container-client-label">
                <label>dirreccion:</label>
              </div>
              <div  class="facture__body-container-client-input">
                <input class="facture__body-container-client-input-input" type="text" placeholder="dirreccion" />
              </div>
            </div>

            <div class="facture__body-container-client">
              <div class="facture__body-container-client-label">
                <label>Metodo de Pago:</label>
              </div>
              <div  class="facture__body-container-client-input">
                <input class="facture__body-container-client-input-pay" type="text" placeholder="Metodo de Pago" />
              </div>
            </div>
          </div>
        </div>

        <div class="facture__footer">
          <div class="facture__footer-table">
            <table class="table">
              <thead class="table__header">
              <tr class="table__header-content">
                <th class="table__header-content-text">DESCRIPTION</th>
                <th class="table__header-content-text">CANTIDAD</th>
                <th class="table__header-content-text">PRECIO</th>
                <th class="table__header-content-text">TOTAL</th>
              </tr>
            </thead>

            <tbody class="table__body">
              <tr class="table__body-content">
                <td class="table__body-content-text">
                  <input class="table__body-content-text-product" type="text" placeholder="Producto"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-quantity" type="number" placeholder="Cantidad"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-price" type="number" placeholder="Precio"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-total" type="number" placeholder="Total"/>
                </td>
              </tr>
              
              <tr class="table__body-content">
                <td class="table__body-content-text">
                  <input class="table__body-content-text-product" type="text" placeholder="Producto"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-quantity" type="number" placeholder="Cantidad"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-price" type="number" placeholder="Precio"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-total" type="number" placeholder="Total"/>
                </td>
              </tr>

              <tr class="table__body-content">
                <td class="table__body-content-text">
                  <input class="table__body-content-text-product" type="text" placeholder="Producto"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-quantity" type="number" placeholder="Cantidad"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-price" type="number" placeholder="Precio"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-total" type="number" placeholder="Total"/>
                </td>
              </tr>

              <tr class="table__body-content">
                <td class="table__body-content-text">
                  <input class="table__body-content-text-product" type="text" placeholder="Producto"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-quantity" type="number" placeholder="Cantidad"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-price" type="number" placeholder="Precio"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-total" type="number" placeholder="Total"/>
                </td>
              </tr>

              <tr class="table__body-content">
                <td class="table__body-content-text">
                  <input class="table__body-content-text-product" type="text" placeholder="Producto"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-quantity" type="number" placeholder="Cantidad"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-price" type="number" placeholder="Precio"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-total" type="number" placeholder="Total"/>
                </td>
              </tr>

              <tr class="table__body-content">
                <td class="table__body-content-text">
                  <input class="table__body-content-text-product" type="text" placeholder="Producto"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-quantity" type="number" placeholder="Cantidad"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-price" type="number" placeholder="Precio"/>
                </td>
                <td class="table__body-content-text">
                <input class="table__body-content-text-total" type="number" placeholder="Total"/>
                </td>
              </tr>
            </tbody>
            </table>
          </div>


          <div class="facture__footer-container">
            <div class="facture__footer-container-top">
              <div class="facture__footer-container-top-value">
                <div class="facture__footer-container-top-value-total">
                  <p class="facture__footer-container-top-value-total-text">SubTotal:</p>
                </div>
                <div>
                  <input class="facture__footer-container-top-value-total-input" type="number" placeholder="Sub Total" readonly />
                </div>
              </div>

              <div class="facture__footer-container-top-value">
                <div class="facture__footer-container-top-value-total">
                  <p class="facture__footer-container-top-value-total-text">Iva:</p>
                </div>
                <div>
                  <input class="facture__footer-container-top-value-total-input" type="number" placeholder="Iva" readonly />
                </div>
              </div>

              <div class="facture__footer-container-top-value">
                <div class="facture__footer-container-top-value-total">
                  <p class="facture__footer-container-top-value-total-text">Total:</p>
                </div>
                <div>
                  <input class="facture__footer-container-top-value-total-input" type="number" placeholder="Total" readonly />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    `
  }

  static styles = css`
      :host {
        display: block;
        padding: 0;
        margin: 0;
      }

      input {
        padding: 0.438rem;
        border: 0.063rem solid #ccc;
        border-radius: 0.313rem;
        outline: none;
        color: #333;
        background-color: #f7f7f7;
        box-shadow: 0 0 0.313rem #ccc;
      }

      .facture {
        width: 70rem;
        margin: 3rem;
        border: .21rem solid turquoise;
        border-radius: .22rem;
        background-color: paleturquoise;
      }

      .facture__header-container {
        display: grid;
        grid-template-columns: repeat(2, auto);
        align-items: center;
        justify-content: space-around;
      }

      .facture__header-container-left {
        display: grid;
        justify-content: center;
        align-items: center;
        gap: 2rem;
      }

      .facture__header-container-left-facture {
        display: flex;
        align-items: center;
        gap: 0.4rem;
      }

      .facture__header-container-left-date {
        display: flex;
        align-items: center;
        gap: 0.4rem;
      }

      .facture__header-container-right {
        margin-top: 2rem;
        display: grid;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      .facture__header-container-right-top-logo {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .facture__header-container-right-top-logo-logo {
        width: 10rem;
      }

      .facture__body {
        margin: 2rem 0;
        padding: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .facture__body-container {
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 2rem;
      }

      .facture__body-container-client {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      .facture__body-container-client-input-input {
        width: 25rem;
        margin-right: 8rem;
      }

      .facture__body-container-client-input-date {
        width: 10.5rem;
        text-align: center;
      }

      .facture__body-container-client-input-pay {
        text-align: right;
      }

      .facture__footer {
        padding: 2rem;
      }

      .facture__footer-table {
        display: grid;
        align-items: center;
        justify-content: center;
      }

      .table__body-content-text-product {
        width: 25rem;
      }

      .table__body-content-text-quantity {
        text-align: right;
      }

      .table__body-content-text-price {
        text-align: right;
      }

      .table__body-content-text-total {
        text-align: right;
      }

      .facture__footer-container {
        display: grid;
        justify-content: end;
      }

      .facture__footer-container-top {
        display: grid;
        justify-content: center;
      }

      .facture__footer-container-top-value {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        margin-right: 2.5rem;
        gap: 10rem;
      }

      .facture__footer-container-top-value-total-text {
        margin: .5rem 0;
        font-size: 1.5rem;
        font-weight: 400;
      }

      .facture__footer-container-top-value-total-input {
        margin: .5rem 0;
        text-align: right;
      }

      svg {
        width: 1.2rem;
        fill: #000000;
      }

    `
}
customElements.define('invoice-01', Invoice01)
