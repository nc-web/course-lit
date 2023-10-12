import { html } from 'lit'

// Components
import './ButtonBasicBlue.js'
import './ButtonBasicRed.js'
import './ButtonBasicGreen.js'

export default {
  component: 'demo-button'
}

export const ButtonBasicBlue = {
  render: () => html`<button-basic-blue/>`
}

export const ButtonBasicRed = {
  render: () => html`<button-basic-red/>`
}

export const ButtonBasicGreen = {
  render: () => html`<button-basic-green/>`
}
