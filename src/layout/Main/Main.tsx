import { FC, PropsWithChildren } from 'react';
import classes from './Main.module.scss';

const Main: FC<PropsWithChildren> = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};

export default Main;
