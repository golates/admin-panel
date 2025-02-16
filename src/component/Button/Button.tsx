import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: string | ReactNode;
}

const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return <button {...buttonProps}>{children}</button>;
};

export default Button;
