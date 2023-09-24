import React from "react";
import NavItem from "./NavItem";
import "./Nav.css";

const Nav = ({isOpen, isSelected, setIsSelected}) => {

    // 사이드 바 메뉴 목록
    let [closedMenuListSet, setClosedMenuListSet] = React.useState([]);
    let [openMenuListsSet, setOpenMenuListsSet] = React.useState({});

    React.useEffect(() => {
        fetchData();
    }, []);
    
    // 네비바 항목 선택 및 클릭 이벤트
    const clickNavItemEvent = (idx) => setIsSelected(idx);

    // 로컬 JSON 데이터 불러오기
    const fetchData = async () => {
        try {
            const response = await fetch('/data.json');
            const data = await response.json();
            setClosedMenuListSet(data.closedMenuList);
            setOpenMenuListsSet(data.openMenuLists);
        } catch (error) {
            console.error('데이터를 불러오는 중 오류 발생: ', error);
        }
    };

    return (
        <>
            <nav>
                {
                    isOpen
                        ?
                            <>
                            <div className="nav-open">
                                {
                                    Object.values(openMenuListsSet).map((group, groupIndex) => {
                                        return (
                                            <ul className="active" key={groupIndex}>
                                                {
                                                    group.title !== "" &&
                                                        <h3>{group.title}</h3>
                                                }{
                                                    Object.values(group.contents).map((menu, index) => (
                                                        <NavItem item={menu} />
                                                    ))
                                                }
                                                <hr />
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                            <div className="scroll"></div>
                            </>
                        :
                            <ul className="nav-closed">
                                {
                                    closedMenuListSet.map((item, index) => 
                                        <NavItem onClick={() => {clickNavItemEvent(index)}} item={item} isSelected={isSelected === index} />
                                    )
                                }
                            </ul>
                }
            </nav>
                {
                    isOpen &&
                        <div className="modal"></div>
                }
        </>
    );
}

export default Nav;