import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { ExercisesAndresTs } from '../src/ExercisesAndresTs.js';
import '../src/exercises-andres-ts.js';

describe('ExercisesAndresTs', () => {
  let element: ExercisesAndresTs;
  beforeEach(async () => {
    element = await fixture(html`<exercises-andres-ts></exercises-andres-ts>`);
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
