import { html, css, LitElement } from 'lit';

export class OpenWcWebComponentsTest extends LitElement {
  render() {
    return html` <h2>Open WC Web Components Test</h2> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
