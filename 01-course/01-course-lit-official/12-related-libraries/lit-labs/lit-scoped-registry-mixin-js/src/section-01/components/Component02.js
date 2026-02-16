import { LitElement, html, css } from 'lit';

export class Component02 extends LitElement {
  render() {
    return html` <h4>COMPONENT 02</h4> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
