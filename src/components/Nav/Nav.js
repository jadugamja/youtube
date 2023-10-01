import React from "react";
import "./Nav.css";
import NavOpen from "./Nav.Open";
import NavClosed from "./Nav.Closed";

const Nav = ({isOpen, isSelected, setIsSelected}) => {

    return (
        <React.Fragment>
            <nav>
                {
                    !isOpen
                        ? 
                        <h1>테스트중</h1>
                        // <NavClosed isSelected={isSelected} setIsSelected={setIsSelected} />
                        :
                        <NavOpen isSelected={isSelected} setIsSelected={setIsSelected} />
                }
            </nav>
                {
                    isOpen &&
                        <div className="modal"></div>
                }
        </React.Fragment>
    );
}

export default Nav;