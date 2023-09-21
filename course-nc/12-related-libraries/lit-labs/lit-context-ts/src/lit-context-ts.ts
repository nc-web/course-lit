import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ContextRoot } from '@lit-labs/context';

// Provider
// import  from './logger-example/example-with-decorators/LoggerContextProviderDecorators.js'

// Components
import './logger-example/example-whitout-decorators/LoggerContextConsumer.js';
import './logger-example/example-whitout-decorators/LoggerContextProvider.js';

import './logger-example/example-with-decorators/LoggerContextConsumerDecorators.js';
import './logger-example/example-with-decorators/LoggerContextProviderDecorators.js';

import './andres-example/provider-element.js';
import './andres-example/consumer-element.js';

import './andres-example-2/provider-element-2.js';
import './andres-example-2/consumer-element-2.js';

const root = new ContextRoot();
root.attach(document.body);

@customElement('lit-context-ts')
export class LitContextTs extends LitElement {
  render() {
    return html`
      <div class="context">
        <h1>LIT CONTEXT</h1>
      </div>

      <div class="context-logger">
        <h2>Examples Logger Context</h2>

        <div>
          <div>
            <h4>Exercise Context Andres</h4>
          </div>
          <parent-element></parent-element>
        </div>

        <br />

        <div>
          <div>
            <h4>Exercise Context Andres 2</h4>
          </div>
          <parent-element-2></parent-element-2>
        </div>

        <div>
          <div>
            <h4>Exercise Context Logger</h4>
          </div>
          <p>Provider</p>
          <my-app></my-app>
          <br />
          <p>Consumer</p>
          <logger-context-consumer-decorators></logger-context-consumer-decorators>
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
      color: #1565c0;
    }

    h2 {
      color: #e91e63;
    }

    h4 {
      color: #424242;
    }

    p {
      color: #616161;
    }

    .context {
      display: grid;
      justify-content: center;
    }

    .context-logger {
      display: grid;
      justify-content: center;
      background-color: #e0e0e0;
    }
  `;
}
