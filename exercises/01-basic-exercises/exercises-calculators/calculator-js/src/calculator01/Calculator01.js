
import { html, css, LitElement } from 'lit'

export class Calculator01 extends LitElement {
  static properties = {
    stateCurrent: { type: Number },
    stateDisplayResult: { type: Number },
    stateDisplayCalc: { type: Number }
  }

  constructor () {
    super()
    this.stateCurrent = ''
    this.stateDisplayCalc = ''
    this.stateDisplayResult = 0
    this.stateInitEnd = false
  }

  render () {
    return html`
      <article class="calc">
        <div class="calc__display">
            <h4 class="calc__display-bottom">${this.stateDisplayCalc}</h4>
            <h1 class="calc__display-top">${this.stateDisplayResult}</h1>
        </div>

        <div class="calc__b">
          <button name='AC' class="calc__b-button-ac" @click=${this.handleClear}>AC</button>
          <button name='Back' class="calc__b-button-back" @click=${this.handleBack}>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12" />
            </svg>
          </button>
          <button name='%' class="calc__b-button-s" @click=${this.handleButton}>%</button>
          <button name='/' class="calc__b-button-s" @click=${this.handleButton}>/</button>

          <button name='7' class="calc__b-button-num" @click=${this.handleButton}>7</button>
          <button name='8' class="calc__b-button-num" @click=${this.handleButton}>8</button>
          <button name='9' class="calc__b-button-num" @click=${this.handleButton}>9</button>
          <button name='*' class="calc__b-button-s" @click=${this.handleButton}>x</button>

          <button name='4' class="calc__b-button-num" @click=${this.handleButton}>4</button>
          <button name='5' class="calc__b-button-num" @click=${this.handleButton}>5</button>
          <button name='6' class="calc__b-button-num" @click=${this.handleButton}>6</button>
          <button name='-' class="calc__b-button-s" @click=${this.handleButton}>-</button>

          <button name='1' class="calc__b-button-num" @click=${this.handleButton} >1</button>
          <button name='2' class="calc__b-button-num" @click=${this.handleButton}>2</button>
          <button name='3' class="calc__b-button-num" @click=${this.handleButton}>3</button>
          <button name='+' class="calc__b-button-s" @click=${this.handleButton} >+</button>
        </div>
        <div class="calc__b2">
          <div>
            <button name='0' class="calc__b-button-num" @click=${this.handleButton}>0</button>
            <button name='.' class="calc__b-button-num" @click=${this.handleButton}>.</button>
          </div>
          <div>
            <button name='' class="calc__b-button-equal" @click=${this.handleEqual}>=</button>
          </div>
        </div>
      </article>
    `
  }

  handleButton (e) {
    e.preventDefault()
    if (this.stateInitEnd === false) {
      // this.handleBack(e)
      this.stateCurrent += e.target.name
      this.stateDisplayCalc = this.stateCurrent
    } else {
      this.handleClear(e)
    }
    
  }

  handleClear (e) {
    e.preventDefault()
    this.stateCurrent = ''
    this.stateDisplayCalc = ''
    this.stateDisplayResult = 0
    this.stateInitEnd = false

    this.stateCurrent += e.target.name
    this.stateDisplayCalc = this.stateCurrent
  }

  handleBack (e) {
    e.preventDefault()
    this.stateCurrent = this.stateCurrent.slice(0, this.stateCurrent.length - 1)
    this.stateDisplayCalc = this.stateCurrent
  }

  handleEqual (e) {
    e.preventDefault()
    const temp = eval(this.stateCurrent.toString())
    console.log('Valor: ', temp)
    // this.stateDisplayResult = Function(temp)
    // this.stateCurrent = 0

    // this.stateDisplayCalc = ''
    this.stateDisplayResult = temp
    this.stateInitEnd = true
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
          background-color: #757575;
          margin: 1rem .5rem 2rem .5rem;
          border-radius: .5rem;
        }

        .calc__display-top {
          font-size: 45px;
          text-align: right;
          color: #F5F5F5;
        }

        .calc__display-bottom {
          text-align: right;
          font-size: 20px;
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

        .calc__b-button-back {
          padding-top: .3rem;
          padding-left: .2rem;
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

        .calc__b-button-back:hover {
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
