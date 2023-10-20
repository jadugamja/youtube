import styled from "styled-components";

export const FlexBoxDiv = styled.div`
    display: flex;
    ${ props => setHorizontalAlign(props.row) }
    ${ props => setVerticalAlign(props.col) }
    ${ props => setDirection(props.dir) }
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
