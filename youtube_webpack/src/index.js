import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import App from "./App";

const theme = {
    searchBorderColor: '#ccc',
    searchFocusBorderColor: '#1c62b9',
    searchBtnBgColor: '#f8f8f8',
    btnBgColor: '#f2f2f2',
    btnHoverBgColor: '#E5E5E5',
    
    mainTextColor: '#0F0F0F',
    subTextColor: '#606060',
}

const GlobalStyle = createGlobalStyle`
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-family: Roboto, Arial, sans-serif, "FontAwesome";
    }

    html, body, #root {
        height: 100%;
    }

    body, #root {
        position: absolute;
        width: 100%;
        overflow-x: hidden;
    }

    body {
        margin: 0;
    }

    main {
        position: relative;
        top: 60px;
        left: 72px;
        height: 100%;
    }

    input[type="text"], input[type="submit"] {
        padding: 0;
        outline: 0;
        border: 0;
        background: transparent;
    }

    form {
        margin: 0;
        margin-block-end: 0;
    }

    h1, h2, h3 {
        margin: 0;
    }

    button {
        border: 0;
        padding: 0;
        cursor: pointer;
    }

    ul, ol, dl {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    video::-webkit-media-controls {
        display: none;
    }

    video::-webkit-media-controls-play-button {
        display: none;
    }
    
    // 스크롤바
    ::-webkit-scrollbar {
        width: 17px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        /* width: 10px; */
        border-radius: 10px;
        background-color: #5D5D5D;
        background-clip: padding-box;
        border: 4px solid transparent;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #909090;
    }

    ::-webkit-scrollbar-track {
        /* width: 10px; */
        background-color: transparent;
    }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RecoilRoot>
            <CookiesProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <App />
                </ThemeProvider>
            </CookiesProvider>
        </RecoilRoot>
    </React.StrictMode>
);