
// Button.stories.js

import { html } from 'lit'

// Components
import './ButtonBasicBlue.js'
import './ButtonBasicBlueRed.js'

export default {
  component: 'demo-button'
}

export const ButtonBasicBlue = {
  render: () => html`<button-basic-blue/>`
}

export const ButtonBasicRed = {
  render: () => html`<button-basic-red/>`
}
