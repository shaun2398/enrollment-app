import React from 'react'

import { useSelector } from "react-redux";

import { faCalendar, faDiceOne, faDiceThree, faDiceTwo, faEnvelope, faFemale, faGenderless, faHome, faIdCard, faMale, faPerson, faPhone } from '@fortawesome/free-solid-svg-icons';
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
    <div class="container">
      <table class="table table is-hoverable is-fullwidth">
        <tbody>
          <tr class="my-4 columns is-tablet">
            <th class="column">
              <p class="is-size-4-desktop has-text-centered">
                {" "}
                <span class="icon has-text-success is-size-5-desktop">
                  <FontAwesomeIcon icon={faDiceOne}></FontAwesomeIcon>
                </span>
                FIRST NAME
              </p>
            </th>
            <td class="column is-uppercase has-text-centered">
              {firstName ? firstName : "N/A"}
            </td>
          </tr>
          <br />
          <tr class="my-4 columns is-tablet">
            <th class="column">
              {" "}
              <p class="is-size-4-desktop has-text-centered">
                <span class="icon has-text-success is-size-4-desktop">
                  <FontAwesomeIcon icon={faDiceTwo}></FontAwesomeIcon>
                </span>
                {"   "}MIDDLE NAME
              </p>
            </th>
            <td class="column is-uppercase has-text-centered">
              {middleName ? middleName : "N/A"}
            </td>
          </tr>
          <br />
          <tr class="my-4 columns is-tablet">
            <th class="column">
              <p class="is-size-4-desktop has-text-centered">
                <span class="icon has-text-success is-size-4-desktop">
                  <FontAwesomeIcon icon={faDiceThree}></FontAwesomeIcon>
                </span>
                LAST NAME
              </p>
            </th>
            <td class="column is-uppercase has-text-centered">
              {lastName ? lastName : "N/A"}
            </td>
          </tr>
          <br />
          <tr class="my-4 columns is-tablet">
            <th class="column">
              <p class="is-size-4-desktop has-text-centered">
                <span class="icon has-text-success is-size-4-desktop">
                  <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
                </span>
                GENDER
              </p>
            </th>
            <td class="column is-uppercase has-text-centered">
              {gender ? gender : "N/A"}
            </td>
          </tr>
          <br />
          <tr class="my-4 columns is-tablet">
            <th class="column">
              <p class="is-size-4-desktop has-text-centered">
                <span class="icon has-text-success is-size-4-desktop">
                  <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                </span>
                DATE OF BIRTH
              </p>
            </th>
            <td class="column is-uppercase has-text-centered">
              {birthday ? birthday : "N/A"}
            </td>
          </tr>
          <br />
          <tr class="my-4 columns is-tablet">
            <th class="column">
              <p class="is-size-4-desktop has-text-centered">
                <span class="icon has-text-success is-size-4-desktop">
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </span>
                EMAIL
              </p>
            </th>
            <td class="column is-uppercase has-text-centered">
              {email ? email : "N/A"}
            </td>
          </tr>
          <br />
          <tr class="my-4 columns is-tablet">
            <th class="column">
              <p class="is-size-4-desktop has-text-centered">
                <span class="icon has-text-success is-size-4-desktop">
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                </span>
                MOBILE NUMBER
              </p>
            </th>
            <td class="column is-uppercase has-text-centered">
              {phoneNumber ? phoneNumber : "N/A"}
            </td>
          </tr>
          <br />
          <tr class="my-4 columns is-tablet">
            <th class="column">
              <p class="is-size-4-desktop has-text-centered">
                <span class="icon has-text-success is-size-4-desktop">
                  <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                </span>
                HOME ADDRESS
              </p>
            </th>
            <td class="column is-uppercase has-text-centered">
              {completeAddress ? completeAddress : "N/A"}
            </td>
          </tr>
          <br />
        </tbody>
      </table>
    </div>
  );
}
