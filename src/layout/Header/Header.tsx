import { useNavigate } from 'react-router-dom';
import classes from './Header.module.scss';
import { AppRoutes } from 'enum/AppRoutes';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={classes.header}>
      <button onClick={() => navigate(AppRoutes.Home)} className={classes.button}>
        Home
      </button>
      <div className={classes.buttonWrapper}>
        <button onClick={() => navigate(AppRoutes.Weather)} className={classes.button}>
          Weather
        </button>
        <button onClick={() => navigate(AppRoutes.ToDo)} className={classes.button}>
          ToDo
        </button>
      </div>
    </header>
  );
};

export default Header;
