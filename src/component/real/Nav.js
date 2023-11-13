import { faBars, faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link,Events } from "react-scroll";

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
  z-index: 50;
  background-color: #1b1b1e;
  width: 100%;
  padding: 10px 12px 0px 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  transition: 1s;
  top: 0;

  .Nav_logo {
    padding: 0 3%;
    transition: 1s;
    /* animation: ${Navbar} 3s; */
    cursor: pointer;
    .Img_ {
      height: 80px;
    }
  }
  .MenutoggleBtn {
    display: none;
    color: white;
    font-size: 2rem;
    position: absolute;
    right: 50px;
    top: 30px;
    cursor: pointer;
    /* animation: ${Navbar} 1s; */
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .MenutoggleBtn {
      display: block;
      /* animation: ${Navbar} 3s; */
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
      background: #93c6d3;
      transition: 1s;
      border-radius: 4px;
      font-size: 2rem;
    }
  }
  .Nav-Menu-list {
    display: block;
    padding: 10px 10px;
    color: #ffffff;
    font-size: 1.25rem;
    transition: 1s;
    font-weight: bold;
    &.active {
      color: #083459;
      background: #f5ddb0;
      border-radius: 5px;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    transition: 1s;

    /* animation: ${Navbar} 1s; */
  }
`;

function Nav() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isClick, setIsClick] = useState(true);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
    setIsClick(!isClick);
  };

  useEffect(() => {
    Events.scrollEvent.register("end", function (to, element) {
      if (to === "aboutSection") {
      }
    });
    return () => {
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <Header>
        <div className="Nav_logo">
          <Link to="mainTop" spy={true} smooth={true} offset={0} duration={500}>
            <img
              className="Img_"
              src="images/img/logo/logo.png"
              alt="BEOM SEOK"
            />
          </Link>
        </div>

        <NavContainer isToggleOpen={isToggleOpen}>
          {" "}
          <li>
            <Link
              to="aboutSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              className="Nav-Menu-list"
              activeClass="active"
            >
              ABOUT
            </Link>
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
              CONTENTS
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
          <li>
            <Link
              to="contactSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={200}
              className="Nav-Menu-list"
              activeClass="active"
            >
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
