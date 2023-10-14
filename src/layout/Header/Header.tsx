import { useNavigate } from 'react-router-dom';
import classes from './Header.module.scss';
import { AppRoutes } from 'enum/AppRoutes';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { getImageSelector } from 'handlers/selectors';
import { setImageTag } from 'handlers/imageSlice';
import { ChangeEvent } from 'react';
import { getImage } from 'thunks';

const Header = () => {
  const navigate = useNavigate();
  const { tag } = useAppSelector(getImageSelector);
  const dispatch = useAppDispatch();
  return (
    <header className={classes.header}>
      <button onClick={() => navigate(AppRoutes.Home)} className={classes.button}>
        Home
      </button>
      <input
        value={tag}
        className={classes.inputTags}
        placeholder="Введите тег для выбора фона"
        onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setImageTag(e.target.value))}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            dispatch(getImage(tag));
          }
        }}
      />
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
