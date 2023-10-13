import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCityFromLocalStorage, saveCityToLocalStorage } from 'helpers/localStorage';
import { getWeather } from 'thunks';

interface WeatherInitial {
  city: string;
  description: string;
  temperature: number;
  windSpeed: number;
  humidity: number;
  icon: number;
  isError: boolean;
  isLoading: boolean;
}

const initialState: WeatherInitial = {
  city: getCityFromLocalStorage() || 'Минск',
  description: '',
  temperature: 0,
  windSpeed: 0,
  humidity: 0,
  icon: 0,
  isError: false,
  isLoading: false,
};

const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
    setCityValue: (state, { payload }: PayloadAction<string>) => {
      state.city = payload;
      saveCityToLocalStorage(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getWeather.fulfilled,
        (state, { payload: { description, humidity, icon, temperature, windSpeed } }) => {
          state.description = description;
          state.humidity = humidity;
          state.icon = icon;
          state.temperature = temperature;
          state.windSpeed = windSpeed;
          state.isLoading = false;
          state.isError = false;
        },
      )
      .addCase(getWeather.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { setCityValue } = weatherSlice.actions;

export default weatherSlice.reducer;
