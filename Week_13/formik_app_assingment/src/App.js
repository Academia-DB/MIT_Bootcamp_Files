import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: 'example@email.com', 
      password: 'password'
    },
    onSubmit: values => {
      console.log('form:', values);
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      if(!values.email) errors.email = 'Field required';
      else {
        let count = values.email.split('@').length - 1;
        if(values.email.indexOf('@') <= 0) {
          errors.email = 'Username should be an email';
        }
        else if(count > 1) {
          errors.email = 'Username should be an email';
        }
        else if(values.email[values.email.indexOf('@')+1] == '.') {
          errors.email = 'Username should be an email';
        }
        else if(values.email.indexOf('.') <= 0) {
          errors.email = 'Username should be an email';
        }
        else if(values.email.lastIndexOf('.') >= values.email.length-2) {
          errors.email = 'Username should be an email';
        }
      }
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  });

  return (
    <div id="space" align="center">
      {
        /* <p>
          The app is ready! You can proceed with the task instructions. TODO:
          build you form here.
        </p> */
      }
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id='emailError' style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id='pswError' style={{color:'red'}}>{formik.errors.password}</div>: null}
        <div><button id="submitBtn" type='submit'>Submit</button></div>
      </form>
    </div>
  );
}

export default App;

