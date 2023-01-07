import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/Home'
import {BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/test' element={<div>gfd</div>}/>
        </Routes>
    </Router>
  </React.StrictMode>
);
