import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { provide } from '@lit-labs/context';

// Context
import { type Logger, loggerContext } from '../../../context/logger-context.js';

@customElement('my-app')
export class MyApp extends LitElement {
  @provide({ context: loggerContext })
  @property({ attribute: false })
  public logger: Logger = {
    log: msg => {
      console.log(`[my-app] ${msg}`);
    },
  };

  protected render() {
    return html` <h4>Context Provider whit decorators</h4> `;
  }
}