import React from 'react';
import { Field} from 'formik';
import './form3.css';

const ThirdForm = (formikProps) => {
const {errors, touched} = formikProps

 return (
    <div>
          <div className="content">
            <div className="container">
              <div className="bars">
                <div className="progress-bar-1">
                  <div className="progress-bar-2 third-bar" />
                </div>
              </div>
              <div className="logo">
                <p>H</p>
              </div>
  
              <p className="header-text">Teams:</p>
              <div>
                <div className="input-container">
                {errors.teams && touched.teams? (
             <div className='error'>{errors.teams}</div>
           ) : null}
                <Field className='select' name='teams' errors={errors} touched={touched} as='select'>
                    <option value=''>-- choose a team --</option>
                    <option value='X-Men'>The X-Men</option>
                    <option value='Avengers'>The Avengers</option>
                    <option value='Justice League'>The Justice League</option>
                    <option value='Fantastic Four'>The Fantastic Four</option>
                    <option value='Teen Titans'>Teen Titans</option>
                    <option value='Suicide Squad'>Suicide Squad</option>
                    <option value='Shield'>Shield</option>
                    <option value='Guardians Of The Galaxy'>The Guardians Of The Galaxy</option>
                  </Field>
                </div>
              </div>
              <div>
                <div className="input-container m-3">
                {errors.checked && touched.checked? (
             <div className='error'>{errors.checked}</div>
           ) : null}
               <Field type='checkbox' name='checked' errors={errors} /> 
               By checking this box, you agree to the terms and conditions of the Hero League.
                </div>
              </div>
            </div>
          </div>
        
    </div>
  );
  
}


export default ThirdForm;
