
import { LitElement, html, css } from 'lit'

export class TodoListBasic extends LitElement {

  // STATES - PROPS - LIFE CYCLE
  static properties = {
    propInputTask: {type: String},
    propTasks: {state: true}
  }

  constructor() {
    super()
    this.propInpuTask = ''
    this.propTasks = []
  }


  // VIEWS
  render() {
    const items = this.propTasks

    return html`
            <section class='tlb'>

                <div class='tlb__header'>
                  <h2 class='tlb__header_title'>TODO LIST BASIC</h2>
                </div>
                
                <form class='tlb__form'>
                  <input class='tlb__form_inputTask' @change=${this.onChangeInputTask} type='text' placeholder='Add task' value=${this.propInputTask}>
                  <button class='tlb__form_buttonTask' type='button' @click=${this.handleInputTask}>Add Task</button>
                </form>

                <div class='tlb__tasks'>
                  ${items.map((x) => html`
                    <p>${x}</p>
                  `)}
                </div>

            </section>
        `
  }

  // LOGIC
  onChangeInputTask(e) {
    // e.preventDefault()
    let inputTask = e.target.value
    this.propInputTask = inputTask
    console.log(this.propInpuTask)
  }

  handleInputTask() {
    this.propTasks.push(this.propInputTask)
    console.log(this.propInpuTask)
    this.propInputTask = ''
  }

  // STYLES
  static styles = css`
  
    :host {
        display: inline-block;
        margin: 0;
        padding: 0;
    }

    .tlb__form_inputTask {
      padding: .5rem;
      border-radius: .4rem;
    }

    .tlb__form_buttonTask {
      padding: .5rem 1rem;
      border-radius: .3rem;
      color: #FFFFFF;
      background-color: #0D47A1;
      cursor: pointer;
      border-style: none;

      &:hover {
        transition: .3s;
        background-color: #424242;
      }
    }

  `
}

customElements.define('todo-list-basic', TodoListBasic)
