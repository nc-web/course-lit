
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { provide } from '@lit/context'
import { contextLogger1, TypeLogger1, contextLogger2, TypeLogger2, contextLogger3, TypeLogger3 } from './logger-context'


@customElement('logger-provider')
export class LoggerProvider extends LitElement {


  @provide({ context: contextLogger1 })
  @property({ attribute: false })
    propLogger11: TypeLogger1

  @provide({ context: contextLogger2 })
  @property({ attribute: false })
    propLogger2: TypeLogger2

    @provide({context: contextLogger3})
    @property({attribute: false})
  public propLogger3: TypeLogger3 = {
        log: (msg) => {
          console.log(`[logger-provider] ${msg}`)
        }
      }

    constructor() {
      super()

      this.propLogger11 = 'Marco'
      this.propLogger2 = 'Mariana'
      this.propLogger3.log('Peluche')
    }


    protected render() {
      return html`
      <div>
        <h3>Logger Provider <code>${this.propLogger11}</code></h3>
        <slot></slot>
      </div>
      `
    }
}
