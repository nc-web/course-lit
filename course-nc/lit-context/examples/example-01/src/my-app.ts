
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { provide } from '@lit/context'
import { loggerContext, TypeLogger, ILogger } from './context/logger/logger-context'


@customElement('my-app')
export class MyApp extends LitElement {
  @provide({context: loggerContext})
  @property({attribute: false})
  public logger: ILogger = {
      log: (value) => {
        console.log(`Daniela Giraldo', ${value}`)
      }
    }

  protected render() {
    return html`<p>Provider</p>`
  }
}
