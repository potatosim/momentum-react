import { createAsyncThunk } from '@reduxjs/toolkit';
import WeatherApi from 'api/WeatherApi';
import { SlicesActionTypes } from 'enum/SliceActionTypes';

export function createGetWeatherThunk(api: WeatherApi) {
  return createAsyncThunk(
    SlicesActionTypes.GetWeather,
    async function (payload: string, { rejectWithValue }) {
      try {
        const response = await api.getWeather(payload);
        return response;
      } catch {
        return rejectWithValue({});
      }
    },
  );
}
