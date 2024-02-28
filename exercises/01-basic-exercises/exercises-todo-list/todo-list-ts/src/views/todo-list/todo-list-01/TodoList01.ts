
import { LitElement, html, css } from 'lit'
import { customElement, state, property, query } from 'lit/decorators.js'

type TypeTasks = {
  id: number,
  task?: string,
  status?: boolean
}

@customElement('todo-list-01')
export class TodoList01 extends LitElement {


  // STATE - PROPS - LIFE CYCLE
  @state()
  private stateTasks: TypeTasks[]

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
                  <button @click=${this.addTask} class='tla__form_buttonTask' type='button'>Add task</button>
                </form>

                <div class='tla__taks'>
                  ${this.stateTasks.map(x => html`
                    <div class='tla__task_items'>
                      
                      <div class='tla__task_items_task'>
                        <svg class='tla__taks_items_task_point' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-four-points-circle</title><path d="M8.17 2.76C9.39 2.26 10.69 2 12 2C13.31 2 14.61 2.26 15.83 2.76C17.04 3.26 18.14 4 19.07 4.93C20 5.86 20.74 6.96 21.24 8.17C21.74 9.39 22 10.69 22 12C22 14.65 20.95 17.2 19.07 19.07C17.2 20.95 14.65 22 12 22C10.69 22 9.39 21.74 8.17 21.24C6.96 20.74 5.86 20 4.93 19.07C3.05 17.2 2 14.65 2 12C2 9.35 3.05 6.8 4.93 4.93C5.86 4 6.96 3.26 8.17 2.76M12 17L13.56 13.58L17 12L13.56 10.44L12 7L10.43 10.44L7 12L10.43 13.58L12 17Z" /></svg>
                        <p class='tla__taks_items_task_text' >${x.id} - ${x.task} - ${x.status}</p>
                      </div>
                      
                      <div class='tla__task_items_act'>
                        <a class='tla__task_items_act_a' @click=${() => this.removeTask(x.id)}>
                          <svg class='tla__task_items_act_delete' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                        </a>
                        <a class='tla__task_items_act_a' @click=${() => this.editTask(x.id)}>
                          <svg class='tla__task_items_act_edit' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                        </a>
                        <a class='tla__task_items_act_a' @click=${() => this.checkTask(x.id)}>
                          <svg class='tla__task_items_act_check' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-decagram</title><path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" /></svg>
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
    queryInput!: HTMLInputElement

  onChangeTask() {
    const inputTask = this.queryInput.value
    this.propInputTask = inputTask
    console.log(this.propInputTask)
    this.requestUpdate()
  }

  addTask() {
    this.stateTasks = [
      ...this.stateTasks,
      {
        id: Math.floor(Math.random() * 1000),
        task: this.propInputTask,
        status: false
      }
    ]
    this.queryInput.value = ''
    console.log(this.stateTasks)
  }

  removeTask(id: number) {
    this.stateTasks = [...this.stateTasks.filter(x => x.id !== id)]
    // this.requestUpdate()
    console.log('Task removed', id)
  }

  editTask(id: number) {
    console.log('Edit task', id)
  }

  checkTask(id: number) {
    console.log('Check task', id)
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


    /* TLA FORM */
    .tla__task_items {
      display: flex;
    }
    .tla__task_items {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .tla__task_items_task {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .tla__taks_items_task_point{
      width: 1.3rem;
      fill: #9E9E9E;
      margin-right: .3rem;
    }

    .tla__task_items_act{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 3rem;
    }
    .tla__task_items_act_a {
      cursor: pointer;
    }
    .tla__task_items_act_delete {
      width: 1.5rem;
      fill: #B71C1C;
    }
    .tla__task_items_act_edit {
      width: 1.5rem;
      fill: #FFD600;
      margin: 0 .3rem;
    }
    .tla__task_items_act_check {
      width: 1.5rem;
      fill: #64DD17;
    }

  `
}
