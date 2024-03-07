
import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { provide } from '@lit/context'
import { contextLogger1, TypeLogger1, contextLogger2, TypeLogger2, contextLogger3, TypeLogger3 } from './logger-context'


@customElement('logger-provider')
export class LoggerProvider extends LitElement {


  @provide({ context: contextLogger1 })
  @property({ attribute: false })
  public propLogger1: TypeLogger1

  @provide({ context: contextLogger2 })
  @property({ attribute: true })
  public propLogger2: TypeLogger2

  @provide({context: contextLogger3})
  @property({attribute: false})
  public propLogger3: TypeLogger3 = {
      log: (msg) => {
        console.log(`[logger-provider] ${msg}`)
      }
    }


  @provide({ context: contextLogger1 })
  @state()
  private stateLogger1: TypeLogger1

  constructor() {
    super()

    this.propLogger1 = 'Marco'
    this.propLogger2 = ''
    this.propLogger3.log('Peluche')

    this.stateLogger1 = 'Amor'
  }


  protected render() {
    return html`
      <div>
        <h3>Logger Provider</h3>
        <p>PropLogger1:  <code>${this.propLogger1}</code></p>
        <p>PropLogger2:  <code>${this.propLogger2}</code></p>
        <p>PropLogger3:  <code>${this.propLogger3}</code></p>

        <p>stateLogger1:  <code>${this.stateLogger1}</code></p>
        <slot></slot>
      </div>
      `
  }
}
