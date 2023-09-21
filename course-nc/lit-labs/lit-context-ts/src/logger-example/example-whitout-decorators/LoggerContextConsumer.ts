import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ContextConsumer } from '@lit-labs/context';
import { loggerContext } from '../../../context/context-logger/logger-context.js';

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
    return html` <p>Logger Context Consumer: ${loggerContext}</p> `;
  }

  static styles = css`
    :host {
      display: inline-block;
      margin: 0;
      padding: 0;
    }

    p {
      color: #757575;
    }
  `;
}
