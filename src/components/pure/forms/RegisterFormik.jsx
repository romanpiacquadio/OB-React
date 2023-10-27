import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {
  
  let user = new User()

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    role: ROLES.USER,
  }

  const registerSchema = Yup.object().shape(
    {
      username: Yup.string()
          .min(6, 'Username must have at least 6 characters')
          .max(12, 'Username must have at most 12 characters')
          .required(),
      email: Yup.string()
          .email('Invalid email format')
          .required(),
      password: Yup.string()
          .min(8, 'Password must have at least 8 characters')
          .required('Password is required'),
      role: Yup.string()
          .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a valid Role')
          .required(),
      confirm: Yup.string()
          .when("password", {
            is: value => (value && value.length > 0 ? true : false),
            then: () => Yup.string().oneOf(
              [Yup.ref('password')], 'passwords must match'
            )
          }).required('You must confirm the password')
    }
  )
  
  const submit = (values) => {
    console.log('register values')
  }
  
  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={ async (values) => {
          await new Promise( r => setTimeout(r, 1000) );
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur
        }) => (
            <Form>
              <label htmlFor='username'>Username</label>
              <Field id='username' name='username' placeholder='Your Username' />
              {
                errors.username && touched.username && (                  
                    <ErrorMessage name='username' component='div'/>
                )
              }

              <label htmlFor='email'>Email</label>
              <Field id='email' name='email' placeholder='example@mail.com' type='email'/>
              {
                errors.email && touched.email && (                  
                    <ErrorMessage name='email' component='div'/>
                )
              }

              <label htmlFor='password'>Password</label>
              <Field id='password' name='password' placeholder='****' type='password'/>
              {
                errors.password && touched.password && (
                  <ErrorMessage name='password' component='div'/>
                )
              }
              
              <label htmlFor='confirm'>Confirm Password</label>
              <Field id='confirm' name='confirm' placeholder='****' type='password'/>
              {
                errors.confirm && touched.confirm && (
                  <ErrorMessage name='confirm' component='div'/>
                )
              }

              <button type='submit'>Register Account</button>
              { isSubmitting ? (<p>Sending your credentials...</p>) : null }
            </Form>)
        }

      </Formik>
    </div>
  );
}

export default RegisterFormik;
