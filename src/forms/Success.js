import React from 'react'
import './success.css'

const SuccessPage = (formikProps) => {
    const {heroName, strengths, weaknesses, costumeColor, teams} = formikProps.values
    return (
        <div>
             <div>
          <div className="content">
            <div className="container container-3">
              <div className="logo">
                <p>H</p>
              </div>
              <div className='user-data'>
                    <p className='user-description'>
                        Your information has been saved. Welcome {heroName} to {teams}. Your Strengths are {strengths}, which will be indespensible when it comes to fighting crime and the injustices of this world.
                        Your weaknesses are {weaknesses}, we all have weaknesses, they are an essential part of you. Great costume color by the way, {costumeColor}. Let's change the world together.
                    </p>
                    <div>
                        <p className='image-hero'> 
                        <img src='../hero.png' alt='hero-img'/>
                        </p>
                    </div>
              </div>
            </div>
          </div>
        
    </div>
        </div>
    )
}

export default SuccessPage