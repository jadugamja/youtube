import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FlexBox, ProfileImgContainer, Img, TitleContainer, BigTitle, Description, InfoLink, OvalButton } from "../../commonStyle";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import profilePath from "../../assets/images/channel-profile-1.jpg";

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

    return(
        <main>
            <div style={{"margin-top": "22px", "margin-left": "100px"}}>
                <ChannelHeader col="center">
                    <ProfileImgContainer row="center" col="center">
                        <Img src={profilePath} alt="edit"/>
                    </ProfileImgContainer>
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