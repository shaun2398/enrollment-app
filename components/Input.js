import React from 'react'

import { useField, ErrorMessage } from 'formik';

import styles from '../styles/errors.module.css'

export default function Input({label, ...props}) { //destructure props
    // variables and objects
    const [field, meta] = useField(props)
    const placeholders = {
      firstName: "Juan",
      middleName: "Reyes",
      lastName: "Dela Cruz",
      completeAddress: "House #, Street, District, City/Municipality Ex. 7114 Kundiman Street Sampaloc, Manila",
      phoneNumber: "09123456789",
      email: "jdelacruz@gmail.com",
      dateOfBirth: "MM/DD/YYYY",
      completeName: "Juan Reyes Dela Cruz"
    };
    
    // functions
  return (
    <div class="field my-5">
      <div class="control is-large">
        {/* <label class="label has-text-left is-uppercase" htmlFor={field.name}>{label}</label> */}
        <label
          class={`label has-text-left is-uppercase ${
            label === "email" ? "is-lowercase" : ""
          }`}
          htmlFor={field.name}
        >
          {label === "Middle Name" ? `${label} (optional)` : label }
        </label>
        <input
          class={`input is-large is-primary ${
            meta.touched && meta.error && "is-danger"
          }`}
          {...field}
          {...props}
          placeholder={`${placeholders[`${field.name}`]}`}
        ></input>
        <ErrorMessage
          component="div"
          name={field.name}
          className={styles.error}
        />
      </div>
    </div>
  );
}
