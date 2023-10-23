import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Globalstyle from './styles/Globalstyle';

import styled from 'styled-components';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';
import { Container } from 'postcss';

import Hellovanilla from './component/right/Hellovanilla';
import Daegubank from './component/right/Daegubank';
import Main from './component/real/Main';
import Nav from './component/real/Nav';

import Footer from './component/real/Footer';
import About from './component/contents/About';
import Skills from './component/contents/Skills';
import Content from './component/contents/Content';

const Navtoppadding = styled.div`
    padding-top: 80px;

`






function App() {
  const location = useLocation ();
  const [contents, setContents] = useState (null);

  const handleContentClick = (content) => {
    setContents(content);
  };
  

  return (
    // 나머지 스크롤 관련 로직을 이곳에 추가
  // display 함수를 React 스타일로 변경
  // 나머지 스크롤 위치와 스타일 관련 코드를 React 스타일로 변경
  
   <>   
   
  
    <Nav />
      <Navtoppadding />   
    
    
    
    <Footer/>





    {/* <Left  />
   <Right /> */}
  
    
  {/* setContents = {setContents} */}
  {/* contents={contents} */}
  
    <Routes>
      <Route path="/main" element= {<Main />} />     
       <Route path="/about" element= {<About />} />     
      <Route path="/skills" element= {<Skills />} />     
      <Route path="/contents" element= {<Content />} />           
      <Route path="/hellovanilla" element= {<Hellovanilla />} />    
    </Routes> 
  
 
   </>
  );
}

export default App;
