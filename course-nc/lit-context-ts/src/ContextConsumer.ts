import { LitElement } from 'lit';
// import { property } from 'lit/decorators.js'
import { ContextConsumer } from '@lit-labs/context';
import { loggerContext } from '../context/logger-context.js';

export class MyElement extends LitElement {
  public logger = new ContextConsumer(
    this,
    loggerContext,
    undefined, // don't need to pass a callback
    true // pass true to get updates if the logger changes
  );

  private doThing() {
    this.logger.value?.log('a thing was done');
  }
}
