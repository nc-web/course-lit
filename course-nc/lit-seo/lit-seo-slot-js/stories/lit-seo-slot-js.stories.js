import { html } from 'lit';
import '../src/lit-seo-slot-js.js';

export default {
  title: 'LitSeoSlotJs',
  component: 'lit-seo-slot-js',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <lit-seo-slot-js
      style="--lit-seo-slot-js-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </lit-seo-slot-js>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
