import { LocalStorageKeys } from 'enum/LocalStorageKeys';

export const saveValueToLocalStorage = (key: LocalStorageKeys, value: string) => {
  localStorage.setItem(key, value);
};

export const getValueFromLocalStorage = (key: LocalStorageKeys) => {
  const valueFromStorage = localStorage.getItem(key);

  return valueFromStorage;
};
