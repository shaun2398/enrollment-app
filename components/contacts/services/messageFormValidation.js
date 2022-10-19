import * as Yup from "yup"; //import yup

export const messageFormValidation = Yup.object({
    completeName: Yup.string()
      .max(50, "name is too long")
      .min(2, "name is too short")
      .required("Name is required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    description: Yup.string()
      .max(500, "Description must be 200 characters or less")
      .min(5, "Please provide a short description.")
      .required("Description is required"),
  });