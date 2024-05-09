import React, { FC, createContext, useState, useReducer, Dispatch, useContext } from 'react';

// Define the types for context values
type FormState = {
  step_1: {
    title: string;
    description: string;
    start: string;
    end: string;
  };
  step_2: {
    members_count: string;
    gender_ratio: string;
    age_range: string;
    age_range_min: string;
    age_range_max: string;
  };
};

type DispatchType = Dispatch<{ type: string; payload: any }>;

// Create the context providers
export const AddEventContext = createContext<FormState | null>({
  step_1: { title: '', description: '', start: '', end: '' },
  step_2: {
    members_count: '',
    gender_ratio: '',
    age_range: '',
    age_range_min: '',
    age_range_max: '',
  },
});

const initialState: FormState = {
  step_1: { title: '', description: '', start: '', end: '' },
  step_2: {
    members_count: '',
    gender_ratio: '',
    age_range: '',
    age_range_min: '',
    age_range_max: '',
  },
};
export const AddEventDispatchContext = createContext<DispatchType | null>(null);

const addEventFormReducer = (formState: FormState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'step_1': {
      return {
        ...formState,
        step_1: action.payload,
      };
    }
    case 'step_2': {
      return {
        ...formState,
        step_2: action.payload,
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
  return useContext(AddEventContext);
};

export default EventContextProvider;
