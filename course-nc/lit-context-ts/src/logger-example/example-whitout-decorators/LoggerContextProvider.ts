import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ContextProvider } from '@lit-labs/context';
import { loggerContext, Logger, contextLogger, interfaceLogger2 } from '../../../context/context-logger/logger-context.js';

@customElement('logger-context-provider')
export class LoggerContextProvider extends LitElement {
  // create a provider controller and a default logger
  private provider = new ContextProvider(this, loggerContext, {
    log: msg => {
      console.log(`[logger-context-provider] ${msg}`);
    },
  });
  

  protected render() {
    return html`
      <h4>Context Provider whitout decorators: ${loggerContext}</h4>
    `;
  }

  public setLogger(newLogger: Logger) {
    // update the provider with a new logger value
    this.provider.setValue(newLogger);
  }
}
