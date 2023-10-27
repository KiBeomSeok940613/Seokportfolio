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

const NavWrap = styled.header`
   z-index: 50;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #113946;
  border-bottom: 2px solid pink;
  position: fixed;
  transition: 1s;

  .nav_logo {
    cursor: pointer;

    img {
      width: 100px;
    }

    h1 {
      font-size: 2rem;
      color: whitesmoke;
    }

    @media screen and (max-width: 1024px) {
      font-size: 1.5rem;

      h1 {
        margin-left: 10px;
        transition: 1s;
      }
    }

    @media screen and (max-width: 480px) {
      h1 {
        font-size: 2.5rem;
      }
    }
  }

  .menutoggleBtn {
    display: none;
    color: whitesmoke;
    font-size: 2rem;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      display: block;
      top: 10px;
      transition: 1s;
    }
     
    @media screen and (max-width: 500px) {
    animation: ${Navbar} 1s;
    flex-direction: column;
    align-items: flex-start;


  
    }
  }

  
`;
// header.끝

const Navigation = styled.ul`
  display: flex;
  margin-left: 30px;
  font-weight: bold;
  animation: ${Navbar} 3s;

  li {
    display: flex;
    justify-content: center;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
      margin-top: 15px;
    }

    li:not(:last-child) {
      margin-right: 30px;
    }
    @media screen and (max-width: 500px) {
    }

    &:hover {
      color: whitesmoke;
      cursor: pointer;
      background: #44a8f4;
      border-radius: 5px;
      transition: 0.5s;
    }
  }
  .Nav-menu-list {
    color: whitesmoke;
    display: block;
    padding: 10px 10px;
    font-size: 2rem;

    &:hover {
      color: whitesmoke;
      transition: 0.5s;
    }
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    @media screen and (max-width: 500px) {
      animation: ${Navbar} 3s;
    }

    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;

    width: 30%;
    height: 200px;
    animation: ${Navbar} 3s;
    transition: 2s;
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
      <NavWrap>
        <div className="nav_logo">
          <Link to={"main"}>
            <img src="img/logo2.png" alt="BEOM SEOK" />
          </Link>
        </div>

        <Navigation isToggleOpen={isToggleOpen}>
          <li>
            <Link to={"/about"} className="Nav-menu-list">
              {" "}
              ABOUT
            </Link>
          </li>
          <li>
            <Link to={"/contents"} className="Nav-menu-list">
              CONTENTS
            </Link>
          </li>
          <li>
            <Link to={"/skills"} className="Nav-menu-list">
              {" "}
              SKILLS
            </Link>
          </li>
        </Navigation>

        <FontAwesomeIcon
          className="menutoggleBtn"
          onClick={handleToggleOpen}
          icon={isClick ? faBars : faBurger}
        ></FontAwesomeIcon>
      </NavWrap>
    </>
  );
}

export default Nav;
