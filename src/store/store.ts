import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherReducer from 'handlers/weatherSlice';
import imageReducer from 'handlers/imageSlice';
import toDoReducer from 'handlers/toDoSlice';

const rootReducer = combineReducers({
  weather: weatherReducer,
  image: imageReducer,
  toDo: toDoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
