import styled from "styled-components";
import { FlexBoxDiv } from "commonStyle";

export const ShortsMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 56px;
    margin-left: 140px;
`;

export const ContainerDiv = styled(FlexBoxDiv)`
    height: 90%;
    z-index: 2;
`;

export const VideoContainerDiv = styled(FlexBoxDiv)`
    position: relative;
    height: 800px;
    margin-top: 22px;
`;

export const Video = styled.video`
    /* 임시로 크기 고정 */
    width: 450px;
    height: 100%;
    border-radius: 10px;
    filter: drop-shadow(-0.02rem 0 0.6rem rgba(117, 117, 117, 0.9));
    object-fit: cover;
`;

export const VideoHeaderDiv = styled(FlexBoxDiv)`
    position: absolute;
    top: 0;
    padding: 20px 20px;
    width: 100%;
    height: 10%;

    background-image: linear-gradient(to bottom, #6e6e6e96, transparent);
    border-radius: 10px 10px 0 0;
    z-index: 3;

    &:hover {
        display: flex;
    }

    ${props => !props.hover && `
        display: none;
    `}
`;

export const MediaControlButton = styled.button`
    background-color: transparent;
    color: #fff;
    font-size: ${props => {
        if (props.size === "medium") return "16px"
        else if (props.size === "large") return "19px"
    }};
`;

export const VideoFooterDiv = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 3;
    width: 100%;
    padding: 72px 16px 16px 16px;
    background-image: linear-gradient(to top, #6e6e6e66, transparent);
    border-radius: 0 0 10px 10px;
`;

export const VideoTitleContainerDiv = styled.div``;

export const VideoTitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    margin: 14px 0;
    color: #fff;
`;

export const VideoSubtitleContainerDiv = styled.div`
    margin: 20px 0;

    ${props => props.hide && `
        display: none;
    `}
`;

export const VideoSubtitle = styled.h3`
    display: flex;
    font-size: 13px;
    font-weight: 500;
    gap: 10px;
    color: #fff;
`;

export const ProfileContainerDiv = styled(FlexBoxDiv)``;

export const ProfileDiv = styled.div`
    margin: 0;
    margin-right: 6px;
    width: 34px;
    height: 34px;
`;

export const ChannelNameContainerDiv = styled(FlexBoxDiv)`
    font-size: 14px;
    font-weight: 600;
`;

export const ChannelNameSpan = styled.span`
    color: #fff;
`;

export const SubButtonContainerDiv = styled.div`
    position: absolute;
    bottom: 54px;
    right: 77px;
`;

export const SubButton = styled.button`
    position: absolute;
    background-color: #fff;
    width: 60px;
    height: 36px;
    border-radius: 20px;

    cursor: pointer;
`;

export const FeedbackContainerDiv = styled(FlexBoxDiv)`
    margin: 20px 12px;
    gap: 20px;
    font-size: 14px;
`;

export const ButtonContainerDiv = styled(FlexBoxDiv)``;

export const RoundedButton = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    font-size: 21px;
    font-weight: 600;
`;

export const SquareRoundedButton = styled.button`
    width: 38px;
    height: 38px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const FixedButtonContainerDiv = styled.div`
    position: fixed;
    right: 12px;
    ${props => {
        if (props.type === "top")
            return `top: 70px;`
        else if (props.type === "bottom")
            return `bottom: 8px;`
    }}
`;

export const BiggerRoundedButton = styled.button`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    font-size: 22px;
`;