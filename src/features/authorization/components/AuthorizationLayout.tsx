import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import ProgressBar from '../../../component/ProgressBar/ProgressBar.tsx';
import { HiArrowLeft } from 'react-icons/hi2';

const AuthorizationLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [step, setStep] = useState(5);

  useEffect(() => {
    let s = 5;
    if (location.pathname === '/auth/set-password') s = 20;
    if (location.pathname === '/auth/provide-password') s = 20;

    setStep(s);
  }, [location]);

  const handleGoBackToPreviousRoute = async () => {
    await navigate(-1);
  };

  return (
    <section className={'h-dvh flex justify-center sm:pt-20 bg-gray-200'}>
      <div className={'sm:w-[500px] w-full bg-white rounded sm:h-fit'}>
        <div className={'border-b flex justify-between py-10 items-center'}>
          <div className={'text-3xl basis-[25%] pl-10'}>
            {step !== 5 && (
              <HiArrowLeft className={'cursor-pointer'} onClick={() => void handleGoBackToPreviousRoute()} />
            )}
          </div>
          <div className={'basis-[50%] h-[28px] flex items-center'}>
            <ProgressBar value={step} />
          </div>
          <div className={'basis-[25%]'} />
        </div>

        <div className={'px-10 mb-16'}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthorizationLayout;
