
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { provide } from '@lit-labs/context'

// Context
import { type Logger, loggerContext } from '../context/logger-context.js'

@customElement('my-app')
export class MyApp extends LitElement {

  @provide({context: loggerContext})
  logger = new Logger();

  render() {
    return html`...`;
  }

}
