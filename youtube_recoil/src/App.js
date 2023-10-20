import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil"

import { isWideNavHiddenModalState } from "recoil/atoms/mainAtom"
import Header from "components/Header/Header";
import Nav from "components/Nav/Nav";
import Main from "components/Main/Main";

const App = () => {

    const setIsWideScreen = useSetRecoilState(isWideNavHiddenModalState);

    useEffect(() => {

        const resizeHandler = () => {
            const width = window.innerWidth;
            if (width > 1312) 
                setIsWideScreen(true);
            else if (width <= 1312) 
                setIsWideScreen(false);
        }
    
        resizeHandler();
        
        // 창 크기 변경 이벤트 리스너 등록
        window.addEventListener("resize", resizeHandler);

        // 창 크기 변경 이벤트 리스너 제거
        return () => window.removeEventListener("resize", resizeHandler);

    }, [setIsWideScreen]);

    return (
        <React.Fragment>
            <Header />
            <Nav />
            <Main />
        </React.Fragment>
    );
}

export default App;