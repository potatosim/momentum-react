import { AppRoutes } from 'enum/AppRotes';
import Layout from 'layout/Layout';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<Layout />}></Route>
    </Routes>
  );
};

export default AppRouter;
