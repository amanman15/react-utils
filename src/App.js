import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import TextArea from './components/TextArea';

function App() {
  const[mode, myMode]=useState("light")
  // const changeMode = () => {
  //   if (mode==="light"){
  //     myMode("dark")
  //   }
  // }
  document.body.style.backgroundColor="white"
  const chnageColor = () => {
    if (document.body.style.backgroundColor==="white"){
        document.body.style.backgroundColor="black"
    }
    else{
      document.body.style.backgroundColor="white"
    }
  }

  return (
    <>
    <Navbar background="dark"/>
    <div className="container my-3">
    <div className="btn btn-primary" onClick={chnageColor}>Click to change the background color
    </div>
    </div>
    {/* <About button="Enable Dark Mode"/> */}
    <TextArea/>
    </>
  );
}

export default App;
