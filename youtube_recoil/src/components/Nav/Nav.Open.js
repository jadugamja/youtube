import React from "react";
import { useRecoilState } from "recoil";

import { selectedMenuState } from "recoil/atoms/mainAtom";
import { fetchData } from "utils/fetchData";
import NavItem from "./NavItem";

const NavOpen = () => {

    // 선택된 메뉴
    const [selectedMenu, setSelectedMenu] = useRecoilState(selectedMenuState);

    // 네비바 메뉴 클릭 이벤트
    const clickMenuEvent = (e) => {
        const clickedLi = e.target.nodeName === "LI" ? e.target : e.target.closest("li") || e.target.querySelector("li");
        const idx = Array.from(e.currentTarget.querySelectorAll("li")).indexOf(clickedLi);
        setSelectedMenu(idx);
    }

    // 열린 사이드 바 메뉴 목록
    let [openMenuListsSet, setOpenMenuListsSet] = React.useState({});

    React.useEffect(() => {

        // 열린 사이드 바 메뉴 목록 불러오기
        fetchData("/data.json", (data) => setOpenMenuListsSet(data.openMenuLists));

    }, []);

    return (
        <React.Fragment>
            <div className="nav-open" onClick={clickMenuEvent}>
                {
                    Object.values(openMenuListsSet).map((group, groupIndex) => {
                        return (
                            <ul key={groupIndex}>
                                {
                                    group.title !== "" && <h3>{group.title}</h3>
                                }{
                                    Object.values(group.contents).map((menu, index) => (
                                        <NavItem key={`${groupIndex}-${index}`} item={menu} isSelected={selectedMenu === (groupIndex * group.contents.length + index)} />
                                    ))
                                }
                                <hr />
                            </ul>
                        )
                    })
                }
            </div>
            <div className="scroll"></div>
        </React.Fragment>
    );
}

export default NavOpen;