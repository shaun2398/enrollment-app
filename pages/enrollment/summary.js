import React from 'react'

import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
import Table from '../../components/Table';

export default function summary() {

  return (
    <div class="container">
      <div class="container is-fluid has-text-centered">
        <SectionTitle name="Confirm Your Details" />
        <div class="container my-5">
          {/* access redux data in the table component */}
          <Table />
        </div>
        {/* buttongroup */}
        <div class="field is-grouped container is-fluid is-flex is-justify-content-space-between my-5">
          <p class="control">
            <Button name="back" nextPage="/enrollment/forms" size="large" />
          </p>
          <p class="control">
            <Button name="submit" nextPage="/enrollment/success" size="large" />
          </p>
        </div>
      </div>
    </div>
  );
}
