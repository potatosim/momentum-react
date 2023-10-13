import WeatherApi from 'api/WeatherApi';
import { createGetWeatherThunk } from './createGetWeatherThunk';

const weatherApi = new WeatherApi();

export const getWeather = createGetWeatherThunk(weatherApi);
