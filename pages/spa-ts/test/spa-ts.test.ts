import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { SpaTs } from '../src/spa-ts.js';
import '../src/spa-ts.js';

describe('SpaTs', () => {
  let element: SpaTs;
  beforeEach(async () => {
    element = await fixture(html`<spa-ts></spa-ts>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
