import { forwardRef } from "react";

const NavItem = forwardRef((props, ref) => {
    
    const {item: {id, name}, onClick, isSelected} = props;

    return (
        <li key={id} className={`nav-item ${id}-pad ${isSelected ? "active" : ""}`} onClick={onClick}>
            <div className="i-wrapper">
                <img className={`i-${id}`} src={require(`assets/${id}.png`)} alt={id} />
            </div>
            <span>{name}</span>
        </li>
    )
})

export default NavItem;