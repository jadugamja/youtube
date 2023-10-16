import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import "./Nav.css";
import NavOpen from "./Nav.Open";
import NavClosed from "./Nav.Closed";
import { isOpenNavState } from "recoil/atoms/mainAtom";

const StyledNav = styled.nav`
    position: fixed;
    z-index: 9;

    height: 100%;
    background: #fff;

    margin-top: 56px;
    overflow-x: hidden;
`;

const ModalDiv = styled.div`
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Nav = () => {

    // 네비바 열림/닫힘 여부
    const isOpen = useRecoilValue(isOpenNavState);

    return (
        <React.Fragment>
            <StyledNav>
                {
                    !isOpen
                        ? <NavClosed />
                        : <NavOpen />
                }
            </StyledNav>
                {
                    isOpen && <ModalDiv></ModalDiv>
                }
        </React.Fragment>
    );
}

export default Nav;