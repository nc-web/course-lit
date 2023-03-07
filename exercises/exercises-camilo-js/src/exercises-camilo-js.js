import { LitElement, html, css } from 'lit';

class ExercisesCamiloJs extends LitElement {
  render() {
    return html` <main></main> `;
  }

  static styles = css`
    :host {
      display: inline-block;
      margin: 0;
      padding: 0;
    }
  `;
}

customElements.define('exercises-camilo-js', ExercisesCamiloJs);
