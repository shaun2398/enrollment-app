import React, { useState } from 'react'
import { Form, Formik } from 'formik';

import Input from '../Input';
import SubmitButton from "../SubmitButton";
import SuccessMessage from '../SuccessMessage';
import TextBox from '../TextBox';



import { messageInitialValues } from './utils/messageInitialValues';
import { messageFormValidation } from './services/messageFormValidation';


export default function MessageForm() {
  const [messageSent, setMessageSent] = useState(false)

  async function submitHandler (data) {
    setMessageSent(!messageSent)
    const response = await fetch("/api/sheetMessages", {
          method: "POST",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        })
  }
  return (
    <Formik
      initialValues={messageInitialValues}
      validationSchema={messageFormValidation}
      onSubmit={(values) => {
        submitHandler(values);
      }}
    >
      {(formik) => (
        <div class="box">
          {messageSent ? (
            <SuccessMessage message="Message Sent!" />
          ) : (
            <Form>
              <h3 class="title is-uppercase has-text-centered is-underlined is-size-3-tablet is-size-4">
                message us
              </h3>
              <Input
                name="completeName"
                label="Name, Affiliation, Org etc."
                type="text"
              />
              <Input name="email" label="Email" type="email" />
              <TextBox name="description" label="description" type="text" />
              <div class="my-4">
                <SubmitButton
                  name="submit"
                  size="medium"
                  hasToggle={!formik.isValid}
                />
              </div>
            </Form>
          )}
        </div>
      )}
    </Formik>
  );
}
