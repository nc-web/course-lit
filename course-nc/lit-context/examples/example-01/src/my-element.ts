import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { consume } from '@lit/context'


// Logger Context
import { loggerContext, TypeLogger, ILogger } from './context/logger/logger-context'

// My App
import './my-app'


@customElement('my-element')
export class MyElement extends LitElement {

  @consume({context: loggerContext,
    subscribe: true})
  @property({attribute: false})
  public logger?: ILogger

  render() {
    return html`
      <div>
        <h2>My Element</h2>
        <p>${this.logger?.log('Marco Giraldo: Consumer')}</p>

        <tr></tr>

        <my-app></my-app>
      </div>
    `
  }


  static styles = css`
    
    :host {
      display: block;
    }

  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
