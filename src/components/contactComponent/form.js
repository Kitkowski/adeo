// Helper styles for demo
import './helper.css';
import { DisplayFormikState } from './helper';

import React from 'react';
import { render } from 'react-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

const App = () => (
  <div className="app">
   
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required('Required'),
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
          <label htmlFor="text" style={{ display: 'block' }}>
              NAME
            </label>
            <input
              id="text"
              placeholder="Enter your name"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.text && touched.text? 'text-input error' : 'text-input'
              }
            />
            <label htmlFor="email" style={{ display: 'block' }}>
              EMAIL
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email ? 'text-input error' : 'text-input'
              }
            />
            <label htmlFor="text" style={{ display: 'block' }}>
              MESSAGE
            </label>
            <textarea
              id="text"
              placeholder="Enter your name"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.text && touched.text? 'text-input error' : 'text-input'
              }
            />
            {errors.text && touched.text && (
              <div className="input-feedback">{errors.text}</div>
            )}
          < br />
            <button type="submit" disabled={isSubmitting}>
              SEND
            </button>

           
          </form>
        );
      }}
    </Formik>

  </div>
);

render(<App />, document.getElementById('root'));
