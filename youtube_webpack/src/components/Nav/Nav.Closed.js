import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { selectedMenuState } from "../../recoil/atoms/mainAtom";
import { fetchData } from "../../utils/fetchData";
import NavItem from "./NavItem";

const ClosedUl = styled.ul`
    position: fixed;
    top: 44px;
    width: 74px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 4px;
`;

const NavClosed = () => {

    // 선택된 메뉴
    const [selectedMenu, setSelectedMenu] = useRecoilState(selectedMenuState);

    // 네비바 메뉴 클릭 이벤트
    const clickMenuEvent = (e) => {
        const clickedLi = e.target.nodeName === "LI" ? e.target : e.target.closest("li") || e.target.querySelector("li");
        const idx = Array.from(e.currentTarget.querySelectorAll("li")).indexOf(clickedLi);
        setSelectedMenu(idx);
    }

    // 닫힌 사이드 바 메뉴 목록
    let [closedMenuListSet, setClosedMenuListSet] = React.useState([]);

    React.useEffect(() => {
        
        // 닫힌 사이드 바 메뉴 목록 불러오기
        fetchData("/data.json", (data) => setClosedMenuListSet(data.closedMenuList));

    }, []);

    return (
        <ClosedUl onClick={clickMenuEvent}>
            {
                closedMenuListSet.map((item, index) => 
                    <NavItem key={index} item={item} isSelected={selectedMenu === index} />
                )
            }
        </ClosedUl>
    );
}

export default NavClosed;