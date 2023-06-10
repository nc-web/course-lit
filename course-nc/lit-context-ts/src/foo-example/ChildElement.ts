
import { LitElement } from 'lit'
import { customElement } from 'lit/decorators'
// import { consume } from '@lit-labs/context'

// Context
// import { contextFoo, Foo } from '../../context/context-foo/foo-context.js'

@customElement('child-element')
export class ChildElement extends LitElement {
    // @consume({ context: contextFoo, subscribe: true }) foo: Foo;
}
