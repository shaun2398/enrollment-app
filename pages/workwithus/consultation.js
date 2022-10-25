import React from 'react'
import RequestForm from '../../components/RequestForm';

export default function consultation() {
  return (
    <section class="section is-medium notification">
      <div class="columns is-desktop box notification is-half container mx-auto">
        <div class="column content has-text-justified px-6">
          <h3 class="is-size-3 title is-underlined">Online Consultation</h3>
          <p>
            Quisque ante lacus, malesuada ac auctor vitae, congue non ante.
            Phasellus lacus ex, semper ac tortor nec, fringilla condimentum
            orci. Fusce eu rutrum tellus.
          </p>
          <ol>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
            <li>Integer in volutpat libero.</li>
            <li>Donec a diam tellus.</li>
            <li>Aenean nec tortor orci.</li>
            <li>
              Quisque aliquam cursus urna, non bibendum massa viverra eget.
            </li>
            <li>Vivamus maximus ultricies pulvinar.</li>
          </ol>
        </div>
        <div class="column is-flex is-justify-content-start is-flex-direction-column mx-auto">
          <figure class="image fluid mb-4">
            <img src="/consultation.jpg" />
          </figure>
          <RequestForm nameOfService="consultation"/>
        </div>
      </div>
    </section>
  );
}
