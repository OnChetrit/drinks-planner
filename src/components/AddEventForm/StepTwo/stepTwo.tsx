import { DoubleRangeInput, Input, RangeInput } from '@/components/FormInputs';
import React from 'react';

const StepTwo = ({ ...rest }) => {
  return (
    <fieldset {...rest}>
      <Input type='number' label='Members Count' name='members_count' />
      <RangeInput label='Gender Ratio' name='gender_ratio' />
      <DoubleRangeInput label='Age Range' name='age_range' min={18} max={120} />
    </fieldset>
  );
};

export default StepTwo;
