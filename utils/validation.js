import * as Yup from "yup"; //import yup

//Philippine Mobile Phone Number Regex pattern: /((\+639)|09)\d{9}/;

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(50, "First name is too long")
    .required("This field is required"),
  middleName: Yup.string()
    .max(50, "Middle name is too long")
    .min(2, "Middle name is too short"),
  lastName: Yup.string()
    .max(50, "Last name is too long")
    .required("This field is required"),
  gender: Yup.string().required("Gender is required"),
  dateOfBirth: Yup.string()
    .matches(
      /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/,
      "Invalid Date, must be in MM/DD/YYYY"
    )
    .required("Date of birth is required"),
  email: Yup.string()
    .email("Email is invalid")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/((\+639)|09)\d{9}/, "Mobile phone number is not valid")
    .max(13, "Mobile phone number is too long")
    .required("Mobile Phone is required"),
  completeAddress: Yup.string()
    .max(80, "Must be 50 characters or less")
    .min(20, "Must be 20 characters or more")
    .required("This field is required"),
});