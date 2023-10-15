import { FC, PropsWithChildren } from 'react';
import classes from './Main.module.scss';
import { useAppDispatch } from 'hooks/reduxHooks';

import { setImageFromStore } from 'handlers/imageSlice';

const Main: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  return (
    <main className={classes.main}>
      <button className={classes.buttonPrev} onClick={() => dispatch(setImageFromStore())} />

      {children}
      <button className={classes.buttonNext} onClick={() => dispatch(setImageFromStore())} />
    </main>
  );
};

export default Main;
