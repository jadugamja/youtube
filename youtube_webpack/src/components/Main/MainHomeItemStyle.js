import styled from "styled-components";
import { FlexBox } from "../../commonStyle";

export const ThumbnailImg = styled.img`
    object-fit: cover;
    width: 100%;
    /* height: 42%; */
    max-width: 450px;
    max-height: 225px;
    border-radius: 14px;
`;

export const VideoSection = styled.section`
    position: relative;
    cursor: pointer;

    &:hover {
        ${ThumbnailImg} {
            transition: ease-in 0.5s;
            border-radius: 0;
        }
    }
`;

export const ThumbnailContainerDiv = styled(FlexBox)``;

export const ThumbnailLink = styled.a`
    flex-basis: 100%;
    display: flex;
    justify-content: center;
`;

export const VideoDescContainerDiv = styled(FlexBox)`
    position: absolute;
    width: 100%;
    max-width: 450px;
    margin-top: 12px;
    margin-left: auto;
    margin-right: auto;
`;

export const ChannelProfileImg = styled.img`
    width: 36px;
    border-radius: 50%;
`;

export const DescRightContainerDiv = styled.div`
    flex-basis: 86%;
    overflow: hidden;
`;

export const DescRightHeaderDiv = styled(FlexBox)`
    max-width: 376px;
    max-height: 47px;
    overflow: hidden;
`;

export const DescRightProfileDiv = styled(FlexBox)`
    margin: 2px 0;
`;

export const VideoTitle = styled.h2`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 94%;
    flex-basis: 95%;
    font-size: 16px;
    font-weight: 500;
    word-wrap: break-word;
`;

export const KebabButton = styled.button`
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

export const NameSpan = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #606060;
    white-space: nowrap;
`;

export const VerifiedImg = styled.img`
    background-image: url(${require("../../assets/images/verified.png").default});
    background-repeat: no-repeat;
    background-size: contain;
    width: 15px;
    height: 15px;

    ${props => props.hide && `
       display: none;
    `}
`;