import React from 'react'
import '../Styles/Home.css'
import MainThird from './maincontent/MainThird';
import MainSec from './maincontent/MainSec';
import MainFirst from './maincontent/MainFirst';
const Home = () => {
  return (
    <>
      <div id='main-container'>
        <MainFirst></MainFirst>
        <MainSec></MainSec>
        <MainThird></MainThird>
      </div>
    </>
  );
}

export default Home
