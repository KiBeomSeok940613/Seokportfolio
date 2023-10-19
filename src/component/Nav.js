import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Mnav from './Mnav';
import { useSelector } from 'react-redux';
import App from '../App';



const NavContent = styled.div`
    width: 100%;
    position: sticky;   
    top: 0;  
    z-index: 30;    
`;
const NavWrap = styled.div`
    max-width: 100%;
    height: 20vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;       
    background-color: #413D3D;
`;

const NavList = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    flex-basis: 80%;
         
    @media screen and (max-width: 1024px) {
        display: none;
    }
    ul {
        display: flex;
        flex-basis: 100%;
        justify-content: space-between;
        
        li {
            color: whitesmoke;
            font-size: 40px;         
        }
        a {
            color: whitesmoke;
        } 
        
    }
`;
const StyledIcon = styled(FontAwesomeIcon)`
     transition: all 0.5s; 
    font-size: 12px;
    vertical-align: baseline;
    /* transform: ${({$isopen}) => ($isopen === "false" ? "rotate(0)" : "rotate(-180deg)")}; */
    transform: rotate(${({$isopen}) => $isopen === "true" ? '180deg' : '0'});
    &:hover{
        /* color: pink; */
    }
`;
const NavSubmenu = styled.ul`
    position: absolute;  
    transition: 0.5s;
    flex-wrap: wrap;
    text-align: center;
    height: ${({$isopen, $height}) => ($isopen === "true" ? $height : "0px")};
    overflow: hidden;
    
    li {
        flex-basis: 100% !important;
        padding: 10px 0;
        width: 9rem;
        
    }
`;
const NavMember = styled.div`
    ul {
        display: flex;
        column-gap: 20px;
        a.active {
            font-weight: bold;
        }
    } 
`;
const Hamburger = styled.div`
    position: fixed;
    right: 16px;
    top: 24px;
    transition: all 1s;
    z-index: 100;
    cursor: pointer;
    > div {
        width: 50px;
        height: 10px;
        background-color: hotpink;
        border-radius: 4px;
        margin: 10px;
        transition: all 0.5s;
    } 
    
    &.on div:nth-child(1) {
        
        transform: rotate(45deg) translateY(8px);
    }
    &.on div:nth-child(2) {
         transform: translateX(-30px) rotate(720deg);
    }
    &.on div:nth-child(3) {
        transform: rotate(-45deg) translateY(-8px);
    }
    @media screen and (min-width: 1024px) {
        display: none;
    }
    
    @media screen and (max-width: 768px) {
        right: 24px;
    }
`;
const Container = styled.div`
    width: 320px;
    height: 100%;
    position: fixed;
    background-color: rgb(249, 250, 251);  
    right: ${({$isopen}) => $isopen ? "0" : "-320px"};
    top: 0;
    padding: 48px;
    box-sizing: border-box;
    z-index: 40;
    transition: all 0.5s;
    

    @media screen and (min-width: 1024px) {
        display: none;
    }
    > ul {
        
        border-radius: 5%;
        
        height: 50%;
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        > li {
            align-items: center;
            padding: 20px;
            border: 3px solid pink;
            font-weight: bold;
            cursor: pointer;
        } 
    } 
`;
const Msubmenu = styled(NavSubmenu)`
    width: 100%;
    position: relative;
    /* background: none; */
    background-color: transparent;
    text-align: left;
    li {
        padding-left: 15px;
        font-weight: normal;
        a {
            color: #000;
        } // a
    } // li
`;
const MsubmenuMember = styled(NavMember)`
    margin-top: 45px;
    ul {
        justify-content: center;
        li {
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 4px;
            background-color: salmon;
            &:nth-child(2) {
                background-color: steelblue;
            } // &:nth-child(2)
            a {
                color: #fff;
            } // a
        } // li
    } // ul
`;

function Nav({userState}) {

    // const userState = useSelector(state => state.user);
    const [isHeight, setIsHeight] = useState();
    const SubMenuHeight = (e) => {
        const list = document.querySelectorAll(".sub_list")[e];
        const listLength = list.querySelectorAll("li").length;
        const value = listLength * 43 + "px";
        
        return setIsHeight(value);
    }

    const [isActive, setIsActive] = useState(-1);
    const [isActive2, setIsActive2] = useState(false);

    const Nav = [
        {
            menu : "HOME",          
        },
        {
            menu : "ABOUT",           
        },
        {
            menu : "SKILLS",         
        },
        {
            menu : "CONTENTS",          
        },
        {
            menu : "CONTACT",           
        },
    ]
    // SubMenu[i].map((e, index) => {
    //     return (
    //         console.log(e, index)
    //     )
    // })

    return (
        <>
            <NavContent>
                <NavWrap>
                 
                    <NavList>
                        <ul>                        
                            {                         
                                Nav.map((e, i) => {
                                    return (                                     
                                        <li onMouseOver={() => {
                                            setIsActive(i);
                                            SubMenuHeight(i);
                                        }} onMouseOut={() => {
                                            setIsActive(-1);
                                        }} key={i}><NavLink to={`/${e.link}`}>{e.menu}</NavLink> 
                                            <NavSubmenu className={`sub_list`}  $isopen = {isActive === i ? "true" : "false"} $height = {isHeight}> {/* $를 쓰면 속성으로 보이는것을 방지 */}
                                                
                                            </NavSubmenu>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </NavList>
                    
                </NavWrap>
            </NavContent>
            {/* mobile nav */}
            <Hamburger onClick={() => {setIsActive2(!isActive2)}} className={isActive2 && 'on'}>            
                {
                    Array(3).fill().map((_, i) => { // 실제 데이터가 필요하지 않을 때 e 대신 _를 쓸 수 있다. react에서는 선언하면 써야하기 때문에 안 쓰는 e를 대신해서 _를 쓴다.
                        return (
                            <div key={i}></div>
                        )
                    })
                }
            </Hamburger>
            <Container $isopen = {isActive2}>
                <MsubmenuMember>
                    
                </MsubmenuMember>
                <ul>
                    {
                        Nav.map((e, i) => {
                            return (
                                <li key={i} onClick={() => {
                                    SubMenuHeight(i);
                                    (isActive !== i ? setIsActive(i) : setIsActive(-1));
                                }}>{e.title}
                                    <Msubmenu style={{color:"white"}} className='sub_list' $isopen={isActive === i ? "true" : "false"} $height={isHeight}>
                                 
                                    </Msubmenu>
                                </li>
                            )
                        })
                    }
                </ul>
            </Container>
            {/* mobile nav */}
        </>
    )
}

export default Nav