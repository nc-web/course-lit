
import { LitElement, html, css } from 'lit'
import { customElement, state, property, query } from 'lit/decorators.js'

@customElement('todo-list-basic')
export class TodoListBasic extends LitElement {

  // STATE - PROPS - LIFE CYCLE
  @state()
  private stateTasks: string[]

  @property({type: String})
    propInputTask

  @property({type: Boolean})
    propHideCompleted

  constructor() {
    super()
    this.stateTasks = []
    this.propInputTask = ''
    this.propHideCompleted = false
  }

  // VIEWS
  render() {
    return html`
            <section class='tla'>
                
                <div class='tla__header'>
                  <h2 class='tla__header_title'>TODO LIST BASIC - TS</h2>
                </div>

                <form class='tla__form'>
                  <input id='input_task' @change=${this.onChangeTask} class='tla__form_inputTask' type='text' placeholder='Writer task'/>
                  <button @click=${this.handleButtonTask} class='tla__form_buttonTask' type='button'>Add task</button>
                </form>

                <div class='tla__taks'>
                  ${this.stateTasks.map(x => html`
                    <div class='tla__task_items'>
                      <p>${x}</p>
                    </div>  
                  `)}
                </div>    

            </section>
        `
  }

  // LOGIC
  @query('#input_task')
    queryInput!: HTMLInputElement

  onChangeTask() {
    const inputTask = this.queryInput.value
    this.propInputTask = inputTask
    console.log(this.propInputTask)
    this.requestUpdate()
  }

  handleButtonTask() {
    this.stateTasks.push(this.propInputTask)
    this.queryInput.value = ''
    console.log(this.stateTasks)
    this.requestUpdate()
  }

  // STYLES
  static styles = css`
    
    :host {
        display: inline-block;
    }

    .tla {
      display: grid;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }

    .tla__form {
      margin: 2rem 0;
    }

    .tla__form_inputTask {
      padding: .5rem;
      border-radius: .3rem;
      border-style: none;
    }

    .tla__form_buttonTask {
      padding: .5rem 1rem;
      border-radius: .3rem;
      color: #FFFFFF;
      background-color: #0D47A1;
      border-style: none;
      cursor: pointer;

      &:hover {
        transition: .3s;
        background-color: #616161;
      }
    }

    .tla__task_items {
      display: flex;
    }

  `
}
