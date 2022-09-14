import React from 'react'

import {Formik, Form} from 'formik' 

import Button from '../../components/Button';
import Date from '../../components/Date';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { initialValues } from '../../utils/initialValues';
import { validationSchema } from '../../utils/validation';


export default function form() {
  return (
    <section className="section">
      <div className="container">
        <div className="notification has-text-centered py-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {(formik) => (
              <div>
                <h1 className="title is-size-1 my-5">Personal Information</h1>
                <Form>
                  <Input name="firstName" label="First Name" type="text" />
                  <Input name="middleName" label="Middle Name" type="text" />
                  <Input name="lastName" label="Last Name" type="text" />
                  <Select name="gender" label="gender" />
                  <Date name="dateOfBirth" label="Birthdate" type="date" />
                  <Input name="email" label="Email" type="email" />
                  <Input name="phoneNumber" label="Phone Number" type="tel" />
                  <Input
                    name="completeAddress"
                    label="Complete Address"
                    type="text"
                  />
                  <Button
                    name="next"
                    nextPage="#"
                    size="medium"
                    hasToggle={!(formik.isValid && formik.dirty)}
                  />
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
