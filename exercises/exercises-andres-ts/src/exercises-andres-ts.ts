import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Components
import './cards/Card01.js';
import './cards/CardHorizontal01.js';

@customElement('exercises-andres-ts')
export class ExercisesAndresTs extends LitElement {
  render() {
    return html`
      <main>
        <h1>My APP</h1>
        <card-01></card-01>
        <card-horizontal-01></card-horizontal-01>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
