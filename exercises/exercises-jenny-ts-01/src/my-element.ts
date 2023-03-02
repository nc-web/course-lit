
import { LitElement, html, css } from 'lit';
import { customElement } from  'lit/decorators';

@customElement("my-element")
export class MyElement extends LitElement {
  render() {
    return html`
      <h2> Hola Mundo </h2>
    `
  }

  static styles = css`
    :host{
      display: inline-block;
      margin: 0;
      padding: 0;
      background-color: #879649;
    }
  `
}


