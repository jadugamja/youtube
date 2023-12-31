import React from "react";
import styled, { css } from "styled-components";
import { useRecoilValue } from "recoil";

import { isWideNavHiddenModalState, isWideNavState } from "../../recoil/atoms/mainAtom";

const MenuItem = styled.li`
    font-size: 10px;
    text-align: center;
    border-radius: 10px;
    align-items: center;
    cursor: pointer;

    // 넓은 네비바
    ${({ wide }) => wide && css`
        width: 98%;
        height: 40px;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-gap: 14px;
        margin-right: 10px;

        ${MenuName} {
            font-size: 14px;
            text-align: start;
        }
    `}

    // 미니 네비바
    ${({ wide }) => !wide && css`
        width: 100%;
        height: 72px;
        padding: 13px 0;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .i-home {
            width: 16px;
        }

        .i-shorts {
            width: 24px;
        }

        .i-sub {
            width: 19px;
        }

        .i-lib {
            width: 22px;
        }        
    `}

    ${({ active }) => active && `background: #F2F2F2;`}

    &:hover {
        background: #F2F2F2;
    }


`;

const MenuName = styled.span``;

const NavItem = ((props) => {
    
    const {item: {id, name}, isSelected} = props;
    const isWideScreen = useRecoilValue(isWideNavHiddenModalState);
    const isWideNav = useRecoilValue(isWideNavState);
    
    return (
        <MenuItem key={id} wide={isWideScreen || isWideNav} active={isSelected}>
            <div>
                <img className={`i-${id}`} src={require(`../../assets/images/${id}.png`).default} alt={id} />
            </div>
            <MenuName>{name}</MenuName>
        </MenuItem>
    )
})

export default NavItem;