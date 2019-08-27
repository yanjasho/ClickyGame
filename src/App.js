import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import Pics from "./components/Pics/Pics"

function App() {
  return (
    <Wrapper>
      <Header />
      <Pics />
    </Wrapper>
  );
}

export default App;