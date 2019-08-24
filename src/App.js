import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import Pics from "./components/Pics/Pics"
import {scoreCount} from "./components/Pics/arrayShuffle"

function App() {
  return (
    <Wrapper>
      <Header />
      <scoreCount />
      <Pics />
    </Wrapper>
  );
}

export default App;
