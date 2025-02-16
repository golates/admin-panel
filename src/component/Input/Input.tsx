import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string | ReactNode;
  name: string;
  error?: string;
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({ label, error, name, ...inputProps }, ref) => {
  return (
    <div className="relative float-label-input">
      <input
        {...inputProps}
        ref={ref}
        name={name}
        type="text"
        placeholder={''}
        aria-invalid={error ? 'true' : 'false'}
        aria-errormessage={error}
        className={`text-sm block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 appearance-none leading-normal font-semibold ${error ? 'border-red-600 rounded-b-none mb-10' : 'focus:border-black'}`}
      />
      <label
        htmlFor={name}
        className="text-sm absolute top-[0.85rem] left-1 text-gray-400 pointer-events-none transition duration-300 ease-in-outbg-white px-2 text-grey-darker"
      >
        {label}
      </label>
      {error && (
        <span className={'text-sm absolute bg-red-600 text-white w-full rounded-b top-[46px] px-3 py-1'}>{error}</span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
