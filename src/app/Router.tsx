import { BrowserRouter, Route, Routes } from 'react-router';
import AuthorizationLayout from '../features/authorization/components/AuthorizationLayout.tsx';
import SignIn from './routes/SignIn.tsx';
import SetPassword from './routes/SetPassword.tsx';
import ProvidePassword from './routes/ProvidePassword.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'auth'} element={<AuthorizationLayout />}>
          <Route path={'set-password'} element={<SetPassword />} />
          <Route path={'provide-password'} element={<ProvidePassword />} />
          <Route index path={'*'} element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
