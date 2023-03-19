import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Views
import './views/layout/index.js';

@customElement('exercise-dashboard')
export class ExerciseDashboard extends LitElement {
  render() {
    return html` <!-- <index-layout></index-layout> --> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
