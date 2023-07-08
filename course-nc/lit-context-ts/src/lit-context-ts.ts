import { LitElement, html, css } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { ContextRoot, consume, provide } from '@lit-labs/context';

// Context
import { type ILogger, contextLogger } from '../context/context-logger/logger-context.js';

// Provider
// import  from './logger-example/example-with-decorators/LoggerContextProviderDecorators.js'

// Components
import './logger-example/example-whitout-decorators/LoggerContextConsumer.js';
import './logger-example/example-whitout-decorators/LoggerContextProvider.js';

import './logger-example/example-with-decorators/LoggerContextConsumerDecorators.js'
import './logger-example/example-with-decorators/LoggerContextProviderDecorators.js';

import './andres-example/provider-element.js'
import './andres-example/consumer-element.js'

const root = new ContextRoot();
root.attach(document.body);

@customElement('lit-context-ts')
export class LitContextTs extends LitElement {

  render() {

    return html`
      <div class='context'>
        <h1>LIT CONTEXT</h1>
      </div>

      <div class='context-logger'>
        <h2>Examples Logger Context </h2>
        <div>
          <div>
            <h4>Exercise Context Andres</h4>
          </div>
          <p>Provider</p>
            <parent-element></parent-element>
            <br>
            <p>Consumer</p>
            <consumer-element></consumer-element>
           
        </div>

        <div>
          <div>
            <h4>Exercise Context Logger</h4>
          </div>
            <p>Provider</p>
            <my-app></my-app>
            <br>
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
