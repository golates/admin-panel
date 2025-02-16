import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react';

interface PasswordInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string | ReactNode;
  name: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ label, name, ...inputProps }, ref) => {
  const [type, setType] = useState<'password' | 'text'>('password');

  const handleToggleType = () => {
    if (type === 'password') setType('text');
    if (type === 'text') setType('password');
  };

  return (
    <div className="relative float-label-input">
      <input
        {...inputProps}
        ref={ref}
        type={type}
        id={name}
        placeholder={''}
        className="text-sm block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 pl-3 pr-14 appearance-none leading-normal focus:border-black font-semibold"
      />
      <label
        htmlFor={name}
        className="text-sm absolute top-[0.85rem] left-1 text-gray-400 pointer-events-none transition duration-300 ease-in-outbg-white px-2 text-grey-darker"
      >
        {label}
      </label>
      <span
        className={'absolute cursor-pointer text-gray-400 text-sm font-[300] top-[0.85rem] right-3'}
        onClick={handleToggleType}
      >
        {type === 'password' ? 'SHOW' : 'HIDE'}
      </span>
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
