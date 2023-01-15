import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showALert  = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },3000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showALert(" Dark Mode Has Enable. ","success")
    }else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showALert(" Normal Mode Has Enable. ","success")
    }
  }
  return (
    <>
{/* <Navbar title={3}/> */}
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
      {/* <Routes>
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showALert} />} />
      </Routes> */}
      <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showALert}/>
</div>
{/* <TextForm  heading="Enter The Text Here" mode={mode} showAlert={showALert}/> */}
{/* </Router> */}
   </>
  );
}

export default App;