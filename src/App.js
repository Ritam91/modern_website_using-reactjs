import React from 'react'
import './App.css';

import {Blog , Features , Footer , Header , Possibility , WhatGPT} from './containers';
import {CTA , Brand , Navbar} from './components';

const App = () => {
  return (
    <div>
      <div className="App ">
        <div className="gradient__bg">
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  )
}

export default App