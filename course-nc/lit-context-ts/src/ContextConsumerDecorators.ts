import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { consume } from '@lit-labs/context';
import { Logger, loggerContext } from '../context/logger-context.js';

export class MyElement extends LitElement {
  @consume({ context: loggerContext, subscribe: true })
  @property({ attribute: false })
  public logger?: Logger;

  private doThing() {
    this.logger?.log('a thing was done');
  }
}
