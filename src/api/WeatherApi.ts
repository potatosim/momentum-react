import axios from 'axios';

interface MainInfo {
  temp: number;
  humidity: number;
}

interface Wind {
  speed: number;
}

interface Weather {
  description: string;
  id: number;
}

interface WeatherApiResponse {
  weather: Weather[];
  main: MainInfo;
  wind: Wind;
}

export default class WeatherApi {
  async getWeather(city: string) {
    const { data } = await axios.get<WeatherApiResponse>(
      `${process.env.REACT_APP_WEATHER_API_BASE_URL}/weather`,
      {
        params: {
          q: city,
          appid: process.env.REACT_APP_WEATHER_API_KEY,
          units: 'metric',
          lang: 'en',
        },
      },
    );
    return {
      description: data.weather[0].description,
      temperature: data.main.temp,
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
      icon: data.weather[0].id,
    };
  }
}
