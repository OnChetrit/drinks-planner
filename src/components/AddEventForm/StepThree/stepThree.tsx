import React from 'react';

const StepThree = async ({ ...rest }) => {
  return (
    <fieldset {...rest}>
      <select name='alcohol_list' id='alcohol_list'></select>
    </fieldset>
  );
};

export default StepThree;
