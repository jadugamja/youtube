import React from "react";
import styled from "styled-components";

const ProfileWrapper = styled.div`
    position: absolute;
    top: 45px;
    right: 15px;
    width: 320px;
    height: 750px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.header`
    color: #0f0f0f;
    font-size: 16px;
`;

const ProfileBody = styled.div`
    color: #0f0f0f;
    font-size: 14px;
`;

const Profile = () => {
    return (
        <ProfileWrapper>
            <ProfileHeader>
                <div>
                    <div>
                        <img />
                    </div>
                </div>
                <div>
                    <div>
                        <span>사용자명</span>
                    </div>
                    <div>
                        <span>@user-</span>
                    </div>
                    <div>
                        <a>내 채널 보기</a>
                    </div>
                </div>
            </ProfileHeader>
            <ProfileBody>
                <ul>
                    <li>
                        <i></i>
                        <span>Google 계정</span>
                    </li>
                    <li>
                        <i></i>
                        <span>계정 전환</span>
                    </li>
                    <li>
                        <i></i>
                        <span>로그아웃</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i></i>
                        <span>YouTube 스튜디오</span>
                    </li>
                    <li>
                        <i></i>
                        <span>구매 항목 및 멤버십</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i></i>
                        <span>YouTube의 내 데이터</span>
                    </li>
                    <li>
                        <i></i>
                        <span>디자인: </span>
                    </li>
                    <li>
                        <i></i>
                        <span>언어: </span>
                    </li>
                    <li>
                        <i></i>
                        <span>제한 모드: </span>
                    </li>
                    <li>
                        <i></i>
                        <span>위치: </span>
                    </li>
                    <li>
                        <i></i>
                        <span>단축키</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i></i>
                        <span>설정</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i></i>
                        <span>고객센터</span>
                    </li>
                    <li>
                        <i></i>
                        <span>의견 보내기</span>
                    </li>
                </ul>
            </ProfileBody>
        </ProfileWrapper>
    )
}

export default Profile;