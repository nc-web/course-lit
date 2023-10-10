import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { provide } from '@lit-labs/context';

// Context
import {
  Logger,
  ILogger,
  loggerContext,
  contextLogger,
} from '../../../context/context-logger/logger-context.js';

@customElement('my-app')
export class MyApp extends LitElement {
  // @property({ attribute: false })
  // propState1: ILogger = {
  //   stateGlobalLogger: 'Pelu'
  // };

  @provide({ context: loggerContext })
  @property({ attribute: false })
  public logger: Logger = {
    log: msg => {
      console.log(`[my-app] ${msg}`);
    },
  };

  @provide({ context: contextLogger })
  @property({ attribute: false })
  public logger2: ILogger = {
    stateGlobalLogger: 'Family',
    funLogger(): string {
      return `Provider value: ${this.stateGlobalLogger}`;
    },
  };

  // constructor() {
  //   super()
  //   this.logger2.stateGlobalLogger = 'Holita sdfs'
  // }

  render() {
    // this.logger2 = 'Holita'
    return html` ${this.logger2.funLogger()} `;
  }
}
