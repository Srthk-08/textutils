// import logo from './logo.svg';
// import About from './components/About';
import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Route,
//   // Link,
//   Routes // switch ka replacement
// } from 'react-router-dom'; // switch ne work krna bnd kr diya

function App() {
  const [mode, setMode] = useState('light');   // wheather dark mode is enabled or not
  const [alert, setAlert] = useState('');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert('null');
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      document.title = 'TextUtils-Dark';
      showAlert("Dark Mode is Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils-Light';
      showAlert("Light Mode is Enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}> exact path ko exactly match krta h */}
            {/* </Route> */}
            {/* <Route exact path="/" element= */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
           {/* }> */}
           {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* // </Router> */}


      {/* <Navbar title="TextUtils" aboutText="About" toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
      </div> */}

      {/* <Navbar title="TextUtils" about="About Us" /> */}
      {/* <Navbar about="About Us" /> */}
      {/* <Navbar /> */}

      {/* <Navbar title="TextUtils" about="About Us" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"/>
      </div> */}

      {/* <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-5">
        <About />
      </div> */}
    </>
  );
}

export default App;
