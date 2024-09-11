import { Outlet } from 'react-router-dom';
import cn from 'classnames';

import AppHeader from '../AppHeader/AppHeader';
import classes from '../app/app.module.scss';

const Layout = () => {
  return (
    <>
      <div className={cn(classes.app)}>
        <AppHeader />
        <Outlet />
      </div>
    </>
  );
};

export { Layout };
