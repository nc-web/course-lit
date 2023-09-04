import { html } from 'lit';
import '../src/lit-seo-eleventy-js.js';

export default {
  title: 'LitSeoEleventyJs',
  component: 'lit-seo-eleventy-js',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <lit-seo-eleventy-js
      style="--lit-seo-eleventy-js-background-color: ${backgroundColor ||
      'white'}"
      .title=${title}
    >
    </lit-seo-eleventy-js>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
