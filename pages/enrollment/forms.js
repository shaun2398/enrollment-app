import React from 'react'

import Date from '../../components/Date';
import Input from '../../components/Input';
import MediumButton from '../../components/MediumButton';
import Select from '../../components/Select';

export default function form() {
  return (
    <section className="section">
      <div className="container">
        <div className="notification has-text-centered py-6">
          <h1 className="title is-size-1 my-5">Personal Information</h1>
          <form className="container is-flex is-flex-direction-column">
            {/* Personal Info */}
            <Input label="First Name" type="text" />
            <Input label="Middle Name" type="text" />
            <Input label="Last Name" type="text" />
            <Select label="gender" />
            <Date name="Birthdate" type="date"/>
            {/* Addres */}
            <Input label="Complete Address" type="text" />
            {/* Contact Info */}
            <Input label="Email" type="email" />
            <Input label="Phone Number" type="tel" />
            <MediumButton name="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
}
