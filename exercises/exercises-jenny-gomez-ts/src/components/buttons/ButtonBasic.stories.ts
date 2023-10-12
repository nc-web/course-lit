// Button.stories.ts

import type { Meta } from '@storybook/web-components'

// Components
import './ButtonBasic01.js'

import { html } from 'lit'

const meta: Meta = {
  component: 'demo-button'
}
export default meta

export const ButtonBasic01 = {
  render: () => html`<utton-basic-01/>`
}
