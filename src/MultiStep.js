import React, {useState} from 'react'
import {Formik, Form} from 'formik'
import StepButton from './StepButton'
import FirstForm from './forms/FirstStepForm'
import SecondForm from './forms/SecondStepForm'
import ThirdForm from './forms/ThirdStepForm'
import SuccessPage from './forms/Success'

const renderstep = (step, values, errors, touched) => {
    switch(step){
        case 1: 
        return <FirstForm errors={errors} touched={touched}/>
        case 2:
        return <SecondForm errors={errors} touched={touched} />
        case 3:
        return <ThirdForm errors={errors} touched={touched} />
        case 4:
        return <SuccessPage values={values}/>
        default:
        return <FirstForm errors={errors} touched={touched}/>
    }
}

const MultiStep = () => {
    const [step, setStep] = useState(1)
    const formData = {
        fullName: '',
        email: '',
        password: '',
        heroName: '',
        strengths: '',
        weaknesses: '',
        costumeColor: '',
        gender: '',
        checked: false,
        teams: ''
    }
  const handleSubmit = () => setStep(step => step + 1)
  const validate = values => {
      const errors = {}
      if(step === 1){
        if(!values.fullName){
            errors.fullName = 'Your name is required!'
        }
        if(!values.email){
            errors.email = 'Email is required!'
        }
        if(values.password.length < 4){
            errors.password = 'Password is too short!'
        }
        if(!values.password){
            errors.password = 'Password is required!'
        }
      }
if(step === 2){
    if(!values.heroName){
        errors.heroName = 'Hero name is required'
    }
    if(!values.strengths){
        errors.strengths = 'We need to know your strengths'
    }
    if(!values.weaknesses){
        errors.weaknesses = 'We need to know your weaknesses'
    }
    if(!values.costumeColor){
        errors.costumeColor = 'Our designers need this field'
    }
}

if(step === 3){
    if(values.checked === false){
        errors.checked = 'You need to agree to our terms and conditions'
    }
    if(values.teams === ''){
        errors.teams = 'You need to pick a team'
    }
}
  

      return errors
  }
    return (
        <Formik
        enableReinitialize
        initialValues={{...formData}}
        onSubmit={handleSubmit}
        validate={validate}
        >
            
            {({values, errors, touched}) => (
                <Form>
                    {renderstep(step, values, errors, touched)}
                    <StepButton step={step}/>
                </Form>
            )}
        </Formik>
    )
}

export default MultiStep