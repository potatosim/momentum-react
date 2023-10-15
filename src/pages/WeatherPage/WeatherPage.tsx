import { getWeatherSelector } from 'handlers/selectors';
import { setCityValue } from 'handlers/weatherSlice';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { ChangeEvent, useEffect } from 'react';
import { getWeather } from 'thunks';
import Loader from 'components/Loader';
import classes from './WeatherPage.module.scss';

const WeatherPage = () => {
  const { city, description, humidity, icon, temperature, windSpeed, isError, isLoading } =
    useAppSelector(getWeatherSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWeather(city));
  }, []);

  if (isLoading) {
    <div className={classes.weatherWrapper}>
      <Loader />
    </div>;
  }

  return (
    <div className={classes.weatherWrapper}>
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
        <div className={classes.text}>Error! Please, try another city.</div>
      ) : (
        <>
          <div className={classes.iconWrapper}>
            <i className={`${classes.icon} owf owf-${icon}`} />
            <div className={classes.text}>{Math.ceil(temperature)} °C</div>
          </div>
          <div className={classes.text}>{description}</div>
          <div className={classes.text}>humidity: {humidity}%</div>
          <div className={classes.text}>wind speed: {windSpeed} m/s</div>{' '}
        </>
      )}
    </div>
  );
};

export default WeatherPage;
