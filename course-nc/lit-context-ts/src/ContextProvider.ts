
// import {LitElement} from 'lit';
// import {ContextProvider} from '@lit-labs/context';
// import { Logger, loggerContext } from '../context/logger-context.js';

// export class MyApp extends LitElement {
//   // create a provider controller and a default logger
//   private provider = new ContextProvider(this, loggerContext, {
//     log: (msg) => {
//       console.log(`[my-app] ${msg}`);
//     },
//   });

//   protected render(): TemplateResult {
//     return html`<my-thing></my-thing>`;
//   }

//   public setLogger(newLogger: Logger) {
//     // update the provider with a new logger value
//     this.provider.setValue(newLogger);
//   }
// }
