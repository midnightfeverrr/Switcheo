import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stars from './components/particles';
import Header from './components/header';
import Converter from './components/InputForm';

function App() {
  return (
    <div className="App">
      <Stars />
      <Header />
      <Converter />
    </div>
  );
}

export default App;
