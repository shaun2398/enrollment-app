import React from 'react'
import {useRouter} from 'next/router'

import {Formik, Form} from 'formik' 

import Input from '../../components/Input';
import Select from '../../components/Select';
import SectionTitle from '../../components/SectionTitle';
import SubmitButton from '../../components/SubmitButton';

import { validationSchema } from '../../utils/validation';

import { useDispatch, useSelector } from 'react-redux';
import { addValues } from '../../redux-toolkit/userData';


export default function form() {

  const router = useRouter() //use this to navigate to next page using onsubmit button
  const initialState = useSelector((state) => state.userData); //access state from redux store
  const dispatch = useDispatch(); // used to call action

  // for select input
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

  return (
      <div class="container notification">
        <div class="container is-fullwidth has-text-centered">
          <Formik
            initialValues={initialState.values}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              router.push("/enrollment/summary"); // navigate to next page
              dispatch(addValues(values)); // save form values to redux
            }}
          >
            {(formik) => (
              <div>
                <SectionTitle name="Enter Your Details" />
                <Form>
                  <Input name="firstName" label="First Name" type="text" />
                  <Input name="middleName" label="Middle Name" type="text" />
                  <Input name="lastName" label="Last Name" type="text" />
                  <Select name="gender" label="gender" selectOptions={genderOption}/>
                  <Input
                    name="birthday"
                    label="Birthday"
                    type="text"
                  />
                  <Input name="email" label="Email" type="email" />
                  <Input name="phoneNumber" label="Phone Number" type="tel" />
                  <Input
                    name="completeAddress"
                    label="Complete Address"
                    type="text"
                  />
                  {/* submit button should not have Link wrapper  */}
                  <div class="mt-6">
                    <SubmitButton
                      name="next"
                      size="medium"
                      // hasToggle={!(formik.isValid && formik.dirty)} if you want to initially disable the button until the initial value changes
                      hasToggle={!formik.isValid}
                    />
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
  );
}
