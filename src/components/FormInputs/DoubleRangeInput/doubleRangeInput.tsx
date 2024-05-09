'use client';

import { FC } from 'react';
import s from './doubleRangeInput.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const DoubleRangeInput: FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className={s.root}>
      <label htmlFor={label} className={s.label}>
        {label}
      </label>
      <fieldset>
        <input className={s.input} type='range' id={label} name={name} {...rest} />
        <input className={s.input} type='range' id={label} name={name} {...rest} />
      </fieldset>
    </div>
  );
};

export default DoubleRangeInput;
