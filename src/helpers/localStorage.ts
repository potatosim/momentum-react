const CITY_KEY = 'city';

export const saveCityToLocalStorage = (city: string) => {
  localStorage.setItem(CITY_KEY, city);
};

export const getCityFromLocalStorage = () => {
  const city = localStorage.getItem(CITY_KEY);

  return city;
};
