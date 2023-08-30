import { html, TemplateResult } from 'lit';
import '../src/spa-ts.js';

export default {
  title: 'SpaTs',
  component: 'spa-ts',
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
  <spa-ts
    style="--spa-ts-background-color: ${backgroundColor}"
    .title=${title}
  ></spa-ts>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
