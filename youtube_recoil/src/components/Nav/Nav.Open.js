import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { selectedMenuState } from "recoil/atoms/mainAtom";
import { fetchData } from "utils/fetchData";
import NavItem from "./NavItem";

const OpenUlContainer = styled.div`
    width: 100%;
    overflow-y: auto;
    margin-top: 13px;
`;

const OpenUl = styled.ul`
    width: 240px;
    margin: 0;
    padding: 0;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`;

const MenuGroupTitle = styled.h3`
    align-self: baseline;
    margin: 6px 25px;
    font-size: 18px;
    font-weight: 500;
`;

const Scroll = styled.div`
    position: absolute;
    width: 10px;
    height: 100%;
    top: 0;
    right: -19px;
    opacity: 1;
    background-color: #fff;
`;

const GroupLine = styled.hr`
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 90%;
    opacity: 0.5;
`;

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
            <OpenUlContainer onClick={clickMenuEvent}>
                {
                    Object.values(openMenuListsSet).map((group, groupIndex) => {
                        return (
                            <OpenUl key={groupIndex}>
                                {
                                    group.title !== "" && <MenuGroupTitle>{group.title}</MenuGroupTitle>
                                }
                                {
                                    Object.values(group.contents).map((menu, index) => (
                                        <NavItem key={`${groupIndex}-${index}`} item={menu} isSelected={selectedMenu === (groupIndex * group.contents.length + index)} />
                                    ))
                                }
                                <GroupLine />
                            </OpenUl>
                        )
                    })
                }
            </OpenUlContainer>
            <Scroll></Scroll>
        </React.Fragment>
    );
}

export default NavOpen;