import React, { useRef, useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FlexBox, ProfileImgContainer, Img, IconWrapper, TitleContainer, BigTitle, Description, InfoLink, OvalButton, Hidden } from "../../commonStyle";
import { TooltipDiv, TooltipText } from "../Header/HeaderStyle";
import { faCamera, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { profileImgPathState } from "../../recoil/atoms/mainAtom";
import { updateProfileImg } from "../../api/user"

const ChannelHeader = styled(FlexBox)`
    width: auto;
    max-width: 1284px;    
`

const ProfileDescContainer = styled(FlexBox)`
    padding: 0 24px;
`

const MyChannelItem = styled.li`
    margin: 23px 16px 17px 16px;
`;

const MainMyChannel = () => {

    const [profileImgPath, setProfileImgPath] = useRecoilState(profileImgPathState);
    const inputRef = useRef(null)

    // 프로필 사진 마우스 오버 시 툴팁 출력
    const [isHover, setIsHover] = useState(false);
    const activateTooltipEvent = () => setIsHover(!isHover)
    const disabledTooltipEvent = () => setIsHover(false)

    const changeProfileEvent = useCallback((e) => {
        if (!e.target.files) return;

        const selectedFile = e.target.files[0]

        updateProfileImg(selectedFile).then(() => {
            setProfileImgPath(URL.createObjectURL(selectedFile));
        }).catch((error) => {
            console.error("에러 내용: ", error)
        })
    }, [setProfileImgPath]);

    const uploadProfileClickEvent = useCallback(() => {
        if(!inputRef.current) return;
        inputRef.current.click();
    }, [])

    return(
        <main>
            <div style={{"margin-top": "22px", "margin-left": "240px"}}>
                <ChannelHeader col="center">
                    <ProfileImgContainer row="center" col="center">
                        <Hidden as="input" type="file" accept="image/*" ref={inputRef} onChange={changeProfileEvent}/>
                        <Img src={profileImgPath} alt="edit" onMouseOver={activateTooltipEvent} onMouseOut={disabledTooltipEvent} onClick={uploadProfileClickEvent} />
                        {
                            isHover && (
                                <IconWrapper>
                                    <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
                                </IconWrapper>
                            )
                        }
                    </ProfileImgContainer>
                    {
                        isHover && <TooltipDiv top="200px" left="265px"><TooltipText>프로필 사진 수정</TooltipText></TooltipDiv>
                    }
                    <ProfileDescContainer dir="col" row="between">
                        <TitleContainer>
                            <BigTitle>사용자명</BigTitle>
                        </TitleContainer>
                        <div style={{"margin": "4px 0"}}>
                            <Description>@user-dfa989d0</Description>
                            <Description>구독자 없음</Description>
                            <Description>동영상 없음</Description>
                        </div>
                        <div>
                            <InfoLink>채널 자세히 알아보기</InfoLink>
                        </div>
                        <div>
                            <OvalButton>채널 맞춤설정</OvalButton>
                            <OvalButton>동영상 관리</OvalButton>
                        </div>
                    </ProfileDescContainer>
                </ChannelHeader>
                <div>
                    <FlexBox as="ul" style={{"border-bottom": "1px solid rgba(0, 0, 0, 0.1)"}}>
                        <MyChannelItem>홈</MyChannelItem>
                        <MyChannelItem>재생목록</MyChannelItem>
                        <MyChannelItem>채널</MyChannelItem>
                        <MyChannelItem>정보</MyChannelItem>
                        <MyChannelItem>
                            <FontAwesomeIcon icon={faMagnifyingGlass}>검색</FontAwesomeIcon>
                        </MyChannelItem>
                    </FlexBox>
                </div>
                <div>
                    <h1></h1>
                    <div></div>
                </div>            
            </div>
        </main>
    )
}

export default MainMyChannel;