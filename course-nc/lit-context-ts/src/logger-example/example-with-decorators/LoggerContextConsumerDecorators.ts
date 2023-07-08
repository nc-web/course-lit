
import { LitElement, html } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { consume } from '@lit-labs/context';

// Context
import { type Logger, type ILogger, loggerContext, contextLogger,  } from '../../../context/context-logger/logger-context.js';

@customElement('logger-context-consumer-decorators')
export class MyElement extends LitElement {
  @consume({ context: loggerContext, subscribe: false })
  @property({ attribute: false })
  public logger!: Logger;
  
  @consume({ context: contextLogger, subscribe: true })
  @property({ attribute: false })
  logger2!: ILogger;

  private doThing(): string {
    // this.logger.log('a thing was done');
    // this.logger2.funLogger()

    // let promise = this.logger2.json()    
    return this.logger2.funLogger()
  }

  render() {
    return html`
      ${this.logger2}
    `
  }

}
