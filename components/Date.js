import React from 'react'
import { ErrorMessage, useField } from 'formik';

import styles from '../styles/errors.module.css'

export default function Date({label, ...props}) {
  const [field, meta] = useField(props); // implement usefield
  return (
    <div class="field my-5">
      <div class="control is-large">
        <label class="label has-text-left is-uppercase">{label}</label>
        <input
          class={`input is-large is-primary ${meta.touched && meta.error && 'is-danger'}`}
          {...field} {...props}
        ></input>
      </div>
      <ErrorMessage component="div" name={field.name} className={styles.error}/>
    </div>
  );
}
