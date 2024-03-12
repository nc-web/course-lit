// Button.stories.js

import { html } from 'lit'


// Components
import './ButtonBasicBlue.js'
import './ButtonBasicRed.js'

export default {
  component: 'demo-button'
}

export const ButtonBasicBlue = {
  render: () => html`<button-basic-blue/>`
}

export const ButtonBasicRed = {
  render: () => html`<button-basic-red/>`
}

export const Arguments = {
  args: {
    background: '#ff0',
    label: 'Button'
  }
}
