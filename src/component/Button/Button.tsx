import { ReactNode } from 'react';

interface ButtonProps {
  children: string | ReactNode;
  type?: 'btn-normal' | 'btn-outline';
}

const Button = ({ children, type = 'btn-normal' }: ButtonProps) => {
  return <button className={type}>{children}</button>;
};

export default Button;
