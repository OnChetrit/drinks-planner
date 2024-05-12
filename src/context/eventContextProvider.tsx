'use client';

import React, { FC, createContext, useReducer, Dispatch, useContext } from 'react';

// Define the types for context values
type FormState = {
  currentStep: number;
};

type DispatchType = Dispatch<{ type: string; payload?: any }>;

// Create the context providers
export const AddEventContext = createContext<FormState | null>({
  currentStep: 1,
});

const initialState: FormState = {
  currentStep: 1,
};

export const AddEventDispatchContext = createContext<DispatchType | null>(null);

const addEventFormReducer = (formState: FormState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'step_back': {
      return {
        ...formState,
        currentStep: formState.currentStep - 1,
      };
    }
    case 'change_step': {
      return {
        ...formState,
        currentStep: formState.currentStep + 1,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

type EventContextProviderProps = {
  children: React.ReactNode;
};

const EventContextProvider: FC<EventContextProviderProps> = ({ children }) => {
  const [formstate, dispatch] = useReducer(addEventFormReducer, initialState);

  return (
    <AddEventContext.Provider value={formstate}>
      <AddEventDispatchContext.Provider value={dispatch}>
        {children}
      </AddEventDispatchContext.Provider>
    </AddEventContext.Provider>
  );
};

export const useAddEventContext = () => {
  const context = useContext(AddEventContext);
  if (!context) {
    throw Error('useTodoContext must be used inside TodoContext.Provider');
  }
  return context;
};

export const useAddEventDispatchContext = () => {
  const context = useContext(AddEventDispatchContext);
  if (!context) {
    throw Error('useTodoContext must be used inside TodoContext.Provider');
  }
  return context;
};

export default EventContextProvider;
