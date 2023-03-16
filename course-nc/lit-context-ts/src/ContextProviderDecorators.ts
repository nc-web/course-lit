// import { LitElement } from 'lit';
// import { property } from 'lit/decorators.js'
// import { provide } from '@lit-labs/context';
// import { Logger, loggerContext } from '../context/logger-context.js';

// export class MyApp extends LitElement {
//   @provide({context: loggerContext})
//   @property({attribute: false})
//   public logger: Logger = {
//     log: (msg) => {
//       console.log(`[my-app] ${msg}`);
//     },
//   });

//   protected render(): TemplateResult {
//     return html`<my-thing></my-thing>`;
//   }
// }
