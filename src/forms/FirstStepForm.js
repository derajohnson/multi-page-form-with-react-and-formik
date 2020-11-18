import React from 'react';
import { Field} from 'formik';
import './form.css';



const FirstForm = (formikProps) => {
const {errors, touched} = formikProps

 return (
    <div>
          <div className="content">
            <div className="container">
              <div className="bars">
                <div className="progress-bar-1">
                  <div className="progress-bar-2" />
                </div>
              </div>
              <div className="logo">
                <p>H</p>
              </div>
  
              <p className="header-text">Personal Details:</p>
              {errors.fullName && touched.fullName? (
             <div className='error'>{errors.fullName}</div>
           ) : null}
              <div>
                <div className="input-container">
                  <Field
                    className="input"
                    type="text"
                    name="fullName"
                    errors = {touched.fullName && errors.fullName}
                    placeholder="Name"
                  />
                  <i className="fa fa-user-circle icon" />
  
                </div>
                {errors.email && touched.email? (
             <div className='error'>{errors.email}</div>
           ) : null}
                <div className="input-container">
                  <Field
                    className="input"
                    type="email"
                    name="email"
                    errors = {touched.email && errors.email}
                    placeholder="Email"
                  />
                  <i className="fa fa-envelope icon" />
  
                </div>
                {errors.password && touched.password? (
             <div className='error'>{errors.password}</div>
           ) : null}
                <div className="input-container">
                  <Field
                    className="input"
                    type="password"
                    placeholder="Password"
                    errors = {touched.password && errors.password}
                    name="password"
                  />
                  <i className="fa fa-lock icon" />
  
                </div>
              </div>
            </div>
          </div>
        
    </div>
  );
  
}


export default FirstForm;
