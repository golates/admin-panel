import PasswordInput from '../../component/PasswordInput/PasswordInput.tsx';

const SetPassword = () => {
  return (
    <>
      <h2 className={'text-3xl font-semibold text-center pt-5'}>Set Password</h2>
      <p className={'text-gray-400 text-center pb-2'}>Enter the password you will use to log in</p>
      <div className={'my-4'}>
        <PasswordInput name={'password'} label={'PASSWORD'} />
      </div>
    </>
  );
};

export default SetPassword;
