import React from 'react';
import './App.css';
import FormContainer from './components/form/Form';
import Header from './components/header/Header'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <FormContainer />
      </BrowserRouter>

    </div>
  );
}

export default App;
