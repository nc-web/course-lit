
import { LitElement, html, css } from 'lit'

export class Component01 extends LitElement {
  render() {
    return html` 
      <h4>COMPONENT 01</h4> 
    `
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `
}
