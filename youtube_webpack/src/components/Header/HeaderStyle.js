import styled, { css } from "styled-components";
import { FlexBox } from "../../commonStyle";

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

export const HeaderLeftWrapper = styled(FlexBox)`
    position: relative;
    min-width: 150px;
    flex-basis: 8%;
    background-color: #fff;

    z-index: 9;
    height: ${props => props.height || "inherit" };
    margin: ${props => props.margin || "0" };
    ${props => props.hide && css `display: none;` }
`;

export const MenuLogoContainerDiv = styled(FlexBox)`
    flex-basis: 150px; // 메뉴와 로고의 간격을 일정하게 유지하기 위함
`;

export const MenuBoxDiv = styled(FlexBox)`
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

export const HeaderCenterWrapper = styled(FlexBox)`
    flex-basis: 52%;
`;

export const SearchForm = styled.form`
    flex-basis: 65%;
    display: flex;
    align-items: center;
`;

export const SearchContainerDiv = styled(FlexBox)`
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

export const InputContainerDiv = styled(FlexBox)`
    height: 40px;
    padding-left: 15px;
    flex-basis: 100%;

    border: 1px solid ${props => props.theme.searchBorderColor};
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

export const SearchButtonContainerDiv = styled(FlexBox)`
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

export const TooltipDiv = styled(FlexBox)`
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

export const TooltipText = styled.span`
    margin: 8px;
    color: #fff;
`;

export const DialogText = styled.span`
    margin-left: 18px;
`;

export const MicContainer = styled(FlexBox)`
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

export const ButtonContainer = styled(FlexBox)`
    cursor: pointer;
    ${props => props.login && css`
        width: 100px;
        height: 36px;
    `}

    ${props => props.upload && css`
        height: 40px;
        font-size: 14px;

        &:hover {
            background-color: ${props => props.theme.btnHoverBgColor};
        }
    `}
`;

export const Button = styled.button`
    width: 100%;
    border-radius: 20px;
    background-color: #fff;
    border: 1px solid #E5E5E5;
    font-size: 14px;
    color: #1669d6;
`;

export const MicWrapper = styled(FlexBox)`
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

export const HeaderRightWrapper = styled(FlexBox)``;

export const HeaderRightItemDiv = styled(FlexBox)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        background-color: #E5E5E5;
        ${({login}) => login && css`
            background-color: #fff;
        `}
    }

    margin-left: ${props => props.marginLeft || "0"}
`;

export const VideoImg = styled.img`
    width: 33px;
`;

export const BellImg = styled.img`
    width: 37px;
    height: 34px;
`;

export const ProfileContainerDiv = styled(FlexBox)`
    width: 32px;
    height: 32px;

    margin: 0 24px;
    cursor: pointer;
`;

export const ProfileImg = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
`;