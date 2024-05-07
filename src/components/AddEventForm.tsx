import { createEvent } from '@/app/actions';
import React from 'react';
import { Input } from './FormInputs';

const AddEventForm = () => {
  return (
    <form action={createEvent}>
      <Input type='text' label='Title' name='message' placeholder='Title' />
    </form>
  );
};

export default AddEventForm;
