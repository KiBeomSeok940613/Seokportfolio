import "./App.css";
import Globalstyle from "./styles/Globalstyle";

import { Route, Routes } from "react-router-dom";

import Main from "./component/real/Main";
import Nav from "./component/real/Nav";

import Footer from "./component/real/Footer";
import About from "./component/contents/About";
import Skills from "./component/contents/Skills";
import Content from "./component/contents/Content";
import Contact from "./component/contents/Contact";
import { ThemeProvider, withTheme } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useState } from "react";


function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(()=> {
      return theme === 'dark' ? 'light' : 'dark';
    })
  };
  
  return (
    // 나머지 스크롤 관련 로직을 이곳에 추가
    // display 함수를 React 스타일로 변경
    // 나머지 스크롤 위치와 스타일 관련 코드를 React 스타일로 변경

    <>
  
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
          <Globalstyle />
          <Nav />

          <Footer />
          </ThemeProvider>

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contents" element={<Content />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      
    
    </>
  );
}

export default App;
