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
      <Route
        path={AppRoutes.Home}
        element={
          <Layout
            backgroundImg={
              'https://cs11.livemaster.ru/storage/topicavatar/600x450/a6/6a/34360531bcc1846236396ec05cc6b2cbc24a4u.jpg?h=onBiFfBK-59w0P7ItTawBg'
            }
          />
        }
      >
        <Route index element={<MainPage />}></Route>
        <Route path={AppRoutes.Weather} element={<WeatherPage />}></Route>
        <Route path={AppRoutes.ToDo} element={<ToDoPage />}></Route>
        <Route path={AppRoutes.NotFoundPage} element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
