import { LocalStorageKeys } from 'enum/LocalStorageKeys';
import { IToDoItem } from 'handlers/toDoSlice';

export const saveValueToLocalStorage = (key: LocalStorageKeys, value: string) => {
  localStorage.setItem(key, value);
};

export const getValueFromLocalStorage = (key: LocalStorageKeys) => {
  const valueFromStorage = localStorage.getItem(key);

  return valueFromStorage;
};

export const saveToDosToLocalStorage = (value: IToDoItem[]) => {
  localStorage.setItem(LocalStorageKeys.ToDos, JSON.stringify(value));
};

export const getToDosFromLocalStorage = (): IToDoItem[] => {
  const valueFromStorage = localStorage.getItem(LocalStorageKeys.ToDos);
  return valueFromStorage ? JSON.parse(valueFromStorage) : [];
};
