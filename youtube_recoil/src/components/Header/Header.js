import { useState } from "react";
import { useRecoilState } from "recoil";

import { isOpenNavState } from "recoil/atoms/mainAtom";
import { FixedHeader, HeaderLeftDiv, MenuLogoContainerDiv, MenuBoxDiv, LogoBoxLink, MenuImg, LogoImg, HeaderCenterDiv, TootipHomeDiv, SearchForm, SearchContainerDiv, InputContainerDiv, SearchImg, SearchInput, KeyboardContainerDiv, KeyboardImg, SearchButtonContainerDiv, TooltipDiv, TooltipSpan, MicContainerDiv, MicImg, HeaderRightItemDiv, VideoImg, BellImg, ProfileContainerDiv, ProfileImg } from "./HeaderStyle.js";
import menu from "assets/menu.png";
import logo from "assets/logo.png";
import search from "assets/search.png";
import keyboard from "assets/keyboard.png";
import mic from "assets/mic.png";
import { FlexBoxDiv } from "commonStyle";

const Header = () => {

    // 메뉴바 버튼 클릭 이벤트
    const [isOpen, setIsOpen] = useRecoilState(isOpenNavState);
        const toggleMenuButton = () => setIsOpen(!isOpen);

    // 검색 영역 활성화 상태 여부 및 상태 변경 이벤트
    const [isActive, setIsActive] = useState(false);
    const activateInputEvent = () => setIsActive(true);
    const disabledInputEvent = () => setIsActive(false);

    // 키보드 아이콘 클릭 이벤트
    const toggleKeyboardEvent = () => console.log("키보드 아이콘 클릭");

    // 마우스 오버 상태 여부 및 툴팁 출력/숨김 상태 변경 이벤트
    const [isHover, setIsHover] = useState(false);
    const activateTooltipEvent = (idx) => setIsHover(idx);
    const disabledTooltipEvent = () => setIsHover(false);

    return (
        <FixedHeader>
            <HeaderLeftDiv col="center">
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
            </HeaderLeftDiv>
            <HeaderCenterDiv row="center" col="center">
                <SearchForm>
                    <SearchContainerDiv col="center" active={isActive} onFocus={activateInputEvent} onBlur={disabledInputEvent}>
                        <InputContainerDiv row="between" col="center">
                            {
                                isActive && <SearchImg src={search} />
                            }
                            <SearchInput type="text" placeholder="검색" />
                            <KeyboardContainerDiv onClick={toggleKeyboardEvent}>
                                <KeyboardImg src={keyboard} />
                            </KeyboardContainerDiv>
                        </InputContainerDiv>
                    </SearchContainerDiv>
                    <SearchButtonContainerDiv row="center" col="center" onMouseOver={() => {activateTooltipEvent(0)}} onMouseOut={disabledTooltipEvent}>
                        <input type="submit" value="" />
                        <SearchImg src={search} />
                        {
                            isHover === 0 && <TooltipDiv><TooltipSpan>검색</TooltipSpan></TooltipDiv>
                        }
                    </SearchButtonContainerDiv>
                </SearchForm>
                <MicContainerDiv row="center" col="center" onMouseOver={() => {activateTooltipEvent(1)}} onMouseOut={disabledTooltipEvent}>
                    <MicImg src={mic} />
                        {
                            isHover === 1 && <TooltipDiv><TooltipSpan>음성으로 검색</TooltipSpan></TooltipDiv>
                        }
                </MicContainerDiv>
            </HeaderCenterDiv>
            <FlexBoxDiv col="center">
                <HeaderRightItemDiv row="center" col="center" onMouseOver={() => {activateTooltipEvent(2)}} onMouseOut={disabledTooltipEvent}>
                    <VideoImg src={require(`assets/video.png`)} alt="video" />
                        {
                            isHover === 2 && <TooltipDiv><TooltipSpan>만들기</TooltipSpan></TooltipDiv>
                        }
                </HeaderRightItemDiv>
                <HeaderRightItemDiv row="center" col="center" onMouseOver={() => {activateTooltipEvent(3)}} onMouseOut={disabledTooltipEvent}>
                    <BellImg src={require(`assets/bell.png`)} alt="bell" />
                        {
                            isHover === 3 && <TooltipDiv><TooltipSpan>알림</TooltipSpan></TooltipDiv>
                        }
                </HeaderRightItemDiv>
                <ProfileContainerDiv row="center" col="center">
                    <ProfileImg alt="user"/>
                </ProfileContainerDiv>
            </FlexBoxDiv>
        </FixedHeader>
    )
}

export default Header;