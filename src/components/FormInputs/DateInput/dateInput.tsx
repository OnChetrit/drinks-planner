'use client';

import { FC } from 'react';
import s from './dateInput.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: FC<InputProps> = ({ label, value, name, ...rest }) => {
  return (
    <div className={s.root}>
      <label htmlFor={label} className={s.label}>
        {label}
      </label>
      <input type='datetime-local' id={label} name={name} className={s.input} {...rest} />
    </div>
  );
};

export default Input;
