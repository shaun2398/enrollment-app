import React from 'react'

import Collapsible from '../../components/Collapsible';
import SectionTitle from '../../components/SectionTitle';

import { faqs } from './service';



export default function FAQs() {

  return (
    <section class="container has-text-centered my-6 section notification">
      <SectionTitle name="Frequently Asked Questions" />
      {faqs.map((item) => (
        <Collapsible title={item.question} content={item.answer} />
      ))}
    </section>
  );
}
