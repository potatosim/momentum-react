import { RootState } from 'store/store';

export const getWeatherSelector = (state: RootState) => state.weather;
export const getImageSelector = (state: RootState) => state.image;
export const getToDoSelector = (state: RootState) => state.toDo;
