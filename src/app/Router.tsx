import { BrowserRouter, Route, Routes } from 'react-router';
import SignIn from './routes/SignIn.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
