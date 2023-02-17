import React from 'react';
import './App.css';
import { Navbar } from './shared/navbar/Navbar';
import { Icon } from './shared/icon/Icon'
import { MainView } from './components/main-view/MainView';
import styled from '@emotion/styled';
import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { Home } from './pages/Home';
import { Content } from './components/content/content';
import { DBSetTest } from './services/database/realtimeDB';

const location = new ReactLocation();

const Root = styled.div`
  display: flex;
  flex-direction: row;
`

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  // const testContent: Content = {
  //   title: "test2",
  //   image: "https://img.finalfantasyxiv.com/lds/promo/h/A/eqkthVf5uqxgBzUv66zhucFFh4.png",
  //   category: "testCategory2",
  //   id: crypto.randomUUID(),
  //   postDate: new Date().toDateString()
  // }
  return (
    <Router
      location={location}
      routes={[
        {
          path: "/", element: <Home />
        }
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
