import "./App.css";
import Globalstyle from "./styles/Globalstyle";
import { Route, Routes } from "react-router-dom";
import Main from "./component/layout/Main";
import Nav from "./component/layout/Nav";
import Footer from "./component/layout/Footer";
import About from "./component/contents/About";
import Skills from "./component/contents/Skills";
import Content from "./component/contents/Content";
import Contact from "./component/contents/Contact";
import { ThemeProvider } from "styled-components";
import { Provider, useSelector } from "react-redux";
import store from "./store";

function App() {
  return (
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

  return (
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
