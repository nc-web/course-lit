import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ContextConsumer } from '@lit-labs/context';
import { loggerContext } from '../../../context/logger-context.js';

@customElement('logger-context-consumer')
export class LoggerContextConsumer extends LitElement {
  public logger = new ContextConsumer(
    this,
    loggerContext,
    undefined, // don't need to pass a callback
    true // pass true to get updates if the logger changes
  );

  private doThing() {
    this.logger.value?.log('a thing was done');
  }

  render() {
    return html` <h4>Logger Context Consumer: ${loggerContext}</h4> `;
  }
}
