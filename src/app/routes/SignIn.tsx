import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import Input from '../../component/Input/Input.tsx';
import Button from '../../component/Button/Button.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { emailValPattern } from '../../utils/validation.patterns.ts';

const SignInForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    defaultValues: { email: '' },
  });

  const handleSubmitViaGoogle = async () => {
    await navigate('/auth/set-password');
  };

  const handleSubmitViaApple = async () => {
    await navigate('/auth/set-password');
  };

  const handleSubmitViaFacebook = async () => {
    await navigate('/auth/set-password');
  };

  const onSubmitViaEmail: SubmitHandler<{ email: string }> = async (data) => {
    if (data.email === 'test@test.com') {
      await navigate('/auth/provide-password');
    } else {
      await navigate('/auth/set-password');
    }
  };

  return (
    <form onSubmit={(event) => void handleSubmit(onSubmitViaEmail)(event)}>
      <h2 className={'text-3xl font-semibold text-center pt-5 pb-2'}>Sign In</h2>
      <div className={'my-4'}>
        <Input
          label={'E-MAIL ADDRESS'}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: emailValPattern,
              message: 'Invalid e-mail address',
            },
          })}
          type={'email'}
          error={errors.email?.message}
        />
      </div>
      <div className={'mb-2'}>
        <Button className={'btn-outline'}>CONTINUE BY E-MAIL</Button>
      </div>

      <div className={'flex items-center justify-center mb-2'}>
        <div className={'w-full'}>
          <hr />
        </div>
        <span className={'px-4 text-gray-400'}>Or</span>
        <div className={'w-full'}>
          <hr />
        </div>
      </div>

      <div className={'mb-4'}>
        <Button type={'button'} onClick={() => void handleSubmitViaApple()} className={'btn-normal'}>
          <div className={'flex justify-center items-center'}>
            <div className={'mb-1 mr-2 text-xl'}>
              <FaApple />
            </div>
            CONTINUE WITH APPLE
          </div>
        </Button>
      </div>
      <div className={'mb-4'}>
        <Button type={'button'} onClick={() => void handleSubmitViaGoogle()} className={'btn-normal'}>
          <div className={'flex justify-center items-center'}>
            <div className={'mb-1 mr-2 text-xl'}>
              <FaGoogle />
            </div>
            CONTINUE WITH GOOGLE
          </div>
        </Button>
      </div>
      <div>
        <Button type={'button'} onClick={() => void handleSubmitViaFacebook()} className={'btn-normal'}>
          <div className={'flex justify-center items-center'}>
            <div className={'mb-1 mr-2 text-xl'}>
              <FaFacebook />
            </div>
            CONTINUE WITH FACEBOOK
          </div>
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
