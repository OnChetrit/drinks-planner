'use client';
import { createEvent } from '@/app/actions';
import React, { useContext } from 'react';
import s from './addEventForm.module.scss';

import { Input, DateInput, RangeInput, DoubleRangeInput } from '../FormInputs';
import Button from '../Button';
import EventContextProvider, {
  AddEventDispatchContext,
  useAddEventContext,
} from '@/context/eventContextProvider';

const AddEventForm = () => {
  const dispatch = useContext(AddEventDispatchContext);
  const context = useAddEventContext();

  return (
    <EventContextProvider>
      <form action={createEvent} className={s.root}>
        <Input type='text' label='Title' name='title' placeholder='Title' />
        <Input type='text' label='Description' name='description' placeholder='Description' />
        <DateInput label='From' name='start' />
        <DateInput label='To' name='end' />
        <Input type='number' label='Members Count' name='members_count' />
        <RangeInput label='Gender Ratio' name='gender_ratio' />
        <RangeInput label='Age Range' name='age_range' min={25} max={35} />
        <DoubleRangeInput label='Age Range' name='age_range' min={25} max={35} />
        <Button variant='primary' title='submit' type='submit'>
          submit
        </Button>
      </form>
    </EventContextProvider>
  );
};

export default AddEventForm;
