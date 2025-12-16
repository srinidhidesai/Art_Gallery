import Welcome from './Welcome.jsx';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './Aboutus.jsx';
import Navbar from './Navbar.jsx';
import Signup from './Signup.jsx';
import Sculptures from './Sculptures.jsx';
import Sell from './Sell.jsx';
import Paint from './Paint.jsx';
import Products from './Products.jsx';
import Digitalart from './Digitalart.jsx';
import Review from './Review.jsx';
import Login from './Login.jsx';
function App() {
  return (
    <div className="App">
        <Navbar />
      
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<Welcome/>}  />
          <Route path="*" element={<h1>page not found</h1>}/>
          <Route path="/" element={<Welcome/>} />
          <Route path='/about-us' element={<Aboutus/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Sell' element={<Sell/>}/>
          <Route path='/Paint' element={<Paint/>}/>
          <Route path='/Sculptures' element={<Sculptures/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/Digitalart' element={<Digitalart/>}/>
          <Route path='/Review' element={<Review/>}/>
          <Route path='/Login' element={<Login/>}/>
         
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

