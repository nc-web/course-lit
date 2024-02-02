
import { LitElement, html, css } from 'lit'

export class TodoListBasic extends LitElement {

  static properties = {
    _counter: {state: true},
    inpuTask: {type: String}
  }

  constructor() {
    super()
    this.inpuTask = ''
  }


  render() {
    return html `
            <section>
                <div>
                  <h2>TODO LIST BASIC</h2>
                </div>
                
                <form>
                  <input type='text' @change=${this.onChangeInputTask} placeholder='Add task'>
                  <button type='button' @click=${this.handleInputTask}>Add Task</button>
                </form>

                <div>
                  <p>${this.inpuTask}</p>
                </div>

            </section>
        `
  }

  onChangeInputTask(e) {
    e.preventDefault()
    this.inpuTask = e.target.value
    // this.inpuTask = 'Andres'
    console.log(this.inputTask)
    // console.log('Hola')
  }

  handleInputTask() {
    console.log(this.inputTask)
    // console.log('Hola')
  }

  static styles = css`
  
    :host {
        display: inline-block;
        margin: 0;
        padding: 0;
    }

  `

}

customElements.define('todo-list-basic', TodoListBasic)
