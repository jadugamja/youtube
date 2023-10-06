import React from "react";
import { useSelector, useDispatch } from "react-redux";
import{ setSelectedMenu } from "redux/action";

import { fetchData } from "utils/fetchData";
import NavItem from "./NavItem";

const NavOpen = () => {

    const dispatch = useDispatch();
    const selectedMenu = useSelector(state => state.selectedMenu);

    // 네비바 메뉴 클릭 이벤트
    const clickMenuEvent = (e) => {
        const clickedLi = e.target.nodeName === "LI" ? e.target : e.target.closest("li") || e.target.querySelector("li");
        const idx = Array.from(e.currentTarget.querySelectorAll("li")).indexOf(clickedLi);
        dispatch(setSelectedMenu(idx));
    }

    // 열린 사이드 바 메뉴 목록
    let [openMenuListsSet, setOpenMenuListsSet] = React.useState({});

    React.useEffect(() => {
        // 로컬 JSON 데이터 불러오기
        fetchData("/data.json", (data) => {
            setOpenMenuListsSet(data.openMenuLists);
        });

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