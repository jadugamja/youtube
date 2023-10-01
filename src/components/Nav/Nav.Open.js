import React from "react";
import NavItem from "./NavItem";

const NavOpen = ({isSelected, setIsSelected}) => {

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

    // 네비바 항목 선택 및 클릭 이벤트
    const clickNavItemEvent = (e) => {
        switch (e.target.key) {
            case "open-menu-1":
                setIsSelected(1);
                break;
            case "open-menu-2":
                setIsSelected(2);
                break;
            case "open-menu-3":
                setIsSelected(3);
                break;
            default:
                setIsSelected(0);
                break;
        }
    }

    return (
        <React.Fragment>
            <div className="nav-open" onClick={clickNavItemEvent}>
                {
                    Object.values(openMenuListsSet).map((group, groupIndex) => {
                        return (
                            <ul className="active" key={groupIndex}>
                                {
                                    group.title !== "" && <h3>{group.title}</h3>
                                }{
                                    Object.values(group.contents).map((menu, index) => (
                                        <NavItem key={`open-menu-${index}`} item={menu} isSelected={isSelected === index} />
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