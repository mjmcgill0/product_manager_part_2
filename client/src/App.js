import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './view/Main';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Main/>} />
            <Route path="/products/:id" element ={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
