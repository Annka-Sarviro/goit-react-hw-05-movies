import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import AppBar from './AppBar';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <GlobalStyle />
      <Toaster />
      <AppBar />
      <Outlet />
    </Container>
  );
};
