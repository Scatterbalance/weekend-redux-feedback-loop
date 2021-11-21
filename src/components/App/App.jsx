import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Feeling />}></Route>
          <Route path = "/understanding" element={<Understanding />}></Route>
          <Route path = "/supported" element={<Supported />}></Route>
          <Route path = "/comments" element={<Comments />}></Route>
          <Route path = "/review" element={<Review />}></Route>
        </Routes>



      </BrowserRouter>
    </div>
  );
}

export default App;
