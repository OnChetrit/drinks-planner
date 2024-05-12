'use client';

import { createEvent } from '@/app/actions';
import React, { useMemo } from 'react';
import s from './addEventForm.module.scss';

import Button from '../Button';
import { useAddEventContext, useAddEventDispatchContext } from '@/context/eventContextProvider';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const AddEventForm = () => {
  const dispatch = useAddEventDispatchContext();
  const context = useAddEventContext();

  const formStep = useMemo(
    () => (
      <>
        <StepOne hidden={context.currentStep !== 1} />
        <StepTwo hidden={context.currentStep !== 2} />
        <StepThree hidden={context.currentStep !== 3} />
      </>
    ),
    [context?.currentStep]
  );

  const handleSubmit = () => {
    dispatch({ type: 'change_step' });
  };

  const handleBack = () => {
    dispatch({ type: 'step_back' });
  };

  return (
    <form action={createEvent} className={s.root}>
      {formStep}

      {context.currentStep !== 1 && (
        <Button variant='primary' type='button' onClick={handleBack}>
          Back
        </Button>
      )}

      <Button
        variant='primary'
        type='button'
        onClick={handleSubmit}
        hidden={context.currentStep !== 3}
      >
        Continue
      </Button>

      <Button
        variant='primary'
        type='submit'
        onClick={handleSubmit}
        hidden={context.currentStep === 3}
      >
        Submit
      </Button>
    </form>
  );
};

export default AddEventForm;
