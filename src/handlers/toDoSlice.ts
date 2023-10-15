import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getToDosFromLocalStorage, saveToDosToLocalStorage } from 'helpers/localStorage';
import { v4 as uuidv4 } from 'uuid';

export interface IToDoItem {
  id: string;
  message: string;
  completed: boolean;
}
interface ToDoInitial {
  toDos: IToDoItem[];
}

const initialState: ToDoInitial = {
  toDos: getToDosFromLocalStorage(),
};

const toDoSlice = createSlice({
  name: 'toDosSlice',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<string>) => {
      state.toDos.push({ id: uuidv4(), message: payload, completed: false });
      saveToDosToLocalStorage(state.toDos);
    },
    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      if (state.toDos.length) {
        state.toDos = state.toDos.filter((todo) => todo.id !== payload);
        saveToDosToLocalStorage(state.toDos);
      }
    },
    completeTodo: (state, { payload }: PayloadAction<string>) => {
      const completedTodo = state.toDos.find((todo) => todo.id === payload);
      if (completedTodo) {
        completedTodo.completed = !completedTodo.completed;
        saveToDosToLocalStorage(state.toDos);
      }
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = toDoSlice.actions;

export default toDoSlice.reducer;
