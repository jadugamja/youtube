import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { isWideNavState, isOpenProfileState } from "../../recoil/atoms/mainAtom";
import { FixedHeader, HeaderLeftWrapper, HeaderCenterWrapper, HeaderRightWrapper, MenuLogoContainerDiv, MenuBoxDiv, LogoBoxLink, MenuImg, LogoImg, TootipHomeDiv, SearchForm, SearchContainerDiv, InputContainerDiv, SearchImg, SearchInput, KeyboardContainerDiv, KeyboardImg, SearchButtonContainerDiv, TooltipDiv, TooltipSpan, MicWrapper, MicContainer, MicImg, HeaderRightItemDiv, VideoImg, BellImg, ProfileContainerDiv, ProfileImg, ButtonContainer, Button } from "./HeaderStyle";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser} from "@fortawesome/free-regular-svg-icons";

import Profile from "./Profile.jsx";
import menu from "../../assets/images/menu.png";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import keyboard from "../../assets/images/keyboard.png";
import mic from "../../assets/images/mic.png";
import video from "../../assets/images/video.png";
import bell from "../../assets/images/bell.png";
import user from "../../assets/images/channel-profile-1.jpg";

const Modal = styled.div`
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: baseline;

    ${({hide}) => hide && `display: none;`}
`;

const MicSearch = styled.div`
    position: absolute;
    top: 8px;
    width: 590px;
    height: 400px;
    padding: 17px 17px 0 35px;
    background: #fff;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);
`;

const MicAccessTitle = styled.h2`
    color: #0f0f0f;
    font-family: "Roboto","Arial", sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 3.2rem;
    padding-bottom: 15px;
`;

const MicAccessGuide = styled.span`
    font-size: 14px;
`;

const Header = () => {

    // 메뉴바 버튼 클릭 이벤트
    const [isWideNav, setIsWideNav] = useRecoilState(isWideNavState);
    const toggleMenuButton = () => setIsWideNav(!isWideNav);

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

    // 프로필 클릭 이벤트
    const [isOpenProfile, setIsOpenProfile] = useRecoilState(isOpenProfileState);
    const toggleProfileButton = () => setIsOpenProfile(!isOpenProfile);

    return (
        <FixedHeader>
            <HeaderLeftWrapper col="center">
                <MenuLogoContainerDiv row="between" col="center">
                    <MenuBoxDiv row="center" col="center" onClick={toggleMenuButton}>
                        <MenuImg src={menu} alt="menu" />
                    </MenuBoxDiv>
                    <LogoBoxLink href="#">
                        <LogoImg src={logo} />
                    </LogoBoxLink>
                    <TootipHomeDiv hide>
                        <span>YouTube 홈</span>
                    </TootipHomeDiv>
                </MenuLogoContainerDiv>
            </HeaderLeftWrapper>
            <HeaderCenterWrapper row="center" col="center">
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
                <MicContainer row="center" col="center" onMouseOver={() => {activateTooltipEvent(1)}} onMouseOut={disabledTooltipEvent}>
                    <MicImg src={mic} />
                        {
                            isHover === 1 && <TooltipDiv><TooltipSpan>음성으로 검색</TooltipSpan></TooltipDiv>
                        }
                </MicContainer>
                <Modal hide>
                    <MicSearch>
                        <div>
                            <ButtonContainer row="end">
                                <FontAwesomeIcon icon={faXmark} style={{color: "#000", fontSize: "30px"}} />
                            </ButtonContainer>
                        </div>
                        <div>
                            <MicAccessTitle>승인 대기 중</MicAccessTitle>
                            <MicAccessGuide>음성으로 검색하려면 마이크에 대한 액세스를 허용하세요.</MicAccessGuide>
                            <MicWrapper row="center">
                                <MicContainer row="center" col="center">
                                    <MicImg src={mic} />
                                </MicContainer>
                            </MicWrapper>
                        </div>
                    </MicSearch>
                </Modal>
            </HeaderCenterWrapper>
            <HeaderRightWrapper col="center">
                {/* <React.Fragment>
                    <HeaderRightItemDiv row="center" col="center" onMouseOver={() => {activateTooltipEvent(2)}} onMouseOut={disabledTooltipEvent}>
                        <VideoImg src={video} alt="video" />
                            {
                                isHover === 2 && <TooltipDiv><TooltipSpan>만들기</TooltipSpan></TooltipDiv>
                            }
                    </HeaderRightItemDiv>
                    <HeaderRightItemDiv row="center" col="center" onMouseOver={() => {activateTooltipEvent(3)}} onMouseOut={disabledTooltipEvent}>
                        <BellImg src={bell} alt="bell" />
                            {
                                isHover === 3 && <TooltipDiv><TooltipSpan>알림</TooltipSpan></TooltipDiv>
                            }
                    </HeaderRightItemDiv>
                    <ProfileContainerDiv row="center" col="center" onClick={toggleProfileButton}>
                        <ProfileImg src={user} alt="user"/>
                    </ProfileContainerDiv>
                        {
                            isOpenProfile && <Profile />   
                        }
                </React.Fragment> */}
                <React.Fragment>
                    <HeaderRightItemDiv>
                        <img />
                    </HeaderRightItemDiv>
                    <ButtonContainer login>
                        <Button>
                            <FontAwesomeIcon icon={faCircleUser} style={{color: "#1669d6", width: "22px", height: "21px"}}></FontAwesomeIcon>
                            <span>로그인</span>
                        </Button>
                    </ButtonContainer>
                </React.Fragment>
            </HeaderRightWrapper>
        </FixedHeader>
    )
}

export default Header;