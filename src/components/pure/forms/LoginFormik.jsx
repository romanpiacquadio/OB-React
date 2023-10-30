import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'


const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
                .email('Email format is not valid')
                .required('Email is required'),
    password: Yup.string()
                .required('Password is required'),
  }
)

const LoginFormik = () => {

  const navigate = useNavigate();

  const initialCredentials = {
    email: '',
    password: '',
  }

  return (
    <div>
      <h4>Login Form</h4>
      <Formik
        // *** Initial values that the form will take
        initialValues={initialCredentials}
        // *** yup validation schema
        validationSchema={loginSchema}
        // *** onsubmit event
        onSubmit={ async (values) => {
          await new Promise( r => setTimeout(r, 1000) );
          alert(JSON.stringify(values, null, 2));
          // guardaos las credenciales en el local storage
          localStorage.setItem('credentials', values)
          navigate('/profile')
        }}
      >
        {/* We obtainn props from Formik */}

        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur
        }) => (
            <Form>
              <label htmlFor='email'>Email</label>
              <Field id='email' name='email' placeholder='example@mail.com' type='email'/>
              {
                errors.email && touched.email && (                  
                    <ErrorMessage name='email' component='div'/>
                )
              }

              <label htmlFor='email'>Password</label>
              <Field id='password' name='password' placeholder='****' type='password'/>
              {
                errors.password && touched.password && (
                  <ErrorMessage name='password' component='div'/>
                )
              }

              <button type='submit'>Login</button>
              { isSubmitting ? (<p>Login your credentials...</p>) : null }
            </Form>)
        }

        
      </Formik>
    </div>
  );
}

export default LoginFormik;
