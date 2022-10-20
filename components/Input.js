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
      completeAddress: "7114 Kundiman Street Sampaloc, Manila",
      phoneNumber: "+639123456789 or 09123456789",
      email: "jdelacruz@gmail.com",
      birthday: "01/01/2004",
      completeName: "Juan Reyes Dela Cruz"
    };
    
    // functions
  return (
    <div class="field my-5">
      <div class="control is-large is-flex is-flex-direction-column is-align-items-flex-start">
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
          autoComplete="off"
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
