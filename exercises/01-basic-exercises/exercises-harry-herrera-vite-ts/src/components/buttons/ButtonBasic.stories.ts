// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

import './ButtonBasic01'
import './ButtonBasic02'

const meta: Meta = {
  component: 'demo-button'
}
export default meta

type blue = StoryObj;

type Red = StoryObj;

export const ButtonBasicAzul: blue = {
  render: () => html`<button-basic-azul/>`
}

export const ButtonBasicRed: Red = {
  render: () => html`<button-basic-red/>`
}
