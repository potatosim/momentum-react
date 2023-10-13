import { RootState } from 'store/store';

export const getWeatherSelector = (state: RootState) => state.weather;
