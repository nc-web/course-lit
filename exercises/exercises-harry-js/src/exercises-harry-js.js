import { LitElement, html, css } from 'lit';

// const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class ExercisesHarryJs extends LitElement {
  render() {
    return html`

    `;
  }

  static styles = css`
    :host {
      display: inline-block;
      padding: 0;
      margin: 0;
    }`
}

customElements.define('exercises-harry-js', ExercisesHarryJs);