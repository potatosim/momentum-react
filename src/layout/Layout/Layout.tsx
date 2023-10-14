import classes from './Layout.module.scss';
import Main from 'layout/Main';
import Header from 'layout/Header';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { getImageSelector } from 'handlers/selectors';
import { getImage } from 'thunks';

const Layout = () => {
  const [src, setSrc] = useState('');
  const { tag, background, isLoading } = useAppSelector(getImageSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getImage(tag));
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => {
      setSrc(`url(${img.src})`);
    };
  }, [background]);

  return (
    <div
      style={{
        backgroundImage: src,
        transition: '0.25s all ease-in-out',
        backdropFilter: isLoading ? 'blur(10px)' : '',
      }}
      className={classes.layoutWrapper}
    >
      <div className={classes.contentWrapper}>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
};

export default Layout;
