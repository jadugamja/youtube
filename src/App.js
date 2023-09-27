import React, { useState } from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import MainHome from "./components/MainHome"
import MainShorts from "./components/MainShorts"
import MainSubscribe from "./components/MainSubscribe"
import MainLibrary from "./components/MainLibrary"

const App = () => {

    // 네비바 열림/닫힘 여부
    const [isOpen, setIsOpen] = useState(false);

    // 네비바 메뉴 선택 여부
    const [isSelected, setIsSelected] = useState(0);

    // 렌더링할 메인 아이템 선택
    let mainItem;

    switch (isSelected) {
        case 1:
            mainItem = <MainShorts />;
            break;
        case 2:
            mainItem = <MainSubscribe />;
            document.getElementById("root").style.overflow = "hidden";
            break;
        case 3:
            mainItem = <MainLibrary />;
            break;
        default:
            mainItem = <MainHome />;
    }

    // 첫 로드 시 스크롤 최상단 위치
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [isSelected]);
    
    return (
        <React.Fragment>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Nav isOpen={isOpen} isSelected={isSelected} setIsSelected={setIsSelected} />
            {mainItem}
        </React.Fragment>
    );
}

export default App
