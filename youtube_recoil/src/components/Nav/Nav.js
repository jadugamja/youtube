import React from "react";
import { useSelector } from "react-redux";

import "./Nav.css";
import NavOpen from "./Nav.Open";
import NavClosed from "./Nav.Closed";

const Nav = () => {

    // 네비바 열림/닫힘 여부
    const isOpen = useSelector(state => state.isOpen);

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