import styled, { css } from "styled-components";
import { FlexBoxDiv } from "commonStyle";

export const MainHome = styled(FlexBoxDiv)`
    height: 100%;
    margin-top: 56px;
    margin-left: 78px;
`;

export const VideoKeywordsContainerDiv = styled(FlexBoxDiv)`
    position: fixed;
    width: 100%;
    height: 64px;
    background: #fff;
    z-index: 3;
    
    overflow-x: hidden;
    white-space: nowrap;
`;

export const KeywordsBoxDiv = styled(FlexBoxDiv)`
    height: 100%;
    margin: 8px 0 0 24px;
`;

export const KeywordsDiv = styled(FlexBoxDiv)`
    flex: 1 1;
    margin: 0 7px;
    background-color: #F2F2F2;
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 8px;

    cursor: pointer;
`;