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
  }

  return (
    <section class="section notification">
      <div>
        <div>
          <Formik
            initialValues={initialState.values}
            onSubmit={(values) => {
              router.push("/enrollment/success");
              submitHandler(values);
              dispatch(resetValues());
            }}
          >
            {(formik) => (
              <div class="container">
                <div class="is-underlined has-text-centered">
                  <SectionTitle name="Confirm Your Details" />
                </div>
                <Form>
                  <div>
                    {/* access redux data in the table component */}
                    <Table />
                  </div>
                  {/* buttongroup */}
                  <div class="field columns is-desktop box notification is-info is-light">
                    <div class="control column">
                      <Button
                        name="back"
                        nextPage="/enrollment/forms"
                        size="large"
                      />
                    </div>
                    <div class="control column">
                      <SubmitButton name="submit" size="large" />
                    </div>
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
