import React from "react";
import { useRecoilValue } from "recoil";

import "./Nav.css";
import NavOpen from "./Nav.Open";
import NavClosed from "./Nav.Closed";
import { isOpenNavState } from "recoil/atoms/mainAtom";

const Nav = () => {

    // 네비바 열림/닫힘 여부
    const isOpen = useRecoilValue(isOpenNavState);

    return (
        <React.Fragment>
            <nav>
                {
                    !isOpen
                        ? <NavClosed />
                        : <NavOpen />
                }
            </nav>
                {
                    isOpen && <div className="modal"></div>
                }
        </React.Fragment>
    );
}

export default Nav;