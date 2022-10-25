import React, { useState } from 'react'
import { Form, Formik } from 'formik';

import Input from './Input';
import Select from './Select';
import SubmitButton from './SubmitButton';

import emailjs from '@emailjs/browser';

import * as Yup from "yup"; //import yup

export default function RequestForm(props) {
    const [isEmailSent, setIsEmailSent] = useState(false)
    const { nameOfService } = props;

    const initialRequestFormValues = {
        completeName: "",
        email: "",
        service: nameOfService
    }

    const requestFormValidation = Yup.object({
        completeName: Yup.string()
        .max(50, "name is too long")
        .min(2, "name is too short")
        .required("Name is required"),
      email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
    });

    // for select input
    const serviceOptions = [
      {
        id: 1,
        name: "e-pharmacy",
      },
      {
        id: 2,
        name: "laboratory",
      },
      {
        id: 3,
        name: "consultation",
      },
    ];

    const sendEmail = () => {
        emailjs
          .sendForm(
            "gmail",
            "template_5nj086o",
            "#requestForm", // id selector
            "S7Oij_6gsDccDSQQ7"
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
            },
            (err) => {
              console.log("FAILED...", err);
            }
          );
          setIsEmailSent(!isEmailSent)
      };


      
  return (
    <Formik
      initialValues={initialRequestFormValues}
      validationSchema={requestFormValidation}
      onSubmit={() => {
        sendEmail();
      }}
    >
      {(formik) => (
        <div>
          <Form id="requestForm">
            <Input name="completeName" label="Name" type="text" />
            <Input name="email" label="Email" type="email" />
            <Select
              name="service"
              label="service"
              selectOptions={serviceOptions}
              selectValue={nameOfService}
            />
            <div class="mt-6">
              <SubmitButton
                // name="request quote"
                name={isEmailSent ? "Request Sent" : "request quote"}
                size="medium"
                hasToggle={isEmailSent ? true : !formik.isValid}
              />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
