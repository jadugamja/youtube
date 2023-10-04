import React from "react";
import "./Nav.css";
import NavOpen from "./Nav.Open";
import NavClosed from "./Nav.Closed";

const Nav = ({isOpen, selectedMenu, setSelectedMenu}) => {

    return (
        <React.Fragment>
            <nav>
                {
                    !isOpen
                        ? <NavClosed selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
                        : <NavOpen selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
                }
            </nav>
                {
                    isOpen && <div className="modal"></div>
                }
        </React.Fragment>
    );
}

export default Nav;