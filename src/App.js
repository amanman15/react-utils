import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import TextArea from './components/TextArea';

function App() {
  const[mode, setMode]=useState("light")

  const toggleMode = () => {
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#284F8F" 
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
  }}

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} />
    {/* <About button="Enable Dark Mode"/> */}
    <TextArea mode={mode}/>
    </>
  );
}

export default App;