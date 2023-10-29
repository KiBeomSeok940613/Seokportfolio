import { faBars, faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

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

const Header = styled.header`
  background-color: #113946;
  width: 100%;
  padding: 10px 12px 0px 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  transition: 1s;
  .Nav_logo {
    padding: 0 3%; 
    transition: 1s;
    animation: ${Navbar} 3s;
    .Img_{
      height: 100px;
    }
    
  }
  .MenutoggleBtn {
    display: none;
    color: white;
    font-size: 2rem;
    position: absolute;
    right: 50px;
    top: 40px;
    cursor: pointer;
    animation: ${Navbar} 1s;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .MenutoggleBtn {
      display: block;
      animation: ${Navbar} 3s;
      
    }
  }
`;
const NavContainer = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-between;
  transition: 1s;
 

  li {
    &:hover {
      cursor: pointer;
      background: #44a8f4;
      border-radius: 4px;
        
      
    }
  }
  .Nav-Menu-list {
    display: block;
    padding: 10px 10px;
    color: whitesmoke;
    font-size: 1.1rem;
    transition: 1s;
    
    
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;   
    width: 100%;
    margin-top: 5px;
    transition: 1s;
    animation: ${Navbar} 1s;
  }
`;

function Nav() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isClick, setIsClick] = useState(true);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
    setIsClick(!isClick);
  };

  return (
    <>
      <Header>
        <div className="Nav_logo">
          <Link to={"main"}>
            <img className="Img_" src="img/skills/캡처-removebg-preview.png" alt="BEOM SEOK" />
          </Link>
        </div>

        <NavContainer isToggleOpen={isToggleOpen}>
          <li>
            <Link to={"/about"} className="Nav-Menu-list">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to={"/contents"} className="Nav-Menu-list">
            CONTENTS 
            </Link>
          </li>
          <li>
            <Link to={"/skills"} className="Nav-Menu-list">
            <p>SKILLS</p>
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="Nav-Menu-list">
            <p>CONTACT</p>
            </Link>
          </li>
        
        </NavContainer>

        <FontAwesomeIcon
          className="MenutoggleBtn"
          onClick={handleToggleOpen}
          icon={isClick ? faBars : faBurger}
        ></FontAwesomeIcon>

       
      </Header>
    </>
  );
}

export default Nav;
