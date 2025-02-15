import { ReactNode } from 'react';

interface InputProps {
  label: string | ReactNode;
  name: string;
}

const Input = ({ label, name }: InputProps) => {
  return (
    <div className="relative float-label-input">
      <input
        type="text"
        id={name}
        placeholder={''}
        className="text-sm block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 appearance-none leading-normal focus:border-black"
      />
      <label
        htmlFor={name}
        className="text-sm absolute top-[0.85rem] left-1 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
