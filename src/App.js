import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


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
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <Routes>
    <Route exact path="/about" element={<About button="Enable Dark Mode"/>}/>
    <Route exact path="/textArea" element={<TextArea showAlert={showAlert} mode={mode}/>}/>
    <Route exact path="/home" element={<Home mode={mode} />} />
      </Routes> 
      </Router>   
    </>
  );
}

export default App;