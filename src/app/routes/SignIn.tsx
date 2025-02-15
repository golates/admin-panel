import ProgressBar from '../../component/ProgressBar/ProgressBar.tsx';
import Input from '../../component/Input/Input.tsx';
import Button from '../../component/Button/Button.tsx';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';

const SignIn = () => {
  return (
    <section className={'h-dvh flex justify-center sm:items-center bg-gray-200'}>
      <div className={'sm:w-[500px] w-full bg-white rounded'}>
        <div className={'border-b flex justify-center py-10'}>
          <div className={'basis-[50%]'}>
            <ProgressBar value={10} />
          </div>
        </div>
        <div className={'px-10'}>
          <h2 className={'text-3xl font-semibold text-center pt-5 pb-2'}>Sign In</h2>
          <div className={'my-4'}>
            <Input name={'email'} label={'E-MAIL ADDRESS'} />
          </div>
          <div className={'mb-2'}>
            <Button type={'btn-outline'}>CONTINUE BY E-MAIL</Button>
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
            <Button>
              <div className={'flex justify-center items-center'}>
                <div className={'mb-1 mr-2 text-xl'}>
                  <FaApple />
                </div>
                CONTINUE WITH APPLE
              </div>
            </Button>
          </div>
          <div className={'mb-4'}>
            <Button>
              <div className={'flex justify-center items-center'}>
                <div className={'mb-1 mr-2 text-xl'}>
                  <FaGoogle />
                </div>
                CONTINUE WITH GOOGLE
              </div>
            </Button>
          </div>
          <div className={'mb-16'}>
            <Button>
              <div className={'flex justify-center items-center'}>
                <div className={'mb-1 mr-2 text-xl'}>
                  <FaFacebook />
                </div>
                CONTINUE WITH FACEBOOK
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
