import React from 'react'

export default function Input(props) {
    const {label, type} = props

    const placeholders = {
      "First Name": "Juan",
      "Middle Name": "Reyes",
      "Last Name": "Dela Cruz",
      "Complete Address": "House #, Street, District, City/Municipality Ex. 7114 Kundiman Street Sampaloc, Manila",
      "Phone Number": "09123456789",
      "Email": "jdelacruz@gmail.com",
    };

  return (
    <div class="field my-5">
      <div class="control is-large">
        <label class="label has-text-left is-uppercase">{label}</label>
        <input class="input is-large is-primary" type={type} placeholder={`${placeholders[`${label}`]}`} ></input>
      </div>
    </div>
  );
}
