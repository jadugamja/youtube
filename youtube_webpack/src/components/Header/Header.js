import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { isWideNavState, isOpenUploadDialogState, isOpenProfileDialogState } from "../../recoil/atoms/mainAtom";
import { FixedHeader, HeaderLeftWrapper, HeaderCenterWrapper, HeaderRightWrapper, MenuLogoContainerDiv, MenuBoxDiv, LogoBoxLink, MenuImg, LogoImg, TootipHomeDiv, SearchForm, SearchContainerDiv, InputContainerDiv, SearchImg, SearchInput, KeyboardContainerDiv, KeyboardImg, SearchButtonContainerDiv, TooltipDiv, TooltipText, MicWrapper, MicContainer, MicImg, HeaderRightItemDiv, VideoImg, BellImg, ProfileContainerDiv, ProfileImg, ButtonContainer, Button, DialogText } from "./HeaderStyle";
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
import myVideo from "../../assets/images/my-video.png";
import live from "../../assets/images/real-time.png";

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

const Dialog = styled.div`
    position: absolute;
    background: #fff;
`;

const MicDialog = styled(Dialog)`
    top: 8px;
    width: 590px;
    height: 400px;
    padding: 17px 17px 0 35px;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);
`;

const UploadDialog = styled(Dialog)`
    top: 50px;
    right: 124px;
    width: 230px;
    padding: 8px 17px;
    border-radius: 10px;
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.1);
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

const KebabButton = styled.button`
    background-image: url(${require("../../assets/images/kebab.png").default});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;

    border: 0;
    max-width: 23px;
    height: 23px;
    cursor: pointer;

    align-self: center;
    flex: 1;
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

    // 동영상 추가 아이콘 클릭 이벤트
    const [isOpenUpload, setIsOpenUpload] = useRecoilState(isOpenUploadDialogState);
    const toggleUploadButton = () => setIsOpenUpload(!isOpenUpload);

    // 프로필 클릭 이벤트
    const [isOpenProfile, setIsOpenProfile] = useRecoilState(isOpenProfileDialogState);
    const toggleProfileButton = () => setIsOpenProfile(!isOpenProfile);

    return (
        <FixedHeader>
            <HeaderLeftWrapper col="center">
                <MenuLogoContainerDiv row="between" col="center">
                    <MenuBoxDiv row="center" col="center" onClick={toggleMenuButton}>
                        <MenuImg src={menu} alt="menu" />
                    </MenuBoxDiv>
                    <Link to="/home">
                        <LogoImg src={logo} />
                    </Link>
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
                            isHover === 0 && <TooltipDiv><TooltipText>검색</TooltipText></TooltipDiv>
                        }
                    </SearchButtonContainerDiv>
                </SearchForm>
                <MicContainer row="center" col="center" onMouseOver={() => {activateTooltipEvent(1)}} onMouseOut={disabledTooltipEvent}>
                    <MicImg src={mic} />
                        {
                            isHover === 1 && <TooltipDiv><TooltipText>음성으로 검색</TooltipText></TooltipDiv>
                        }
                </MicContainer>
                <Modal hide>
                    <MicDialog>
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
                    </MicDialog>
                </Modal>
            </HeaderCenterWrapper>
            <HeaderRightWrapper col="center">
                <React.Fragment>
                    <HeaderRightItemDiv row="center" col="center" onMouseOver={() => {activateTooltipEvent(2)}} onMouseOut={disabledTooltipEvent} onClick={toggleUploadButton}>
                        <VideoImg src={video} alt="video" />
                            {
                                isHover === 2 && <TooltipDiv><TooltipText>만들기</TooltipText></TooltipDiv>
                            }
                    </HeaderRightItemDiv>
                        {
                           isOpenUpload && (
                                <UploadDialog as="ul">
                                    <ButtonContainer as="li" row="start" col="center" upload>
                                        <img src={myVideo} />
                                        <DialogText>동영상 업로드</DialogText>
                                    </ButtonContainer>
                                    <ButtonContainer as="li" row="start" col="center" upload>
                                        <img src={live} />
                                        <DialogText>라이브 스트리밍 시작</DialogText>
                                    </ButtonContainer>
                                </UploadDialog>
                               ) 
                        }
                    <HeaderRightItemDiv row="center" col="center" marginLeft="13px" onMouseOver={() => {activateTooltipEvent(3)}} onMouseOut={disabledTooltipEvent}>
                        <BellImg src={bell} alt="bell" />
                            {
                                isHover === 3 && <TooltipDiv><TooltipText>알림</TooltipText></TooltipDiv>
                            }
                    </HeaderRightItemDiv>
                    <ProfileContainerDiv row="center" col="center" onClick={toggleProfileButton}>
                        <ProfileImg src={user} alt="user"/>
                    </ProfileContainerDiv>
                        {
                            isOpenProfile && <Profile />   
                        }
                </React.Fragment>

                {/* 로그인 페이지 */}
                {/* <React.Fragment>
                    <HeaderRightItemDiv row="center" col="center" login>
                        <KebabButton />
                    </HeaderRightItemDiv>
                    <ButtonContainer login>
                        <Button login>
                            <FontAwesomeIcon icon={faCircleUser} style={{color: "#1669d6", width: "22px", height: "21px"}}></FontAwesomeIcon>
                            <span>로그인</span>
                        </Button>
                    </ButtonContainer>
                </React.Fragment> */}

            </HeaderRightWrapper>
        </FixedHeader>
    )
}

export default Header;