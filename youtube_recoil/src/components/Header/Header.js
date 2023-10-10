import { useState } from "react";
import { useRecoilState } from "recoil";

import { isOpenNavState } from "recoil/atoms/mainAtom";
import { FixedHeader, HeaderLeftDiv, MenuLogoContainerDiv, MenuBoxDiv, LogoBoxAnchor, MenuImg, LogoImg, HeaderCenterDiv, TootipHomeDiv, SearchForm, SearchContainerDiv, InputContainerDiv, SearchImg, SearchInput, KeyboardContainerDiv, KeyboardImg } from "testStyle.js";
import "./Header.css";
import menu from "assets/menu.png";
import logo from "assets/logo.png";
import search from "assets/search.png";
import keyboard from "assets/keyboard.png";
import mic from "assets/mic.png";

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
                    <LogoBoxAnchor href="#">
                        <LogoImg src={logo} />
                    </LogoBoxAnchor>
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
                    <div className="search-btn-area" onMouseOver={() => {activateTooltipEvent(0)}} onMouseOut={disabledTooltipEvent}>
                        <input type="submit" value="" />
                        <SearchImg src={search} />
                        {
                            isHover === 0 && (
                                <div id="tooltip-search" className="tooltip">
                                    <span className="tooltip-txt">검색</span>
                                </div>
                            )
                        }
                    </div>
                </SearchForm>
                <div className="mic-box" onMouseOver={() => {activateTooltipEvent(1)}} onMouseOut={disabledTooltipEvent}>
                    <img className="i-mic" src={mic} />
                        {
                            isHover === 1 && (
                                <div id="tooltip-search-by-voice" className="tooltip">
                                    <span className="tooltip-txt">음성으로 검색</span>
                                </div>
                            )
                        }
                </div>
            </HeaderCenterDiv>
            <div className="vertical-align-center h-right">
                <div className="align-center h-right-item" onMouseOver={() => {activateTooltipEvent(2)}} onMouseOut={disabledTooltipEvent}>
                    <img className="i-video" src={require(`assets/video.png`)} alt="video" />
                        {
                            isHover === 2 && (
                                <div id="tooltip-video" className="tooltip">
                                    <span className="tooltip-txt">만들기</span>
                                </div>
                            )
                        }
                </div>
                <div className="align-center h-right-item" onMouseOver={() => {activateTooltipEvent(3)}} onMouseOut={disabledTooltipEvent}>
                    <img className={`i-bell`} src={require(`assets/bell.png`)} alt="bell" />
                       {
                            isHover === 3 && (
                                <div id="tooltip-video" className="tooltip">
                                    <span className="tooltip-txt">알림</span>
                                </div>
                            )
                        }
             </div>
                <div className="align-center profile">
                    <img className="i-user" alt="user"/>
                </div>
            </div>
        </FixedHeader>
    )
}

export default Header;