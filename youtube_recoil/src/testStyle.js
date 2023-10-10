import styled from "styled-components";
import { AlignDiv } from "./commonStyle.js";

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

    z-index: 4;
`;

export const HeaderLeftDiv = styled(AlignDiv)`
    position: relative;
    flex-basis: 15.5%;
    background-color: #fff;

    z-index: 9;
`;

export const MenuLogoContainerDiv = styled(AlignDiv)`
    flex-basis: 150px; // 메뉴와 로고의 간격을 일정하게 유지
    /* justify-content: space-between; */
`;

export const MenuBoxDiv = styled(AlignDiv)`
    flex-basis: 46px;
    height: 46px;
    border-radius: 50%;
    cursor: pointer;
`;

export const LogoBoxAnchor = styled.a`
    display: block;
    height: fit-content;
`;

export const MenuImg = styled.img`
    width: 26.5px;
    height: 32px;
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

export const HeaderCenterDiv = styled(AlignDiv)`
    flex-basis: 51%;
    margin-right: 133px;
`;

export const SearchForm = styled.form`
    flex-basis: 65%;
    display: flex;
    align-items: center;
`;

export const SearchContainerDiv = styled(AlignDiv)`
    flex-basis: 100%;
    padding-left: ${function(props){
        if(props.active)
            return "0";
        else
            return "30px";
    }};
`;

export const InputContainerDiv = styled(AlignDiv)`
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