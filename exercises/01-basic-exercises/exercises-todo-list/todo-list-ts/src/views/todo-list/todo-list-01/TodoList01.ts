
import { LitElement, html, css } from 'lit'
import { customElement, state, property, query } from 'lit/decorators.js'


@customElement('todo-list-01')
export class TodoList01 extends LitElement {


  // STATE - PROPS - LIFE CYCLE
  @state()
  private stateTasks: Array<string>

  @property({type: String})
    propInputTask


  constructor() {
    super()

    // this.stateDivEditTask = false
    // this.queryDivEditTask.style.display = 'none'

    this.stateTasks = []
    this.propInputTask = ''
  }

  // connectedCallback() {
  //   super.connectedCallback()
  // }

  // attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
  // }
  // updated() {
  //   this.queryDivEditTask.style.display = 'none'
  // }


  // VIEWS
  render() {
    return html`
            <section class='tla'> 
                <!-- Header -->
                <div class='tla__header'>
                  <h2 class='tla__header_title'>TODO LIST BASIC - TS</h2>
                </div>

                <!-- Form -->
                <form class='tla__form'>
                  <input id='input_task' @change=${this.onChangeTask} class='tla__form_inputTask' type='text' placeholder='Writer task'/>
                  <button @click=${this.addTask} class='tla__form_buttonTask' type='button'>Add task</button>
                </form>

                <!-- Tasks -->
                <div class='tla__tasks'>
                  ${this.stateTasks.map((x, index) => html`
                    <div class='tla__tasks_items'>
                      
                      <div class='tla__tasks_items_tasks'>
                        <svg class='tla__tasks_items_tasks_point_false' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-four-points-circle</title><path d="M8.17 2.76C9.39 2.26 10.69 2 12 2C13.31 2 14.61 2.26 15.83 2.76C17.04 3.26 18.14 4 19.07 4.93C20 5.86 20.74 6.96 21.24 8.17C21.74 9.39 22 10.69 22 12C22 14.65 20.95 17.2 19.07 19.07C17.2 20.95 14.65 22 12 22C10.69 22 9.39 21.74 8.17 21.24C6.96 20.74 5.86 20 4.93 19.07C3.05 17.2 2 14.65 2 12C2 9.35 3.05 6.8 4.93 4.93C5.86 4 6.96 3.26 8.17 2.76M12 17L13.56 13.58L17 12L13.56 10.44L12 7L10.43 10.44L7 12L10.43 13.58L12 17Z" /></svg>
                        <p class='tla__taskss_items_tasks_text'> ${index} - ${x}</p>
                      </div>
                      
                      <div class='tla__tasks_items_act'>
                        <a class='tla__tasks_items_act_a' @click=${() => this.removeTask(index)}>
                          <svg class='tla__tasks_items_act_delete' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                        </a>
                      </div>

                    </div>  
                  `)}
                </div>
            </section>
        `
  }


  // LOGIC
  @query('#input_task')
    queryInputTask!: HTMLInputElement

  onChangeTask() {
    const inputTask = this.queryInputTask.value
    this.propInputTask = inputTask
    console.log(this.propInputTask)
    this.requestUpdate()
  }

  addTask() {
    this.stateTasks.push(this.propInputTask)
    this.queryInputTask.value = ''
    this.requestUpdate()
    console.log(this.stateTasks)
  }

  removeTask(index: number) {
    this.stateTasks = [...this.stateTasks.filter((x, i) => i !== index)]
    this.requestUpdate()
    console.log(this.stateTasks)
    console.log('Task removed', index)
  }


  // STYLES
  static styles = css`
    
    :host {
        display: block;
    }

    /* TLA */
    .tla {
      display: grid;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 2rem;
    }

    /* TLA HEADER */
    .tla__header_title {
      color: #FFAB00;
    }


    /* TLA FORM */
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


    /* TLA TASKS */
    .tla__tasks_items {
      display: flex;
    }
    .tla__tasks_items {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .tla__tasks_items_tasks {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .tla__tasks_items_tasks_point_false{
      width: 1.3rem;
      fill: #9E9E9E;
      margin-right: .3rem;
    }
    .tla__tasks_items_tasks_point_true{
      width: 1.3rem;
      fill: #64DD17;
      margin-right: .3rem;
    }

    .tla__tasks_items_act{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 3rem;
    }
    .tla__tasks_items_act_a {
      cursor: pointer;
    }
    .tla__tasks_items_act_delete {
      width: 1.5rem;
      fill: #B71C1C;
    }
    .tla__tasks_items_act_edit {
      width: 1.5rem;
      fill: #FFD600;
      margin: 0 .3rem;
    }
    .tla__tasks_items_act_check {
      width: 1.5rem;
      fill: #64DD17;
    }


    /* EDIT TASKS */
    .tla__edit_tasks {
      /* display: none */
    }
    .tla__form_inputEditTask {
      padding: .5rem;
      border-radius: .3rem;
      border-style: none;
    }
    .tla__form_buttonEditTask {
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

  `
}
