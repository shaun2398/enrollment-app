import React, { useEffect, useState } from 'react'
import { ErrorMessage, useField } from 'formik';

import styles from '../styles/errors.module.css'

export default function Select(props) {
  const [field, meta] = useField(props); // implement usefield
  const [dropDownOption, setDropDownOption] = useState([]);

  const genderOption = [
    {
      id: 1,
      name: "Male",
    },
    {
      id: 2,
      name: "Female",
    },
  ];

  // for region, municapality, district options
  // useEffect(() => {
  //   const fetchOptionData = async () => {
  //     // region end point
  //     let region = `${name}`;
  //     let apiLink = `https://psgc.gitlab.io/api/${region}/`;
  //     const data = await fetch(apiLink);
  //     const res = await data.json();
  //     setDropDownOption(res);
  //   };
  //   fetchOptionData();
  // }, []);

  const Options = field.name === "gender" ? genderOption : dropDownOption;

  return (
    <div class="my-3 is-flex is-flex-direction-column is-align-items-flex-start">
      <label htmlFor={field.name} class="label has-text-left is-uppercase">{field.name}</label>
      <div class={`select is-large is-capitalized is-primary ${meta.touched && meta.error && 'is-danger'}`}>
        <select class="is-capitalized is-uppercase" {...field} {...props}>
          <option value="" disabled selected>select {field.name}</option>
          {Options.map((option) => (
            <option>{option.name}</option>
          ))}
        </select>
      </div>
      <ErrorMessage component="div" name={field.name} className={styles.error}/>
    </div>
  );
}
