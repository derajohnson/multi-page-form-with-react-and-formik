import React from 'react';
import './StepButton.css';

const StepButton = props => {
  const {step} = props;
  switch (step) {
    case 1:
      return (
        <p className="submit">
          <button className="btn" type='submit'>
            Next
          </button>
        </p>
      );
    case 2:
      return (
        <p className="submit">
          <button className="btn" type='submit'>
            Next
          </button>
        </p>
      );
    case 3:
      return (
        <p className="submit">
          <button className="btn" type='submit'>
            Submit
          </button>
        </p>
      );
    default:
      return <p />;
  }
};

export default StepButton;
