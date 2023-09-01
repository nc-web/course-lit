import { html, TemplateResult } from 'lit';
import '../src/lit-seo-ssr-ts.js';

export default {
  title: 'LitSeoSsrTs',
  component: 'lit-seo-ssr-ts',
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

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <lit-seo-ssr-ts style="--lit-seo-ssr-ts-background-color: ${backgroundColor}" .title=${title}></lit-seo-ssr-ts>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
