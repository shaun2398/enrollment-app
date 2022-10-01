import React from 'react'

import Box from '../../components/Box';
import SectionTitle from '../../components/SectionTitle';

import { faqs } from './service';



export default function FAQs() {

  return (
    <section class="container is-large has-text-centered my-6">
      <SectionTitle name="Frequently Asked Questions" />
      {faqs.map((item) => (
        <Box question={item.question} answer={item.answer} />
      ))}
    </section>
  );
}
