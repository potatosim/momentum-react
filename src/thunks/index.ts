import WeatherApi from 'api/WeatherApi';
import { createGetWeatherThunk } from './createGetWeatherThunk';
import { createGetImageThunk } from './createGetImageThunk';
import ImageApi from 'api/ImageApi';

const weatherApi = new WeatherApi();
const imageApi = new ImageApi();

export const getWeather = createGetWeatherThunk(weatherApi);
export const getImage = createGetImageThunk(imageApi);
