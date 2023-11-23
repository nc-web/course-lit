import { provide } from '@lit/context'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import context from '../../context/context'

@customElement('provider-data')
export class ProviderEl extends LitElement {

  @provide({context})
  @property()
    data = 'Initial'

  render() {
    return html`
      <h3>Provider's data: <code>${this.data}</code></h3>
      <slot></slot>
    `
  }
}
