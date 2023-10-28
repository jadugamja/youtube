import React from "react";
import { useRecoilValue } from "recoil";

import { selectedMenuState } from "../../recoil/atoms/mainAtom";
import MainHome from "./MainHome";
import MainShorts from "./MainShorts";
import MainSubscribe from "./MainSubscribe";
import MainLibrary from "./MainLibrary";
import MainMyChannel from "./MainMyChannel.jsx";

const Main = () => {

    // 선택 메뉴
    const selectedMenu = useRecoilValue(selectedMenuState);

    // 첫 로드 시 스크롤 최상단 위치
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedMenu]);

    return (
        <React.Fragment>
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
            {
                selectedMenu === 4 && <MainMyChannel />
            }
        </React.Fragment>
    );
}

export default Main;