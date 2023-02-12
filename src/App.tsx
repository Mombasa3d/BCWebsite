import React from 'react';
import './App.css';
import { Navbar } from './shared/navbar/Navbar';
import { Icon } from './shared/icon/Icon'
import { MainView } from './components/main-view/MainView';
import styled from '@emotion/styled';
import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { Home } from './pages/Home';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const Root = styled.div`
  display: flex;
  flex-direction: row;
`

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDy7abPH96UTD3l1ckt-MymJph0Q_ajwpk",
  authDomain: "bcwebsite-79ae8.firebaseapp.com",
  projectId: "bcwebsite-79ae8",
  storageBucket: "bcwebsite-79ae8.appspot.com",
  messagingSenderId: "1054680442284",
  appId: "1:1054680442284:web:3a450c781d30c9884f4609",
  measurementId: "G-2F08VTZQXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const location = new ReactLocation();

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
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
