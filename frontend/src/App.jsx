import { useState } from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import {BrowserRouter} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <Navbar></Navbar>
      <Login></Login>
    </BrowserRouter> 
  )
}

export default App
