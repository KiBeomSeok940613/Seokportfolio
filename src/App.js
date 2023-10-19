import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Globalstyle from './styles/Globalstyle';

import styled from 'styled-components';
import Nav from './component/Nav';
import Mnav from './component/Mnav';
import Main from './component/Main';
import Left from './component/Left';
import Right from './component/Right';


const MainWrap = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        flex: 1;
        box-sizing: border-box;
`

function App() {

  return (
    // 나머지 스크롤 관련 로직을 이곳에 추가
  // display 함수를 React 스타일로 변경
  // 나머지 스크롤 위치와 스타일 관련 코드를 React 스타일로 변경
  
   <>   
   <Globalstyle />
   {/* <Nav />
   <Main /> */}
   <MainWrap>
      <Left />
      <Right />  
  </MainWrap>
   </>
  );
}

export default App;
