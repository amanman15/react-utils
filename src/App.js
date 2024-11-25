import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import TextArea from './components/TextArea';
import Alert from './components/Alert';

function App() {
  const[mode, setMode]=useState("light")
  const[alert, setAlert]=useState(null)
  const showAlert = (message, type) => {
    setAlert({      
      msg:message,
      type:type})
    setTimeout(()=>{
      setAlert(null)
    },3000)

  }
  const toggleMode = () => {
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#284F8F"
      showAlert("Dark Mode has been enabled", "success") 
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light Mode has been enabled", "success") 
  }}

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    {/* <About button="Enable Dark Mode"/> */}
    <TextArea showAlert={showAlert} mode={mode}/>
    </>
  );
}

export default App;