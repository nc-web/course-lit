import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Context
import { consume } from '@lit-labs/context';
import { Logger, loggerContext } from '../../../context/context-logger/logger-context.js';

@customElement('logger-context-consumer-decorators')
export class MyElement extends LitElement {
  @consume({ context: loggerContext, subscribe: true })
  @property({ attribute: false })
  public logger?: Logger;

  private doThing() {
    this.logger?.log('a thing was done');
  }

  render() {
    this.logger?.log('State Global send')
  }
}
