import React from "react";
import styled, { css } from "styled-components";
import { useRecoilValue } from "recoil";
import { isOpenNavState } from "recoil/atoms/mainAtom";

const MenuItem = styled.li`
    font-size: 10px;
    text-align: center;
    border-radius: 7px;
    align-items: center;
    cursor: pointer;

    ${({ open }) => open && css`
        width: 88%;
        height: 48px;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-gap: 14px;

        ${MenuName} {
            font-size: 15px;
            text-align: start;
        }
    `}

    ${({ open }) => !open && css`
        width: 100%;
        height: 72px;
        padding: 13px 0;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    `}

    ${({ active }) => active && `background: #F2F2F2;`}

    &:hover {
        background: #F2F2F2;
    }
`;

const MenuName = styled.span``;

const NavItem = ((props) => {
    
    const {item: {id, name}, isSelected} = props;
    const isOpen = useRecoilValue(isOpenNavState);
    return (
        <MenuItem key={id} open={isOpen} active={isSelected}>
            <div>
                <img className={`i-${id}`} src={require(`assets/${id}.png`)} alt={id} />
            </div>
            <MenuName>{name}</MenuName>
        </MenuItem>
    )
})

export default NavItem;