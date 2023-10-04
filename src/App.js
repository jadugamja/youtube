import React from "react";
import { useSelector } from "react-redux";

import Header from "components/Header/Header";
import Nav from "components/Nav/Nav";
import MainHome from "components/Main/MainHome";
import MainShorts from "components/Main/MainShorts";
import MainSubscribe from "components/Main/MainSubscribe";
import MainLibrary from "components/Main/MainLibrary";

const App = () => {

    // 선택 메뉴
    const selectedMenu = useSelector(state => state.selectedMenu);

    // 첫 로드 시 스크롤 최상단 위치
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedMenu]);
    
    return (
        <React.Fragment>
            <Header />
            <Nav />
            {
                selectedMenu === 0 && <MainHome />
            }
            {
                selectedMenu === 1 && <MainShorts />
            }
            {
                selectedMenu === 2 && <MainSubscribe />
            }
            {
                selectedMenu === 3 && <MainLibrary />
            }
        </React.Fragment>
    );
}

export default App;