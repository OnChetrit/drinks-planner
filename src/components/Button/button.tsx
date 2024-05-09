import React, { FC, ReactNode } from 'react';
import s from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ variant, children, ...rest }) => {
  return (
    <button className={s.root} {...rest}>
      {children}
    </button>
  );
};

export default Button;
