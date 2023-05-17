import React from "react";
import { useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
function FormComponent() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      age: 35,
      password:"",
    },
    onSubmit: (values) => {
      console.log("Submitted Values:", values);
      formik.resetForm();
    },
    validate: (values) => {
      let errors = {};
      const nameRegex = /^[A-Z][a-z]*$/;
      const ageRegex = /^\d+$/;
      const passRegex=/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{9,}$/;
      if (!values.password) {
        errors.password = "Required";
      } else if (!passRegex.test(values.password)) {
        errors.password =
          "Password must contain a Upper case,special character and number and length of the password must be greater than 8"
      }
      if (!values.firstname) {
        errors.firstname = "Required";
      } else if (!nameRegex.test(values.firstname)) {
        errors.firstname =
          "Name must contain only alphabets and start with capital letter";
      }
      if (!values.lastname) {
        errors.lastname = "Required";
      } else if (!nameRegex.test(values.lastname)) {
        errors.lastname =
          "Name must contain only alphabets and start with capital letter";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(values.email)
      ) {
        errors.email = "Enter correct email format";
      }
      if (!ageRegex.test(values.age)) {
        errors.age = "Required";
      }

      return errors;
    },
  });
  return (
    <div className="main1">
      <div className="main2">
        <form onSubmit={formik.handleSubmit} className="main3">
          <div style={{ marginBottom: "10px" }}>
            <FormLabel className="marg-bot">First Name</FormLabel>
            <Input
              style={{ width: "300px", padding: "5px" }}
              type="text"
              name="firstname"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstname}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <div className="txt">{formik.errors.firstname}</div>
            ) : null}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <FormLabel className="marg-bot">Last Name</FormLabel>
            <Input
              style={{ width: "300px", padding: "5px" }}
              type="text"
              name="lastname"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastname}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <div className="txt">{formik.errors.lastname}</div>
            ) : null}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <FormLabel className="marg-bot">Email address</FormLabel>
            <Input
              style={{ width: "300px", padding: "5px" }}
              type="email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="txt">{formik.errors.email}</div>
            ) : null}
          </div>
          <div style={{ marginBottom: "10px" }}>
          <FormLabel className="marg-bot">Password</FormLabel>
          <Input
            style={{ width: "300px", padding: "5px" }}
            type="password"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="txt">{formik.errors.password}</div>
          ) : null}
        </div>
          <div style={{ marginBottom: "10px" }}>
            <FormLabel className="marg-bot">Age</FormLabel>
            <Input
              style={{ width: "300px", padding: "5px" }}
              type="number"
              name="age"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.age}
            />
            {formik.touched.age && formik.errors.age ? (
              <div className="txt">{formik.errors.age}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
