import { IToDoItem, completeTodo, deleteTodo } from 'handlers/toDoSlice';
import classes from './ToDoItem.module.scss';
import { FC } from 'react';
import { useAppDispatch } from 'hooks/reduxHooks';
import { DeleteTodo } from 'static';

interface ToDoItemProps {
  todo: IToDoItem;
}

const ToDoItem: FC<ToDoItemProps> = ({ todo }) => {
  const { completed, id, message } = todo;
  const dispatch = useAppDispatch();

  return (
    <div className={classes.todoItemWrapper} key={id}>
      <input
        className={classes.todoCheck}
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(completeTodo(id))}
      />
      <span className={`${classes.todoMessage} ${completed ? classes.completeTodo : ''}`}>
        {message}
      </span>
      <button
        disabled={!completed}
        className={classes.todoDelete}
        onClick={() => dispatch(deleteTodo(id))}
      >
        <DeleteTodo />
      </button>
    </div>
  );
};

export default ToDoItem;
