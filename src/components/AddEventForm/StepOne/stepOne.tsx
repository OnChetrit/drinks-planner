import { DateInput, Input } from '@/components/FormInputs';
import React from 'react';

const StepOne = ({ ...rest }) => {
  return (
    <fieldset {...rest}>
      <Input type='text' label='Title' name='title' placeholder='Title' />
      <Input type='text' label='Description' name='description' placeholder='Description' />
      <DateInput label='From' name='start' />
      <DateInput label='To' name='end' />
    </fieldset>
  );
};

export default StepOne;
