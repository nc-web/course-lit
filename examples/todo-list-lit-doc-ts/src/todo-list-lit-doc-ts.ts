import { LitElement, html, css } from 'lit';
import { customElement, state, property, query } from 'lit/decorators.js';

@customElement('todo-list-lit-doc-ts')
export class TodoListLitDocTs extends LitElement {
  @state()
  private _listItems = [
    { text: 'Start Lit tutorial', completed: true },
    { text: 'Make to-do list', completed: false },
  ];

  @property({ type: String })
  name = 'Task';

  @property({ type: Boolean })
  checked = false;

  @property({ type: String })
  author = 'Andres Giraldo Arenas';

  @query('#newitem')
  input!: HTMLInputElement;

  handleClick() {
    console.log('Handle Click');
    this.author = 'Marco Giraldo';
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
    console.log('Change Name', this.name);
  }

  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
  }

  addToDo() {
    this._listItems = [
      ...this._listItems,
      { text: this.input.value, completed: false },
    ];
    this.input.value = '';
  }

  render() {
    return html`
      <main>
        <h4>TODO LIST - LIT DOCUMENTATION (TS)</h4>
        <div class='todo'>
          <div class='todo-edit'></div>
            <!-- <label for='editCheck'>Enable editing</label> -->
            <input id='editCheck' name='editCheck' type="checkbox" @change=${
              this.setChecked
            }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
          </div>
          
          <div class='todo-button'>
            <input type='text' placeholder='Enter your task' @input=${
              this.changeName
            } ?disabled=${!this.checked}>
          </div>
          
          <button @click=${this.handleClick} >Add Task</button>
          
          <p>Task List</p>

          <ul>
            ${this._listItems.map(item => html`<li>${item.text}</li>`)}
          </ul>

          <small>Author: ${this.author}.</small>
        </div>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }

    main {
      display: grid;
      justify-content: center;
    }

    svg {
      fill: #263238;
      width: 1rem;
    }

    .todo {
    }

    .todo-edit {
    }
  `;
}
