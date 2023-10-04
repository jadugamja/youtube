import React from "react";
import NavItem from "./NavItem";

const NavOpen = ({selectedMenu, setSelectedMenu}) => {

    // 열린 사이드 바 메뉴 목록
    let [openMenuListsSet, setOpenMenuListsSet] = React.useState({});

    // 메뉴 선택 여부
    React.useEffect(() => {
        fetchData();
    }, []);

    // 로컬 JSON 데이터 불러오기
    const fetchData = async () => {
        try {
            const response = await fetch('/data.json');
            const data = await response.json();
            setOpenMenuListsSet(data.openMenuLists);
        } catch (error) {
            console.error('데이터를 불러오는 중 오류 발생: ', error);
        }
    };

    // 네비바 메뉴 클릭 이벤트
    const clickMenuEvent = (e) => {
        const clickedLi = e.target.nodeName === "LI" ? e.target : e.target.closest("li") || e.target.querySelector("li");
        const idx = Array.from(e.currentTarget.querySelectorAll("li")).indexOf(clickedLi);
        setSelectedMenu(idx)
    }

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
                                        <NavItem key={`${groupIndex}-${index}`} item={menu} selectedMenu={selectedMenu === (groupIndex * group.contents.length + index)} />
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