import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// Views
import './views/layout/index.js';

@customElement('exercise-dashboard')
export class ExerciseDashboard extends LitElement {
  @property({ type: String }) header = 'My app';

  render() {
    return html`
      <main>
        <index-layout></index-layout>
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
