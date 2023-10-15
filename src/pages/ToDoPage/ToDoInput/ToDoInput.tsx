import { addTodo } from 'handlers/toDoSlice';
import { useAppDispatch } from 'hooks/reduxHooks';
import { useState } from 'react';
import classes from './ToDoInput.module.scss';
import { AddTodo } from 'static';

const ToDoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const isButtonDisabled = inputValue.length ? false : true;

  return (
    <form
      className={classes.todoForm}
      autoComplete="false"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(addTodo(inputValue));
        setInputValue('');
      }}
    >
      <input
        className={classes.todoInput}
        value={inputValue}
        placeholder="[Enter Todo here]"
        onChange={(event) => setInputValue(event.currentTarget.value)}
      />
      <button disabled={isButtonDisabled} className={classes.btn}>
        <AddTodo />
      </button>
    </form>
  );
};

export default ToDoInput;
