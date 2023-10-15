import ToDoInput from './ToDoInput/ToDoInput';
import ToDoList from './ToDoList/ToDoList';
import classes from './ToDoPage.module.scss';

const ToDoPage = () => {
  return (
    <div className={classes.toDosWrapper}>
      <ToDoInput />
      <ToDoList />
    </div>
  );
};

export default ToDoPage;
