import React from 'react'
import {useRouter} from 'next/router'

import { useSelector, useDispatch } from 'react-redux';
import { resetValues } from '../../redux-toolkit/userData';

import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
import Table from '../../components/Table';

import { Form, Formik } from 'formik';
import SubmitButton from '../../components/SubmitButton';

export default function summary() {

  const router = useRouter() //use this to navigate to next page using onsubmit button

  const initialState = useSelector((state) => state.userData); //access data
  const dispatch = useDispatch()
  
  async function submitHandler (data) {
    const response = await fetch("/api/sheet", {
          method: "POST",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        })
        console.log(process.env.NEXT_PUBLIC_CLIENT_EMAIL, process.env.NEXT_PUBLIC_CLIENT_ID, process.env.NEXT_PUBLIC_PRIVATE_KEY, process.env.NEXT_PUBLIC_SPREADSHEET_ID)
  }

  return (
    <section class="section">
      <div class="container notification">
        <div class="container is-fluid has-text-centered">
          <Formik
            initialValues={initialState.values}
            onSubmit={(values) => {
              submitHandler(values);
              router.push("/enrollment/success");              
              dispatch(resetValues());
            }}
          >
            {(formik) => (
              <div>
                <div class="is-underlined">
                  <SectionTitle name="Confirm Your Details" />
                </div>
                <Form>
                  <div class="container my-5">
                    {/* access redux data in the table component */}
                    <Table />
                  </div>

                  {/* buttongroup */}
                  <div class="field is-grouped container is-fluid is-flex is-justify-content-space-between">
                    <p class="control">
                      <Button
                        name="back"
                        nextPage="/enrollment/forms"
                        size="large"
                      />
                    </p>
                    <p class="control">
                      <SubmitButton name="submit" size="large" />
                    </p>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
