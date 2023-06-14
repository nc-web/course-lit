import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { provide } from '@lit-labs/context';

// Context
import { Logger, ILogger,  loggerContext, contextLogger } from '../../../context/context-logger/logger-context.js';

@customElement('my-app')
export class MyApp extends LitElement {
  @provide({ context: loggerContext })
  @property({ attribute: false })
  public logger: Logger = {
    log: msg => {
      console.table(`[my-app] ${msg}`);
    },
  };

  @provide({ context: contextLogger })
  @property()
  public logger2: String = ''

  render() {
    this.logger2 = 'Holita'
    return html` 
      ${this.logger2}
    `;
  }
}
