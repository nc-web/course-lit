import { consume } from '@lit/context'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import context from '../../../context/context'

@customElement('consumer-provider')
export class ConsumerEl extends LitElement {

  @consume({context})
    providedData = ''

  render() {
    return html`<h3>Consumer data Como hijo de Provider: <code>${this.providedData}</code></h3>`
  }
}
