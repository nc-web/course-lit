import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { LitTestNewFeatures } from '../src/lit-test-new-features.js';
import '../src/lit-test-new-features.js';

describe('LitTestNewFeatures', () => {
  let element: LitTestNewFeatures;
  beforeEach(async () => {
    element = await fixture(
      html`<lit-test-new-features></lit-test-new-features>`
    );
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
