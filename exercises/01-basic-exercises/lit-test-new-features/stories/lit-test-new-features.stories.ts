import { html, TemplateResult } from 'lit';
import '../src/lit-test-new-features.js';

export default {
  title: 'LitTestNewFeatures',
  component: 'lit-test-new-features',
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
  <lit-test-new-features
    style="--lit-test-new-features-background-color: ${backgroundColor}"
    .title=${title}
  ></lit-test-new-features>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
