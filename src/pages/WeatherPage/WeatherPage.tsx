import { getWeatherSelector } from 'handlers/selectors';
import { setCityValue } from 'handlers/weatherSlice';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { ChangeEvent, useEffect } from 'react';
import { getWeather } from 'thunks';
import classes from './WeatherPage.module.scss';
import Loader from 'components/Loader';

const WeatherPage = () => {
  const { city, description, humidity, icon, temperature, windSpeed, isError, isLoading } =
    useAppSelector(getWeatherSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWeather(city));
  }, []);

  return (
    <div className={classes.weatherWrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <input
            className={classes.input}
            value={city}
            onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setCityValue(e.target.value))}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                dispatch(getWeather(city));
              }
            }}
          />

          {isError ? (
            <div className={classes.text}>Ошибка! Такой город не найден.</div>
          ) : (
            <>
              <div className={classes.iconWrapper}>
                <i className={`${classes.icon} owf owf-${icon}`}></i>
                <div className={classes.text}>{Math.ceil(temperature)} °C</div>
              </div>
              <div className={classes.text}>{description}</div>
              <div className={classes.text}>влажность: {humidity}%</div>
              <div className={classes.text}>скорость ветра: {windSpeed.toFixed(1)} м/с</div>{' '}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default WeatherPage;
