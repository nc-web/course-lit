
import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { consume } from '@lit/context'

// Logger Context
import { contextLogger1, TypeLogger1, contextLogger2, TypeLogger2, contextLogger3, TypeLogger3 } from './logger-context'

@customElement('logger-consumer')
export class LoggerConsumer extends LitElement {

  @consume({context: contextLogger1,
    subscribe: true})
    logger1 = ''

  @consume({context: contextLogger1,
    subscribe: true})
  @state()
  private stateLogger1?: TypeLogger1

  @consume({context: contextLogger1,
    subscribe: true})
  @property({attribute: false})
  public propLogger1?: TypeLogger1

  @consume({context: contextLogger2,
    subscribe: true})
    logger2 = ''

  @consume({context: contextLogger3,
    subscribe: true})
  @property({attribute: false})
  public propLogger3?: TypeLogger3


  render() {
    return html`
            <div>
                <h4>Logger Consumer</h4>
                <p>Variable 1: ${this.logger1}</p>
                <p>State 1: ${this.stateLogger1}</p>
                <p>Prop 1: ${this.propLogger1}</p>
                <p>Variable 2: ${this.logger2}</p>
                <p>Prop 3: ${this.propLogger3}</p>
                <br/>
                
            </div>
        `
  }

}
