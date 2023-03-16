
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Context
import { consume } from '@lit-labs/context';
import { type Logger, loggerContext } from '../context/logger-context.js';

@customElement('my-element')
export class MyElement extends LitElement {

  @consume({ context: loggerContext, subscribe: true })
  @property({ attribute: false })
  public logger?: Logger;

  private doThing() {
    this.logger?.log('a thing was done');
  }

}
