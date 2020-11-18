import React from 'react';
import { Field} from 'formik';
import './form2.css'

const SecondForm = (formikProps) => {
const {errors, touched} = formikProps

 return (
    <div>
          <div className="content">
            <div className="container container-2">
              <div className="bars">
                <div className="progress-bar-1">
                  <div className="progress-bar-2 second-bar" />
                </div>
              </div>
              <div className="logo">
                <p>H</p>
              </div>
  
              <p className="header-text">Super Hero Name:</p>
              {errors.heroName && touched.heroName? (
             <div className='error'>{errors.heroName}</div>
           ) : null}
              <div>
                <div className="input-container">
                  <Field
                    className="input input-2"
                    type="text"
                    name="heroName"
                    errors = {touched.heroName && errors.heroName}
                    placeholder="Name goes here"
                  />
  
                </div>
             
              </div>
              <p className="header-text">Strengths:</p>
              {errors.strengths && touched.strengths? (
             <div className='error'>{errors.strengths}</div>
           ) : null}
              <div>
                <div className="input-container">
                  <Field
                    className="input input-2"
                    type="text"
                    name="strengths"
                    errors = {touched.strengths && errors.strengths}
                    placeholder="Your Strengths"
                  />
  
                </div>
             
              </div>
              <p className="header-text">Weaknesses:</p>
              {errors.weaknesses && touched.weaknesses? (
             <div className='error'>{errors.weaknesses}</div>
           ) : null}
              <div>
                <div className="input-container">
                  <Field
                    className="input input-2"
                    type="text"
                    name="weaknesses"
                    errors = {touched.weaknesses && errors.weaknesses}
                    placeholder="Your Weaknesses"
                  />
  
                </div>
             
              </div>
              <p className="header-text">Costume Color:</p>
              {errors.costumeColor && touched.costumeColor? (
             <div className='error'>{errors.costumeColor}</div>
           ) : null}
              <div>
                <div className="input-container">
                  <Field
                    className="input input-2"
                    type="text"
                    name="costumeColor"
                    errors = {touched.costumeColor && errors.costumeColor}
                    placeholder="Your Costume Color"
                  />
  
                </div>
             
              </div>
              <p className="header-text">Gender:</p>
              <div>
                  <div className='input-container'>
                        <Field 
                            type='radio'
                            name='gender'
                            value='male'
                        />
                        Male
                  </div>
              </div>

              <div>
                  <div className='input-container'>
                        <Field 
                            type='radio'
                            name='gender'
                            value='female'
                        />
                        Female
                  </div>
              </div>
            </div>
          </div>
        
    </div>
  );
  
}


export default SecondForm;
