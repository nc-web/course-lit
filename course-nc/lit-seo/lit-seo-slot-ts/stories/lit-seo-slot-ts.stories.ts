import { html, TemplateResult } from 'lit';
import '../src/lit-seo-slot-ts.js';

export default {
  title: 'LitSeoSlotTs',
  component: 'lit-seo-slot-ts',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  title,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <lit-seo-slot-ts
    style="--lit-seo-slot-ts-background-color: ${backgroundColor}"
    .title=${title}
  ></lit-seo-slot-ts>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
