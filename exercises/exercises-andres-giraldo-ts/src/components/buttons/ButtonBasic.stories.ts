
import type { Meta, StoryObj } from '@storybook/web-components'

// Components
import './ButtonBasic01.js'

import { html } from 'lit'

const meta: Meta = {
  component: 'demo-button'
}
export default meta

type Story = StoryObj;

export const ButtonBasic01: Story = {
  render: () => html`<button-basic-01/>`
}
