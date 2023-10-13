import classes from './Layout.module.scss';
import Main from 'layout/Main';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import { Outlet } from 'react-router-dom';
import { FC } from 'react';

interface LayoutProps {
  backgroundImg: string;
}

const Layout: FC<LayoutProps> = ({ backgroundImg }) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImg})` }} className={classes.layoutWrapper}>
      <div className={classes.contentWrapper}>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
