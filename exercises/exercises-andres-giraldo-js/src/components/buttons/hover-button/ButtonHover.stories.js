// Button.stories.js

import { html } from 'lit'

// Components
import './ButtonHover01.js'
import './ButtonHover02.js'

export default {
  component: 'demo-button'
}

export const ButtonHover01 = {
  render: () => html`<button-hover-01/>`
}

export const ButtonHover02 = {
  render: () => html`<button-hover-02/>`
}
