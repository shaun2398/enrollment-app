import React from 'react'

import { useSelector } from "react-redux";

import { faCalendar, faEnvelope, faGenderless, faHome, faIdCard, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Table() {
  const initialState = useSelector((state) => state.userData); //access data

  // destructure values from redux store
  const {
    firstName,
    middleName,
    lastName,
    gender,
    birthday,
    email,
    phoneNumber,
    completeAddress,
  } = initialState.values;

  return (
    <div class="container box is-flex is-justify-content-center is-fluid my-6">
      {console.log(initialState.values)}
      <table class="table table is-hoverable is-fullwidth">
        <tbody>
          <tr class="my-4">
            <th>
              <span class="icon has-text-success is-size-4">
                <FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon>
              </span>
              {"   "}FIRST NAME:
            </th>
            <td class="is-uppercase has-text-right">{firstName}</td>
          </tr>
          <br />
          <tr>
            <th>
              {" "}
              <span class="icon has-text-success is-size-4">
                <FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon>
              </span>
              {"   "}MIDDLE NAME:
            </th>
            <td class="is-uppercase has-text-right">{middleName}</td>
          </tr>
          <br />
          <tr>
            <th>
              {" "}
              <span class="icon has-text-success is-size-4">
                <FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon>
              </span>
              {"   "}LAST NAME:
            </th>
            <td class="is-uppercase has-text-right">{lastName}</td>
          </tr>
          <br />
          <tr>
            <th>
              {" "}
              <span class="icon has-text-success is-size-4">
                <FontAwesomeIcon icon={faGenderless}></FontAwesomeIcon>
              </span>
              {"   "}GENDER:
            </th>
            <td class="is-uppercase has-text-right">{gender}</td>
          </tr>
          <br />
          <tr>
            <th>
              {" "}
              <span class="icon has-text-success is-size-4">
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
              </span>
              {"   "}DATE OF BIRTH:
            </th>
            <td class="is-uppercase has-text-right">{birthday}</td>
          </tr>
          <br />
          <tr>
            <th>
              {" "}
              <span class="icon has-text-success is-size-4">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </span>
              {"   "}EMAIL:
            </th>
            <td class="has-text-right">{email}</td>
          </tr>
          <br />
          <tr>
            <th>
              {" "}
              <span class="icon has-text-success is-size-4">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </span>
              {"   "}PHONE NUMBER:
            </th>
            <td class="is-uppercase has-text-right">{phoneNumber}</td>
          </tr>
          <br />
          <tr>
            <th>
              {" "}
              <span class="icon has-text-success is-size-4">
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
              </span>
              {"   "}COMPLETE ADDRESS:
            </th>
            <td class="is-uppercase has-text-right">{completeAddress}</td>
          </tr>
          <br />
        </tbody>
      </table>
    </div>
  );
}
