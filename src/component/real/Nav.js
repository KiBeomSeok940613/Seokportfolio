import { faBurger, faMoon, faSun, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled, { ThemeContext, keyframes } from "styled-components";
import { Link, Events } from "react-scroll";
import { toggleTheme } from "../../store";
import { useDispatch, useSelector } from "react-redux";




// Nav 애니메이션

const Navbar = keyframes`
  0%{

    opacity: 0;
  }
  100%{
    opacity: 1;
  }

`;
// Nav Wrap 네비 랩 시작
const HeaderWrap = styled.div`
  width: 100%;
`;
const Header = styled.header`
  z-index: 50;
  background-color: ${({$isdark}) => ($isdark === "light" ? "#fffceb" : "#333")};
  width: 100%;
  /* padding: 10px 12px 0px 12px; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  transition: 1s;
  top: 0;
  box-sizing: border-box;
  border-bottom: 2px solid ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")};;

  .Nav_logo {
    padding: 0 3%;
    transition: 1s;
   
    cursor: pointer;
    .Img_ {
      height: 80px;
    }
  }
  .MenutoggleBtn {
    display: none;
    color: ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")};
    font-size: 2rem;
    position: absolute;
    right: 30px;
    top: 21px;
    cursor: pointer;
    transition: 1s;
    
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .MenutoggleBtn {
      display: block;
      transition: 1s;
      /* animation: ${Navbar} 3s; */
    }
  }
`;
const DarkBtn = styled.div`

 svg{
    padding: 10px 10px; 
    color: ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")};
    font-size: 1.25rem;
  }
`
const NavContainer = styled.ul`
  width: 20%;
  display: flex;
  justify-content: space-between;
  transition: 1s;

  li{
    &:hover {
      cursor: pointer;
      background: ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")}; 
      border-radius: 4px; 
      p{
      color: ${({$isdark}) => ($isdark === "light" ? "#fffceb" : "#333")};
      }
      svg{
        color: ${({$isdark}) => ($isdark === "light" ? "#fffceb" : "#333")};
      }
    }
    p{
      color: ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")};
      }
      
     
   
  }
  .Nav-Menu-list {
    display: block;
    padding: 10px 10px;
    color: ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")};
    font-size: 1.25rem;
    transition: 1s;
    font-weight: bold;
    &.active {  
      background: ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")}; 
      border-radius: 5px;
      font-weight: bold;
      p{
        color: ${({$isdark}) => ($isdark === "light" ? "#fffceb" : "#333")};
      }
    }
  }
 

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    transition: 1s;
    border-top: 3px solid white;
    /* animation: ${Navbar} 1s; */
  }
`;

function Nav() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isClick, setIsClick] = useState(true);
  const aboutSectionRef = useRef(null);

  const theme = useSelector(state => state.dark)
  const dispatch = useDispatch()

  const ToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
    setIsClick(!isClick);
  };
  
  useEffect(() => {
    Events.scrollEvent.register("end", function (to, element) {
      if (to === "aboutSection") {
        const aboutSection = aboutSectionRef.current;
        if (aboutSection) {
          const rect = aboutSection.getBoundingClientRect();
          const isvisible = rect.top <= window.innerHeight && rect.bottom >= 0;
          if (isvisible) {
            aboutSection.classList.add("fade-in");
          } else {
            aboutSection.classList.remove("fade-in");
          }
        }
      }
    });
    return () => {
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <HeaderWrap $isdark={theme}>
        <Header $isdark={theme}>
          <div className="Nav_logo">
            <Link
              to="mainTop"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <img
                className="Img_"
                src="images/img/logo/logo.png"
                alt="BEOM SEOK"
              />
            </Link>
          </div>
          <NavContainer isToggleOpen={isToggleOpen }  $isdark={theme}>
            {" "}
            <li $isdark={theme}>
              <div ref={aboutSectionRef}>
                <Link
                  to="aboutSection"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                  className="Nav-Menu-list"
                  activeClass="active"
                >
                  <p>ABOUT</p>
                </Link>
              </div>
            </li>
            <li>
              <Link
                to="ContentSection"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className="Nav-Menu-list"
                activeClass="active"
              >
                <p>CONTENTS</p>
              </Link>
            </li>
            <li>
              <Link
                to="skillSection"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className="Nav-Menu-list"
                activeClass="active"
              >
                <p>SKILLS</p>
              </Link>
            </li>
            <li >
              <DarkBtn $isdark={theme} onClick={()=>{dispatch(toggleTheme())}}>
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun}>   
            </FontAwesomeIcon> 
            </DarkBtn></li>
          </NavContainer>

          <FontAwesomeIcon
            $isdark={theme}
            className="MenutoggleBtn"
            onClick={ToggleOpen}
            icon={isClick ? faBurger : faX}
          ></FontAwesomeIcon>
        </Header>
      </HeaderWrap>
    </>
  );
}

export default Nav;

