
import { LitElement, html, css } from 'lit'
import { customElement, state, property, query } from 'lit/decorators.js'


interface ITasks {
  id: number,
  task: string,
  status: boolean
}

type TypeTasks = ITasks


@customElement('todo-list-02')
export class TodoList02 extends LitElement {

  // STATE - PROPS - LIFE CYCLE
  @state()
  private stateTasks = [
      {
        id: 1,
        task: 'Deafult',
        status: false
      }
    ]

  @property({attribute: false})
    propTasks = {
      id: {type: Number},
      task: {type: String},
      status: {type: Boolean}
    }

  @property({type: Number})
    propID

  @property({type: String})
    propTask

  @property({type: Boolean})
    propHideCompleted

  constructor() {
    super()
    // this.propTasks = []
    this.stateTasks = []
    this.propTask = ''
    this.propID = 0
    this.propHideCompleted = false
  }

  // VIEWS
  render() {
    const items = this.stateTasks
    // const items2 = this.propTasks
    return html`
            <section class='tla'>
                
                <div class='tla__header'>
                  <h2 class='tla__header_title'>TODO LIST ADVANCED - TS</h2>
                </div>

                <form class='tla__form'>
                  <input id='input_task' @change=${this.onChangeTask} class='tla__form_inputTask' type='text' placeholder='Writer task'/>
                  <button @click=${this.handleAddTask} class='tla__form_buttonTask' type='button'>Add task</button>
                </form>

                <div class='tla__taks'>
                  ${items.map((x) => html`
                    <div class='tla__task_items'>
                      <p>${x.task}</p>
                      <svg @click=${this.handleDeleteTask} class='tla__task_items_svgDelete' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete task</title>  <path fill='#D50000' d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                      <svg @click=${this.handleEditTask} class='tla__task_items_svgEdit' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit task</title> <path fill='#FFAB00' d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                      <svg @click=${this.handleChekedTask} class='tla__task_items_svgCheked' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Complete task</title><path fill='#64DD17' d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>
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
    this.propTask = inputTask
    console.log(this.propTask)
    this.requestUpdate()
  }

  handleAddTask() {
    // this.stateTasks.push(this.propTask)
    // this.queryInput.value = ''
    // console.log(this.stateTasks)
    // this.requestUpdate()

    // items.id = 1
    // items.task = this.propTask
    // items.status = false




    // items.push({
    //   id: 1,
    //   task: this.propTask,
    //   status: false
    // })

    this.stateTasks.push({
      id: 1,
      task: this.propTask,
      status: false
    }
    )

    // tasks.id = 1
    // tasks.task = this.propTask
    // tasks.status = false
  }

  handleDeleteTask(e: Event) {
    // this.stateTasks
    const input = e.target as HTMLInputElement
    this.propTask = input.id
    // console.log('Deleted id:', this.propIDArray)
    console.log('Deleted id:', this.propTask)
  }

  handleEditTask() {
    // this.stateTasks
    console.log('Edited')
  }

  handleChekedTask() {
    // this.stateTasks
    console.log('Cheked')
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

    .tla__task_items_svgDelete {
      width: 1.5rem;
      margin: 0 .3rem 0 3rem;
      cursor: pointer;
    }

    .tla__task_items_svgEdit {
      width: 1.5rem;
      margin: 0 .3rem 0 .3rem;
      cursor: pointer;
    }

    .tla__task_items_svgCheked {
      width: 1.5rem;
      margin: 0 .3rem 0 .3rem;
      cursor: pointer;
    }
  `
}
