import React from 'react'

import { useSelector } from 'react-redux';

export default function Table() {
  const initialState = useSelector((state) => state.userData); //access data

  // destructure values from redux store
  const {
    firstName,
    middleName,
    lastName,
    gender,
    dateOfBirth,
    email,
    phoneNumber,
    completeAddress,
  } = initialState.values;
  
  return (
    <div class="container is-flex is-justify-content-center is-fluid my-6">
      <table class="table table is-hoverable is-fullwidth">
        <tbody>
          <tr class="my-4">
            <th>FIRST NAME:</th>
            <td class="is-uppercase has-text-right">{firstName}</td>
          </tr>
          <br />
          <tr>
            <th>MIDDLE NAME:</th>
            <td class="is-uppercase has-text-right">{middleName}</td>
          </tr>
          <br />
          <tr>
            <th>LAST NAME:</th>
            <td class="is-uppercase has-text-right">{lastName}</td>
          </tr>
          <br />
          <tr>
            <th>GENDER:</th>
            <td class="is-uppercase has-text-right">{gender}</td>
          </tr>
          <br />
          <tr>
            <th>DATE OF BIRTH:</th>
            <td class="is-uppercase has-text-right">{dateOfBirth}</td>
          </tr>
          <br />
          <tr>
            <th>EMAIL:</th>
            <td class="is-uppercase has-text-right">{email}</td>
          </tr>
          <br />
          <tr>
            <th>PHONE NUMBER:</th>
            <td class="is-uppercase has-text-right">{phoneNumber}</td>
          </tr>
          <br />
          <tr>
            <th>COMPLETE ADDRESS:</th>
            <td class="is-uppercase has-text-right">{completeAddress}</td>
          </tr>
          <br />
        </tbody>
      </table>
    </div>
  );
}
