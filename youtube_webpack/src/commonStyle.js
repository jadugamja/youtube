import styled, { css } from "styled-components";

export const FlexBox = styled.div`
    display: flex;
    ${ props => setDirection(props.dir) }
    ${ props => setHorizontalAlign(props.row) }
    ${ props => setVerticalAlign(props.col) }

    width: ${props => props.width || ""};
`;

export const Hidden = styled.div`
    display: none;
`;

export const ButtonContainer = styled(FlexBox)`
    cursor: pointer;
    ${props => props.login && css`
        width: 100px;
        height: 36px;
    `}
`;

export const Button = styled.button`
    /* width: 100%; */
    border-radius: 20px;
    border: 1px solid #E5E5E5;
    font-size: 14px;

    // 로그인 버튼
    ${props => props.login && css`
        width: 100%;
        border-radius: 20px;
        background-color: #fff;
        border: 1px solid #E5E5E5;
        font-size: 14px;
        color: #1669d6;
    `}
`;

export const LoginButton = styled(Button)`
    margin-top: 15px;
    font-size: 20px;
    font-weight: 700;
`;

export const OvalButton = styled(Button)`
    border: 0;
    border-radius: 20px;
    background-color: ${props => props.theme.btnBgColor};
    font-size: 14px;
    padding: 8px 16px;

    &:hover {
        background-color: ${props => props.theme.btnHoverBgColor};
    }

    & + & {
        margin-left: 8px;
    }
`;

export const IconWrapper = styled.div`
    position: absolute;
    left: 300px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 0;
    border-radius: 50%;
`;

export const ProfileImgContainer = styled(FlexBox)`
    width: 160px;
    height: 160px;
    cursor: pointer;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`

export const TitleContainer = styled.div`
    margin-bottom: 4px;
`;

export const Title = styled.span`
    word-break: break-word;
    color: ${props => props.theme.mainTextColor};
`;

export const BigTitle = styled(Title)`
    font-size: 36px;
    font-weight: 700;
    line-height: 36px;
`;

export const Description = styled.span`
    font-size: 14px;
    color: ${props => props.theme.subTextColor};

    & + &::before {
        content: ' ‧ ';
    }
`;

export const Link = styled.a`
`;

export const InfoLink = styled(Link)`
    display: block;
    margin: 8px 0 24px 0;
    font-size: 14px;
    color: ${props => props.theme.subTextColor};
`;

export const MarginLabel = styled.label`
    margin-top: 10px;
`

export const TempInput = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.3)!important;
    height: 40px;
    font-size: 20px;
`;

// flex-box의 flex-direction 설정
const setDirection = (dir) => {
    switch (dir) {
        case "col":
            return `
                flex-direction: column;
            `;
    }
}

// flex-box 안의 justify-content 값 설정
const setHorizontalAlign = (row) => {
    switch (row) {
        case "center":
            return `
                justify-content: center;
            `;
        case "start":
            return `
                justify-content: flex-start;
            `;
        case "end":
            return `
                justify-content: flex-end;
            `;
        case "between":
            return `
                justify-content: space-between;
            `;
    }
}

// flex-box 안의 align-items 값 설정
const setVerticalAlign = (col) => {
    switch (col) {
        case "center":
            return `
                align-items: center;
            `;
        case "start":
            return `
                align-items: flex-start;
            `;
        case "end":
            return `
                align-items: flex-end;
            `;
        case "baseline":
            return `
                align-items: baseline;
            `;
        case "stretch":
            return `
                align-items: stretch;
            `;
    }
}