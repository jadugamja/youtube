import { useState } from "react"
import HeaderRightSideButton from "./HeaderRightSideButton";
import "./Header.css";

const Header = (props) => {

    // 메뉴바 버튼 클릭 이벤트
    const {isOpen, setIsOpen} = props;
    const toggleMenuButtonEvent = () => setIsOpen(!isOpen);

    // 검색 영역 활성화 상태 여부 및 상태 변경 이벤트
    const [isActive, setIsActive] = useState(false);
    const activateInputEvent = () => setIsActive(true);
    const disabledInputEvent = () => setIsActive(false);

    // 키보드 아이콘 클릭 이벤트
    const toggleKeyboardEvent = () => console.log("키보드 아이콘 클릭")

    // 마우스 오버 상태 여부 및 툴팁 출력/숨김 상태 변경 이벤트
    const [isHover, setIsHover] = useState(false);
    const activateTooltipEvent = (idx) => setIsHover(idx);
    const disabledTooltipEvent = () => setIsHover(false);

    // 헤더 오른쪽 버튼 
    const buttonSet = [
        {
            icon: "video",
            contents: "upload"
        }, 
        {
            icon: "bell",
            contents: "alarm"
        },
        {
            icon: "",
            contents: "profile"
        }
    ];

    return (
        <header>
            <div className="vertical-align-center h-left-box">
                <div className="vertical-align-center h-left">
                    <div id="menu" className="align-center menu-box" onClick={toggleMenuButtonEvent}>
                        <img className="i-menu" src="./resources/icon/menu.png" />
                    </div>
                    <a className="logo-box" href="#">
                        <img className="i-logo" src="./resources/img/logo.png" />
                    </a>
                    <div id="tooltip-home" className="hide">
                        <span>YouTube 홈</span>
                    </div>
                </div>
            </div>
            <div className="align-center h-center">
                <form className="vertical-align-center">
                    <div className={`vertical-align-center input-area-container ${isActive ? "active" : ""}`} onFocus={activateInputEvent} onBlur={disabledInputEvent}>
                      <div className="vertical-align-center input-area">
                        {
                            isActive &&
                                <img className="i-search" src="./resources/icon/search.png" />
                        }
                            <input type="text" className="input" placeholder="검색" />
                            <div className="keyboard-box" onClick={toggleKeyboardEvent}>
                                <img className="i-keyboard" src="./resources/icon/keyboard.png" />
                            </div>
                        </div>
                    </div>
                    <div className="search-btn-area" onMouseOver={() => {activateTooltipEvent(0)}} onMouseOut={disabledTooltipEvent}>
                        <input type="submit" value="" />
                        <img className="i-search" src="./resources/icon/search.png" />
                        {
                            isHover === 0 && (
                                <div id="tooltip-search" className="tooltip">
                                    <span className="tooltip-txt">검색</span>
                                </div>
                            )
                        }
                    </div>
                </form>
                <div className="mic-box" onMouseOver={() => {activateTooltipEvent(1)}} onMouseOut={disabledTooltipEvent}>
                    <img className="i-mic" src="./resources/icon/mic.png" />
                        {
                            isHover === 1 && (
                                <div id="tooltip-search-by-voice" className="tooltip">
                                    <span className="tooltip-txt">음성으로 검색</span>
                                </div>
                            )
                        }
                </div>
            </div>
            <div className="vertical-align-center h-right">
                {
                    buttonSet.map((elem) => {
                        return (
                            <HeaderRightSideButton elem={elem} />
                        );
                    })
                }
            </div>
        </header>
    )
}

export default Header;