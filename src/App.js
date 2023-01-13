// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode]= useState('light');
  const [alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0c165a';
      showAlert('Dark Mode enabled','success');
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode enabled','success');

    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" modeType={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">      
      <Routes>
      <Route exact path="/" element={<TextForm heading="Enter the text to analyze" modeType={mode} showAlert={showAlert}/>}/>
      <Route exact path="/about" element={<About/>}/>      
      </Routes>            
      </div> 
      </Router>     
    </>
  );
}

export default App;

