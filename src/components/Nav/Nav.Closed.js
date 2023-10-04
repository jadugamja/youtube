import React from "react";
import { useSelector, useDispatch } from "react-redux";
import{ setSelectedMenu } from "redux/action";

import NavItem from "./NavItem";

const NavClosed = () => {

    const dispatch = useDispatch();
    const selectedMenu = useSelector(state => state.selectedMenu);

    // 네비바 메뉴 클릭 이벤트
    const clickMenuEvent = (e) => {
        const clickedLi = e.target.nodeName === "LI" ? e.target : e.target.closest("li") || e.target.querySelector("li");
        const idx = Array.from(e.currentTarget.querySelectorAll("li")).indexOf(clickedLi);
        dispatch(setSelectedMenu(idx));
    }

    // 닫힌 사이드 바 메뉴 목록
    let [closedMenuListSet, setClosedMenuListSet] = React.useState([]);

    React.useEffect(() => {
        fetchData();
    }, []);

    // 로컬 JSON 데이터 불러오기
    const fetchData = async () => {
        try {
            const response = await fetch('/data.json');
            const data = await response.json();
            setClosedMenuListSet(data.closedMenuList);
        } catch (error) {
            console.error('데이터를 불러오는 중 오류 발생: ', error);
        }
    };

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