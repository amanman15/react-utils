import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const[mode, myMode]=useState("light")
  // const changeMode = () => {
  //   if (mode==="light"){
  //     myMode("dark")
  //   }
  // }
  document.body.style.backgroundColor="purple"
  const chnageColor = () => {
    if (document.body.style.backgroundColor==="purple"){
        document.body.style.backgroundColor="black"
    }
    else{
      document.body.style.backgroundColor="purple"
    }
  }

  return (
    <>
    <Navbar background="dark"/>
    <div className="container my-3">
    <div className="btn btn-primary" onClick={chnageColor}>Click to change the background color
    </div>
    </div>
    </>
  );
}

export default App;
