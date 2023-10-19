import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { isOpenNavState } from "recoil/atoms/mainAtom";
import NavOpen from "./Nav.Open";
import NavClosed from "./Nav.Closed";

const StyledNav = styled.nav`
    position: fixed;
    z-index: 9;

    height: 100%;
    background: #fff;

    ${props => {
        if (props.open)
            return ` width: 240px; margin-top: 0; `
        else 
            return "margin-top: 56px;"
    }}
`;

const Modal = styled.div`
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
            <StyledNav open={isOpen}>
                {
                    !isOpen
                        ? <NavClosed />
                        : <NavOpen />
                }
            </StyledNav>
                {
                    isOpen && <Modal></Modal>
                }
        </React.Fragment>
    );
}

export default Nav;