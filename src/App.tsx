import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from './shared/navbar/Navbar';
import { Icon } from './shared/icon/Icon'
import { MainView } from './components/main-view/main-view';
import styled from '@emotion/styled';

const Root = styled.div`
  display: flex;
  flex-direction: row;
`

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Root>
      <Icon onClick={()=> setIsOpen(!isOpen)}/>
      <Navbar isOpen = {isOpen}></Navbar>
      <MainView></MainView>
    </Root>
  );
}

export default App;
