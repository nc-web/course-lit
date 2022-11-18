
import { html, css, LitElement } from 'lit'

export class Calculator01 extends LitElement {
  static properties = {
    state01: { type: Number }
  }

  constructor () {
    super()
    this.state01 = 0
  }

  render () {
    return html`
      <article class="calc">
        <div class="calc__display">
          <div class="calc__display-top">
            <h1>0</h1>
          </div>
          <div class="calc__display-bottom">
            <h4>0</h4>
          </div>
        </div>

        <div class="calc__b">
          <button name='' class="calc__b-button-ac">AC</button>
          <button name='' class="calc__b-button-s">+/-</button>
          <button name='' class="calc__b-button-s">%</button>
          <button name='' class="calc__b-button-s">/</button>

          <button name='' class="calc__b-button-num">7</button>
          <button name='' class="calc__b-button-num">8</button>
          <button name='' class="calc__b-button-num">9</button>
          <button name='' class="calc__b-button-s">x</button>

          <button name='' class="calc__b-button-num">4</button>
          <button name='' class="calc__b-button-num">5</button>
          <button name='' class="calc__b-button-num">6</button>
          <button name='' class="calc__b-button-s">-</button>

          <button name='' class="calc__b-button-num">1</button>
          <button name='' class="calc__b-button-num">2</button>
          <button name='' class="calc__b-button-num">3</button>
          <button name='' class="calc__b-button-s">+</button>
        </div>
        <div class="calc__b2">
          <div>
            <button name='' class="calc__b-button-num">0</button>
            <button name='' class="calc__b-button-num">.</button>
          </div>
          <div>
            <button name='' class="calc__b-button-equal">=</button>
          </div>
        </div>
      </article>
    `
  }

  static styles = css`
        :host {
            display: inline-block;
            margin: 0;
            padding: 0;
        }

        .calc {
          padding: 1rem 1.5rem 1.5rem 1.5rem;
          background-color: #616161;
          border-radius: .5rem;
          box-shadow: 4px 3px 6px 1px rgba(0, 0, 0, 0.5);
        }

        .calc__display {
          width: 17.5rem;
          padding: .1rem 1rem;
          background-color: #9E9E9E;
          margin: 1rem .5rem 2rem .5rem;
          border-radius: .5rem;
        }

        .calc__display-top {
          font-size: 36px;
          text-align: right;
          color: #F5F5F5;
        }

        .calc__display-bottom {
          text-align: right;
          font-size: 24px;
          color: #FFB74D;
        }

        .calc__b {
          display: grid;
          grid-template-columns: repeat(4, auto);
          gap: .8rem;
          justify-content: center;
        }

        .calc__b2 {
          display: grid;
          grid-template-columns: repeat(2, auto);
          gap: 1.3rem;
          margin-top: 1.2rem;
          justify-content: center;
        }

        .calc__b-button-ac {
          width: 3.5rem;
          height: 3.5rem;
          font-size: 20px;
          cursor: pointer;
          border-radius: 50%;
          border: none;
          color: #F57C00;
          background-color: #EEEEEE;
          transition: .2s;
        }

        .calc__b-button-ac:hover {
          background-color: #757575;
        }

        .calc__b-button-num {
          width: 3.5rem;
          height: 3.5rem;
          font-size: 20px;
          cursor: pointer;
          border-radius: 50%;
          border: none;
          color: #E0E0E0;
          background-color: #616161;
          transition: .2s;
        }

        .calc__b-button-num:hover {
          background-color: #757575;
        }

        .calc__b-button-s {
          width: 3.5rem;
          height: 3.5rem;
          font-size: 20px;
          cursor: pointer;
          border-radius: 50%;
          border: none;
          color: #424242;
          background-color: #F57C00;
          transition: .2s;
          
        }

        .calc__b-button-s:hover {
          background-color: #FFA726;
        }

        .calc__b-button-equal {
          width: 7.5rem;
          height: 3rem;
          font-size: 20px;
          cursor: pointer;
          border-radius: .3rem;
          border: none;
          background-color: #F57C00;
          transition: .2s;
        }

        .calc__b-button-equal:hover {
          background-color: #FFA726;
        }
    `
}

customElements.define('calculator-01', Calculator01)
