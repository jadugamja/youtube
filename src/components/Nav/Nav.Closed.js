import React from "react";
import NavItem from "./NavItem";

const NavClosed = ({isSelected, setIsSelected}) => {

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
            setClosedMenuListSet(data.closedMenuListSet);
        } catch (error) {
            console.error('데이터를 불러오는 중 오류 발생: ', error);
        }
    };


    // 네비바 항목 선택 및 클릭 이벤트
    const clickNavItemEvent = (idx) => setIsSelected(idx);

    return (
        <ul className="nav-closed">
            {
                closedMenuListSet.map((item, index) => 
                    <NavItem onClick={() => {clickNavItemEvent(index)}} item={item} isSelected={isSelected === index} />
                )
            }
        </ul>
    );
}

export default NavClosed;