import React from 'react';
import './App.css';
import { Navbar } from './shared/navbar/Navbar';
import { Icon } from './shared/icon/Icon'
import { MainView } from './components/main-view/MainView';
import styled from '@emotion/styled';
import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { Home } from './pages/Home';
import { DBSetTest, app, db } from './services/database/realtimeDB'
import { doc } from 'firebase/firestore';
import { Content, dbConvertToContent } from './components/content/content';

const location = new ReactLocation();

const Root = styled.div`
  display: flex;
  flex-direction: row;
`

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const testContent: Content = {
    title: "test1",
    image: "https://2e.aonprd.com/Images/Ancestries/Kobold01.png",
    category: "testCategory",
    id: crypto.randomUUID(),
    postDate: new Date().toDateString()
  }
  DBSetTest(testContent)
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
