import React from 'react'

import { ErrorMessage, Field, useField } from "formik";

import styles from "../styles/errors.module.css";

export default function TextBox({label, ...props}) {
    const [field, meta] = useField(props);
  return (
    <div class="control is-large">
      <label class="label has-text-left is-uppercase" htmlFor={field.name}>
        {field.name}
      </label>
      <Field
        as="textarea"
        class={`textarea is-large is-primary ${
          meta.touched && meta.error && "is-danger"
        }`}
        name={field.name}
        {...field}
        {...props}
        placeholder="Description"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className={styles.error}
      />
    </div>
  );
}
