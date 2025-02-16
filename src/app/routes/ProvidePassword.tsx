import PasswordInput from '../../component/PasswordInput/PasswordInput.tsx';

const ProvidePassword = () => {
  return (
    <>
      <h2 className={'text-3xl font-semibold text-center pt-5'}>Sign In</h2>
      <p className={'text-gray-400 text-center pb-2'}>
        It looks like an account associated with this e-mail address already exists
      </p>
      <div className={'my-4'}>
        <PasswordInput name={'password'} label={'PASSWORD'} />
      </div>
    </>
  );
};

export default ProvidePassword;
