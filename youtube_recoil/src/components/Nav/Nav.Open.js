import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { isWideNavState, selectedMenuState } from "recoil/atoms/mainAtom";
import { fetchData } from "utils/fetchData";
import { HeaderLeftWrapper, MenuLogoContainerDiv, MenuBoxDiv, MenuImg, LogoBoxLink, LogoImg, TootipHomeDiv } from "components/Header/HeaderStyle"
import NavItem from "./NavItem";
import menu from "assets/menu.png";
import logo from "assets/logo.png";

const WideUlContainer = styled.div`
    width: 100%;
    max-height: 100vh;
    overflow-y: auto;

    hr:first-child {
        margin-left: 16px;
    }
`;

const WideUl = styled.ul`
    width: 240px;
    margin: 0;
    padding: 12px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`;

const MenuGroupTitle = styled.h3`
    align-self: baseline;
    margin: 6px 17px;
    font-size: 16px;
    font-weight: 500;
`;

const Scroll = styled.div`
    position: absolute;
    width: 10px;
    height: 100%;
    top: 0;
    right: 0;
    opacity: 1;
    background-color: #fff;
`;

const GroupLine = styled.hr`
    margin: 0;
    width: 100%;
    border-top-width: 1px;
    opacity: 0.3;
`;

const Footer = styled.footer`
    padding: 16px 24px;
`;

const TermsContainer = styled.div`
    font-size: ${({ link }) => { 
        if (link)
            return "13px"
        else
            return "12px"
    }};
    color: ${({ link }) => { 
        if (link)
            return "#606060"
        else
            return "#909090"
    }};
    margin-bottom: 13px;
`;

const NavOpen = () => {

    // 메뉴바 버튼 클릭 이벤트
    const [isWideNav, setIsWideNav] = useRecoilState(isWideNavState);
    const toggleMenuButton = () => setIsWideNav(!isWideNav);

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
            <HeaderLeftWrapper col="center" height="56px" margin="0 0 0 16px">
                <MenuLogoContainerDiv row="between" col="center">
                    <MenuBoxDiv row="center" col="center" onClick={toggleMenuButton}>
                        <MenuImg src={menu} />
                    </MenuBoxDiv>
                    <LogoBoxLink href="#">
                        <LogoImg src={logo} />
                    </LogoBoxLink>
                    <TootipHomeDiv hide>
                        <span>YouTube 홈</span>
                    </TootipHomeDiv>
                </MenuLogoContainerDiv>
            </HeaderLeftWrapper>
            <WideUlContainer onClick={clickMenuEvent}>
                {
                    Object.values(openMenuListsSet).map((group, groupIndex) => {
                        return (
                            <React.Fragment>
                                <WideUl key={groupIndex}>
                                    {
                                        group.title !== "" && <MenuGroupTitle>{group.title}</MenuGroupTitle>
                                    }
                                    {
                                        Object.values(group.contents).map((menu, index) => (
                                            <NavItem key={`${groupIndex}-${index}`} item={menu} isSelected={selectedMenu === (groupIndex * group.contents.length + index)} />
                                        ))
                                    }
                                </WideUl>
                                <GroupLine />
                            </React.Fragment>
                        )
                    })
                }
                <Footer>
                    <TermsContainer link>
                        <div>
                            <a>정보</a>
                            <a>보도자료</a>
                            <a>저작권</a>
                            <a>문의하기</a>
                            <a>크리에이터</a>
                            <a>광고</a>
                            <a>개발자</a>
                        </div>
                        <div>
                            <a>약관</a>
                            <a>개인정보처리방침</a>
                            <a>정책 및 안전</a>
                            <a>YouTube 작동의 원리</a>
                            <a>새로운 기능 테스트하기</a>
                        </div>
                    </TermsContainer>
                    <TermsContainer>
                        <span>
                            © 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC, 
                            <a>사업자정보</a>, 
                            <a>불법촬영물 신고</a>
                            <br />
                            크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다.
                        </span>
                    </TermsContainer>
                </Footer>
            </WideUlContainer>
            {/* <Scroll></Scroll> */}
        </React.Fragment>
    );
}

export default NavOpen;