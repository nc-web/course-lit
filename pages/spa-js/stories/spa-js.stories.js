import { html } from 'lit';
import '../src/spa-js.js';

export default {
  title: 'SpaJs',
  component: 'spa-js',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <spa-js
      style="--spa-js-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </spa-js>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
