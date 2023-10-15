import { AppRoutes } from 'enum/AppRoutes';
import { useNavigate } from 'react-router-dom';
import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.pageWrapper}>
      <div className={classes.imageWrapper}>
        <img src="https://i.pinimg.com/736x/fe/4e/82/fe4e82e755122222288e340a5ff6b6ca.jpg" />
      </div>
      <p className={classes.notFoundText}>The page you are looking for can`t be found</p>
      <div>
        <button onClick={() => navigate(AppRoutes.Home)} className={classes.link}>
          Go back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
