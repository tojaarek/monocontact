import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
