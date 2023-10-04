import React from "react";

const NavItem = ((props) => {
    
    const {item: {id, name}, isSelected} = props;

    return (
        <li key={id} className={`nav-item ${id}-pad ${isSelected? "active": ""} `}>
            <div className="i-wrapper">
                <img className={`i-${id}`} src={require(`assets/${id}.png`)} alt={id} />
            </div>
            <span>{name}</span>
        </li>
    )
})

export default NavItem;