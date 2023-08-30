import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { ref, Ref, createRef } from 'lit/directives/ref.js';

@customElement('todo-list-lit-doc-ts')
export class TodoListLitDocTs extends LitElement {

  @property({ type: String }) 
  message = 'Todo List'

  @property({type: String})
  name = 'Task'

  @property({type: Boolean})
  checked = false 

  handleClick() {
    console.log('Handle Click')
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement
    this.name = input.value;
    console.log('Change Name', this.name)
  }

  inputRef: Ref<HTMLInputElement> = createRef();

  render() {
    return html`
      <main>
        <h4>TODO LIST - LIT DOCUMENTATION (TS)</h4>
        <div>
          <input type='text' placeholder='Enter your task' @input=${this.changeName} ${ref(this.inputRef)}>
          <button @click=${this.handleClick} >Add Task</button>
          <p>Welcome to the Lit tutorial!</p>
          <p>This is the ${this.message} code.</p>
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
  `
}
