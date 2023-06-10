
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';
// import { ContextProvider } from '@lit-labs/context';

// Context
// import { contextFoo } from '../../context/context-foo/foo-context'

// Parent
import './ParentElement.js'

@customElement('root-element')
export class RootElement extends LitElement {
    // @ContextProvider({ context : contextFoo })foo: Foo;
    render() {return html`<parent-element></parent-element>`}
}