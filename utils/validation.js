//Philippine Mobile Phone Number Regex pattern: /((\+639)|09)\d{9}/;
import * as Yup from "yup"; //import yup

export const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(50, "First name is too long")
      .required("This field is required"),
    middleName: Yup.string()
      .max(50, "Middle name is too long")
      .required("This field is required"),
    lastName: Yup.string()
      .max(50, "Last name is too long")
      .required("This field is required"),
    gender: Yup.string().required("This field is required"),
    dateOfBirth: Yup.date().required("This field is required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("This field is required"),
    phoneNumber: Yup.string()
      .matches(/((\+639)|09)\d{9}/, "Mobile Phone number is not valid")
      .required("This field is required"),
    completeAddress: Yup.string()
      .max(80, "Must be 50 characters or less")
      .required("This field is required"),
  });