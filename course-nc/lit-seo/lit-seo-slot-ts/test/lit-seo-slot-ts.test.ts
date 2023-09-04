import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { LitSeoSlotTs } from '../src/lit-seo-slot-ts.js';
import '../src/lit-seo-slot-ts.js';

describe('LitSeoSlotTs', () => {
  let element: LitSeoSlotTs;
  beforeEach(async () => {
    element = await fixture(html`<lit-seo-slot-ts></lit-seo-slot-ts>`);
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
