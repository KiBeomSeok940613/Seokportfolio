import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Globalstyle from './styles/Globalstyle';

import styled from 'styled-components';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';

import Left from './component/left/Left';
import Right from './component/right/Right';
import Hellovanilla from './component/right/Hellovanilla';
import Daegubank from './component/right/Daegubank';
import Home from './component/left/Home';
import Main from './component/real/Main';
import Nav from './component/real/Nav';
import { Container } from 'postcss';
import RealLeft from './component/real/RealLeft';
import RealRight from './component/real/RealRight';
import Footer from './component/real/Footer';



const MainWrap =styled.body`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
   <Globalstyle />
   <MainWrap>
  
  
    <Nav />
   
    <Main />
    
    <Footer/>

   </MainWrap> 



    {/* <Left  />
   <Right /> */}
  
    
  {/* setContents = {setContents} */}
  {/* contents={contents} */}
  
    <Routes>
      <Route path="/Main" element= {<Main />} />     
      {/* <Route path="/about" element= {<About />} />     
      <Route path="/skills" element= {<Skills />} />     
      <Route path="/contents" element= {<Content />} />     
      <Route path="/contact" element= {<Contact />} />         
      <Route path="/hellovanilla" element= {<Hellovanilla />} />    */}
    </Routes> 
  
 
   </>
  );
}

export default App;
