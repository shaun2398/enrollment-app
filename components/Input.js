import React from 'react'

export default function Input(props) {
    const {label, type} = props

    const placeholders = {
      "First Name": "ex. Juan",
      "Middle Name": "Reyes",
      "Last Name": "Dela Cruz",
      "Complete Address": "7114 Kundiman Street Sampaloc, Manila",
      "Phone Number": "09123456789",
      "Email": "jdelacruz@gmail.com",
    };

  return (
    <div class="field my-5">
      <div class="control is-large">
        <label class="label has-text-left is-uppercase">{label}</label>
        <input class="input is-large is-primary" type={type} placeholder={`Ex. ${placeholders[`${label}`]}`} ></input>
      </div>
    </div>
  );
}
