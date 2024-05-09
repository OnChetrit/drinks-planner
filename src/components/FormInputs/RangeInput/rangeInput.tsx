'use client';

import { FC } from 'react';
import s from './rangeInput.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const RangeInput: FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className={s.root}>
      <label htmlFor={label} className={s.label}>
        {label}
      </label>
      <input className={s.input} type='range' id={label} name={name} {...rest} />
    </div>
  );
};

export default RangeInput;
