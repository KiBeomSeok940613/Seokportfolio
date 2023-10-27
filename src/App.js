import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Globalstyle from './styles/Globalstyle';

import styled from 'styled-components';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';


import Hellovanilla from './component/right/Hellovanilla';

import Main from './component/real/Main';
import Nav from './component/real/Nav';

import Footer from './component/real/Footer';
import About from './component/contents/About';
import Skills from './component/contents/Skills';
import Content from './component/contents/Content';
import Loading from './component/contents/Loading';


const BgColor = styled.body`
  width: 100%;
  height: 100%;
  background-color: #fff;
`


function App() {

  return (
    // 나머지 스크롤 관련 로직을 이곳에 추가
  // display 함수를 React 스타일로 변경
  // 나머지 스크롤 위치와 스타일 관련 코드를 React 스타일로 변경
  
   <>   
   
    <Globalstyle />
    <Nav />
    <BgColor >

    </BgColor>
  
    

     
    
    <Footer/>
      
    <Routes>
      <Route path="/" element = {<Loading />} />
      <Route path="/main" element= {<Main />} />     
       <Route path="/about" element= {<About />} />     
      <Route path="/skills" element= {<Skills />} />     
      <Route path="/contents" element= {<Content />} />           
      <Route path="/hellovanilla" element= {<Hellovanilla />} />    
    </Routes> 


      {/* <Main /> */}
      
      {/* <About />
      
      <Content />
   
      <Skills />
     */}
  
 
   </>
  );
}

export default App;
