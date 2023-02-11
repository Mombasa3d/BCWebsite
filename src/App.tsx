import React from 'react';
import './App.css';
import { Navbar } from './shared/navbar/Navbar';
import { Icon } from './shared/icon/Icon'
import { MainView } from './components/main-view/MainView';
import styled from '@emotion/styled';
import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { Home } from './pages/Home';

const Root = styled.div`
  display: flex;
  flex-direction: row;
`

const location = new ReactLocation();

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: <Home /> }
      ]}>
      <Root>
        <Icon onClick={() => setIsOpen(!isOpen)} />
        <Navbar isOpen={isOpen}></Navbar>
        <MainView>
          <Outlet />
        </MainView>
      </Root>
    </Router>
  );
}

export default App;
