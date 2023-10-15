import { AppRoutes } from 'enum/AppRoutes';
import Layout from 'layout/Layout';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import ToDoPage from 'pages/ToDoPage';
import WeatherPage from 'pages/WeatherPage';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<Layout />}>
        <Route index element={<MainPage />}></Route>
        <Route path={AppRoutes.Weather} element={<WeatherPage />}></Route>
        <Route path={AppRoutes.ToDo} element={<ToDoPage />}></Route>
        <Route path={AppRoutes.NotFoundPage} element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
