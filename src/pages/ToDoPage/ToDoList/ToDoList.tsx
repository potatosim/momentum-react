import { getToDoSelector } from 'handlers/selectors';
import { useAppSelector } from 'hooks/reduxHooks';
import classes from './ToDoList.module.scss';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const { toDos } = useAppSelector(getToDoSelector);

  if (!toDos.length) {
    return <div className={classes.addText}>Add new ToDo!</div>;
  }
  return (
    <div className={classes.todoList}>
      {toDos.map((todo) => (
        <ToDoItem todo={todo} />
      ))}
    </div>
  );
};

export default ToDoList;
