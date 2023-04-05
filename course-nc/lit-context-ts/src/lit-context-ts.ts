import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Components
import './logger-example/example-whitout-decorators/LoggerContextConsumer.js';
import './logger-example/example-whitout-decorators/LoggerContextProvider.js';
import './logger-example/example-with-decorators/LoggerContextConsumerDecorators.js';

@customElement('lit-context-ts')
export class LitContextTs extends LitElement {
  render() {
    return html`
      <h2>LIT CONTEXT</h2>
      <logger-context-consumer></logger-context-consumer>
      <!-- <logger-context-consumer-decorators></logger-context-consumer-decorators> -->
    `;
  }

  static styles = css`
    :host {
      display: flex;
      margin: 0;
      padding: 0;
    }
  `;
}
