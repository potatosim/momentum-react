import { FC, PropsWithChildren } from 'react';
import classes from './Main.module.scss';
import { NextButton, PrevButton } from 'static';
import { useAppDispatch } from 'hooks/reduxHooks';

import { setImageFromStore } from 'handlers/imageSlice';

const Main: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  return (
    <main className={classes.main}>
      <button className={classes.button} onClick={() => dispatch(setImageFromStore())}>
        <PrevButton />
      </button>
      {children}
      <button className={classes.button} onClick={() => dispatch(setImageFromStore())}>
        <NextButton />
      </button>
    </main>
  );
};

export default Main;
