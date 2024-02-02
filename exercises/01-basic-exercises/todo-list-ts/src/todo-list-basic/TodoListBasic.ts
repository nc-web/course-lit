
import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('todo-list-basic')
export class TodoListBasic extends LitElement {

  render() {
    return html`
            <section>
                
                <div>
                    <h2>TODO LIST BASIC - TS</h2>
                </div>

                <div>

                </div>

                <div>

                </div>    
            </section>
        `
  }

  static styles = css`
    
    :host {
        display: inline-block;
    }
  `
}
