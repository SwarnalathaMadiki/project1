import logo from './logo.svg';
//import './App.css';
//import { Registration } from './components/regform.component';
import React from 'react';
import { Menu } from './menu';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routers/approuter';

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
