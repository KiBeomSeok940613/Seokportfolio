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
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store"


function App(){
  return(
    <>
    
    <Provider store={store}>
      <Inner />
    </Provider>
  </>
  );
}


function Inner() {
  const light = {
    colors: {
      Primary: "hotpink",
      Secondary: "oranged",
      BgColor: "#e8e8e8",
      Color: "#000",
      ContentBg: "#fff",
    },
  };
  const dark = {
    colors: {
      Primary: "#272929",
      Secondary: "#e9e9e9",
      BgColor: "#e3e3e3",
      Color: "#e9e9e9",
      ContentBg: "#272929",
    },
  };
  const theme = useSelector((state) => state.dark);
  const DarkMode = theme === "light" ? light : dark;
  const userState = useSelector((state) => state.user);

  return (
    // 나머지 스크롤 관련 로직을 이곳에 추가
    // display 함수를 React 스타일로 변경
    // 나머지 스크롤 위치와 스타일 관련 코드를 React 스타일로 변경

    <>
   <ThemeProvider theme={DarkMode}>
      <Globalstyle />
      <Nav />
      <Footer />
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contents" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </ThemeProvider>
    </>
  );
}

export default App;
