import styled, { css } from "styled-components";
import { FlexBoxDiv } from "commonStyle.js";

export const FixedHeader = styled.header`
    position: fixed;
    top: 0%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 56px;
    padding: 0 0 0 16px;
    background-color: #fff;

    z-index: 3;
`;

export const HeaderLeftWrapper = styled(FlexBoxDiv)`
    position: relative;
    flex-basis: 16%;
    background-color: #fff;

    z-index: 9;
    height: ${props => props.height || "inherit" };
    margin: ${props => props.margin || "0" };
`;

export const MenuLogoContainerDiv = styled(FlexBoxDiv)`
    flex-basis: 150px; // 메뉴와 로고의 간격을 일정하게 유지하기 위함
`;

export const MenuBoxDiv = styled(FlexBoxDiv)`
    flex-basis: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        background-color: #E5E5E5;
    }
`;

export const MenuImg = styled.img`
    width: 25.5px;
    height: 28px;
`;

export const LogoBoxLink = styled.a`
    display: block;
    height: fit-content;
`;

export const LogoImg = styled.img`
    width: 87px;
    height: 20px;
`;

export const TootipHomeDiv = styled.div`
    position: absolute;
    border: 1px solid #000;
    font-size: 12px;
    width: fit-content;
    height: fit-content;
    padding: 5px 10px;
    display: ${function(props){
        if(props.hide)
            return "none";
        else
            return "";
    }};
`;

export const HeaderCenterWrapper = styled(FlexBoxDiv)`
    flex-basis: 51%;
    margin-right: 133px;
`;

export const SearchForm = styled.form`
    flex-basis: 65%;
    display: flex;
    align-items: center;
`;

export const SearchContainerDiv = styled(FlexBoxDiv)`
    flex-basis: 100%;
    padding-left: ${function(props){
        if(props.active)
            return "0";
        else
            return "30px";
    }};
    ${props => props.active && css`
        ${InputContainerDiv} {
            border: 1px solid #1c62b9;
        }

        ${SearchInput} {
            margin-left: 10px;
        }
    `}
`;

export const InputContainerDiv = styled(FlexBoxDiv)`
    height: 40px;
    padding-left: 15px;
    flex-basis: 100%;

    border: 1px solid var(--search-border-color);
    border-radius: 25px 0 0 25px;
    box-shadow: inset 0.5px 0.2px 3px #e6e6e6;
`;

export const SearchImg = styled.img`
    width: 24px;
    height: 26px;
`;

export const SearchInput = styled.input`
    width: 100%;
    font-size: 16px;
    margin-right: 16px;
`;

export const KeyboardContainerDiv = styled.div`
    position: relative;
    right: 10px;
    cursor: pointer;
`;

export const KeyboardImg = styled.img`
    width: 21px;
`;

export const SearchButtonContainerDiv = styled(FlexBoxDiv)`
    background: #f8f8f8;
    border: 1px solid #ccc;
    border-left: 0;
    border-radius: 0 25px 25px 0;
    min-width: 66px;
    height: 40px;
    cursor: pointer;

    &:hover {
        background: #F0F0F0;
    }
`;

export const TooltipDiv = styled(FlexBoxDiv)`
    position: absolute;
    top: 74px;

    width: fit-content;
    height: 34px;

    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    font-size: 12px;

    transition: all ease-out 5s;
`;

export const TooltipSpan = styled.span`
    margin: 8px;
    color: #fff;
`;

export const MicContainer = styled(FlexBoxDiv)`
    margin-left: 16px;
    width: 40px;
    height: 40px;

    background-color: #f2f2f2;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background-color: #D9D9D9;
    }
`;

export const MicImg = styled.img`
    width: 24px;
    height: 25px;
`;

export const ButtonContainer = styled(FlexBoxDiv)``;

export const MicWrapper = styled(FlexBoxDiv)`
    position: relative;
    top: 150px;

    ${MicContainer} {
        margin-left: 0;
        width: 68px;
        height: 68px;
        background-color: rgba(0, 0, 0, 0.2);
    }

    ${MicImg} {
        width: 37px;
        height: 39px;
    }
`;

export const HeaderRightWrapper = styled(FlexBoxDiv)``;

export const HeaderRightItemDiv = styled(FlexBoxDiv)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        background-color: #E5E5E5;
    }

    & + & {
        margin-left: 13px;        
    }
`;

export const VideoImg = styled.img`
    width: 33px;
`;

export const BellImg = styled.img`
    width: 37px;
    height: 34px;
`;

export const ProfileContainerDiv = styled(FlexBoxDiv)`
    /* 임시 */
    background-color: #000;
    width: 32px;
    height: 32px;

    border-radius: 50%;
    margin: 0 24px;
    cursor: pointer;
`;

export const ProfileImg = styled.img`

`;