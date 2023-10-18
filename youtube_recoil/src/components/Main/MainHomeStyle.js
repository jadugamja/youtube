import styled, { css } from "styled-components";
import { FlexBoxDiv } from "commonStyle";

export const HomeMain = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 56px;
    margin-left: 78px;
`;

export const VideoKeywordsContainerDiv = styled(FlexBoxDiv)`
    position: fixed;
    width: 100%;
    height: 60px;
    background: #fff;
    z-index: 2;
    
    overflow-x: hidden;
    white-space: nowrap;
`;

export const KeywordsBoxDiv = styled(FlexBoxDiv)`
    height: 100%;
    margin-left: 24px;
`;

export const KeywordsDiv = styled(FlexBoxDiv)`
    flex: 1 1;
    margin: 0 6px;
    background-color: #F2F2F2;
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
        background-color: #E5E5E5;
    }

    ${props => props.active && css`
        background-color: #0F0F0F!important;
    
        ${KeywordsSpan} {
            color: #fff;
        }
    `}

`;

export const KeywordsSpan = styled.span``;

export const VideoContentContainerDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(330px, 1fr));
    grid-gap: 60px 20px;
    margin: 96px 20px 0 30px;
`;