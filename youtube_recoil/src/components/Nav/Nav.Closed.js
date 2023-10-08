import React from "react";
import { useRecoilState } from "recoil";

import { selectedMenuState } from "recoil/atoms/mainAtom";
import { fetchData } from "utils/fetchData";
import NavItem from "./NavItem";

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
        <ul className="nav-closed" onClick={clickMenuEvent}>
            {
                closedMenuListSet.map((item, index) => 
                    <NavItem key={index} item={item} isSelected={selectedMenu === index} />
                )
            }
        </ul>
    );
}

export default NavClosed;