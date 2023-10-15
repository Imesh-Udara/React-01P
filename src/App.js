
import './App.css';
import Home from './pages/Home';
import React, { Component }  from 'react';
import { useState } from 'react';

function App() {
  function buttonClick(){
    console.log("Button is clicked");
    alert("Button is clicked");
  }
  
  return (
    <div>
      <h1>React Event Handling</h1>
      <br /><hr />
      <button onClick={buttonClick}>Click Here</button>
    </div>
  );
}

export default App;
