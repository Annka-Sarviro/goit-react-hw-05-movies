import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import AppBar from './AppBar';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <AppBar />
      <Outlet />
    </>
  );
};
