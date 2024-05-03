'use client';

import { useFormState } from 'react-dom';
import { createEvent } from '@/app/actions';
import React from 'react';
import { useFormStatus } from 'react-dom';

const AddEventForm = () => {
  const { pending } = useFormStatus();
  const [formState, action] = useFormState(createEvent, {
    message: '',
  });

  return (
    <form action={action} className='flex flex-col gap-y-2'>
      <label htmlFor='text'>Text</label>
      <textarea id='text' name='text' className='border-2' />

      <button disabled={pending} type='submit' className='border-2'>
        {pending ? 'Creating ...' : 'Create'}
      </button>
    </form>
  );
};

export default AddEventForm;
