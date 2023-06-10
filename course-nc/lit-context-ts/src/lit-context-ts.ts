import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { provide } from '@lit-labs/context';

// Context
import { type Logger, loggerContext } from '../context/context-logger/logger-context.js';

// Components
import './logger-example/example-whitout-decorators/LoggerContextConsumer.js';
import './logger-example/example-whitout-decorators/LoggerContextProvider.js';

import './logger-example/example-with-decorators/LoggerContextConsumerDecorators.js'
import './logger-example/example-with-decorators/LoggerContextProviderDecorators.js';

@customElement('lit-context-ts')
export class LitContextTs extends LitElement {
  @provide({ context: loggerContext })
  @property({ attribute: false })
  public logger: Logger = {
    log: msg => {
      console.log(`[my-app] ${msg}`);
    },
  };

  render(): TemplateResult {
    return html`
      <div class='context'>
        <h1>LIT CONTEXT</h1>
      </div>

      <div class='context-logger'>
        <h2>Examples Logger Context </h2>
        <div>
          <div>
            <h4>Context sin decorator</h4>
          </div>
           
        </div>

        <div>
          <div>
            <h4>Context con decorator</h4>
          </div>
            <logger-context-consumer-decorators></logger-context-consumer-decorators>
            <my-app></my-app>
            ${this.logger.log}
        </div>
      </div>
      
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }

    h1 {
      color: #1565C0;
    }

    h2 {
      color: #E91E63;
    }

    h4 {
      color: #424242;
    }

    .context {
      display: grid;
      justify-content: center;
    }

    .context-logger {
      display: grid;
      justify-content: center;
      background-color: #E0E0E0;
    }
  `;
}
