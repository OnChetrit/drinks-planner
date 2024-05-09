import { createEvent } from '@/app/actions';
import React from 'react';
import { Input } from './FormInputs';
import Button from './Button/button';

const AddEventForm = () => {
  return (
    <form action={createEvent}>
      <Input type='text' label='Title' name='title' placeholder='Title' />
      <Button variant="primary" title='submit' type='submit'>
        submit
      </Button>
    </form>
  );
};

export default AddEventForm;
