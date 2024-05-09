'use client';

import { FC } from 'react';
import s from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  name: string;
  placeholder?: string;
  error?: string | null;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  ...rest
}) => {
  return (
    <div className={s.root}>
      <label htmlFor={label} className={s.label}>
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        className={s.input}
        disabled={disabled}
        {...rest}
      />
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};

export default Input;
