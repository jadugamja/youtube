import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { isWideNavState, isWideNavHiddenModalState } from "../../recoil/atoms/mainAtom";
import NavOpen from "./Nav.Open";
import NavClosed from "./Nav.Closed";

const StyledNav = styled.nav`
    position: fixed;
    z-index: 9;

    height: 100%;
    background: #fff;

    ${props => {
        if (props.wide)
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

    // 브라우저 화면 너비 1313px 이상
    const isWideScreen = useRecoilValue(isWideNavHiddenModalState);
    // 메뉴바 클릭 여부
    const buttonClicked = useRecoilValue(isWideNavState);

    return (
        <React.Fragment>
            <StyledNav wide={(isWideScreen && !buttonClicked) || (!isWideScreen && buttonClicked)}>
                {
                    isWideScreen
                        ? buttonClicked
                            ? <NavClosed />
                            : <NavOpen />
                        : buttonClicked
                            ? <NavOpen />
                            : <NavClosed />
                }
            </StyledNav>
                {
                    !isWideScreen && buttonClicked && <Modal></Modal>
                }
        </React.Fragment>
    );
}

export default Nav;