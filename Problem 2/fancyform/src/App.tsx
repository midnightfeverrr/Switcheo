import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from './components/particles';
import Header from './components/header';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="App">
      <Particles />
      <Header />
      <InputForm />
    </div>
  );
}

export default App;
