import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';

import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='post/:id' element={<PostPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
