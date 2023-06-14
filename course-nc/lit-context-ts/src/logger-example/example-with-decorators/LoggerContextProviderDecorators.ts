import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { provide } from '@lit-labs/context';

// Context
import { Logger, type ILogger,  loggerContext, contextLogger } from '../../../context/context-logger/logger-context.js';

@customElement('my-app')
export class MyApp extends LitElement {
  @provide({ context: loggerContext })
  @property({ attribute: false })
  public logger: Logger = {
    log: msg => {
      console.log(`[my-app] ${msg}`);
    },
  };

  @provide({ context: contextLogger })
  @property({attribute: false})
  public logger2: ILogger;

  // constructor() {
  //   super()
  //   this.logger2.stateGlobalLogger = 'Holita'
  // }

  render() {
    // this.logger2 = 'Holita'
    return html` 
      ${this.logger2.stateGlobalLogger}
    `;
  }
}
