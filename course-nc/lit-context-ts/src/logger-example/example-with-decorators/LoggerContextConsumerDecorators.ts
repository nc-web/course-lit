
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { consume } from '@lit-labs/context';

// Context
import { type Logger, loggerContext, contextLogger, ILogger } from '../../../context/context-logger/logger-context.js';

@customElement('logger-context-consumer-decorators')
export class MyElement extends LitElement {
  @consume({ context: loggerContext, subscribe: true })
  @property({ attribute: false })
  public logger?: Logger;

  @consume({ context: contextLogger, subscribe: true })
  @property({ attribute: false })
  public logger2?: ILogger

  private doThing() {
    this.logger?.log('a thing was done');
    // this.logger2?.stateGlobalLogger('a thing was done');
  }

  render() {
    // this.logger2 = 'State Global send'
    return`
      ${this.logger2?.stateGlobalLogger}
    `
  }

}
