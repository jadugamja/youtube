import { useState } from "react";
import { useDispatch } from "react-redux";
import{ toggleMenuButton } from "redux/action";

import "./Header.css";
import menu from "assets/menu.png";
import logo from "assets/logo.png";
import search from "assets/search.png";
import keyboard from "assets/keyboard.png";
import mic from "assets/mic.png";

const Header = () => {

    const dispatch = useDispatch();

    // 메뉴바 버튼 클릭 이벤트
    const toggleEvent = () => {
        dispatch(toggleMenuButton());
    }

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

    return (
        <header>
            <div className="vertical-align-center h-left-box">
                <div className="vertical-align-center h-left">
                    <div id="menu" className="align-center menu-box" onClick={toggleEvent}>
                        <img className="i-menu" src={menu} />
                    </div>
                    <a className="logo-box" href="#">
                        <img className="i-logo" src={logo} />
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
                                <img className="i-search" src={search} />
                        }
                            <input type="text" className="input" placeholder="검색" />
                            <div className="keyboard-box" onClick={toggleKeyboardEvent}>
                                <img className="i-keyboard" src={keyboard} />
                            </div>
                        </div>
                    </div>
                    <div className="search-btn-area" onMouseOver={() => {activateTooltipEvent(0)}} onMouseOut={disabledTooltipEvent}>
                        <input type="submit" value="" />
                        <img className="i-search" src={search} />
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
                    <img className="i-mic" src={mic} />
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
                <div className="align-center h-right-item" onMouseOver={() => {activateTooltipEvent(2)}} onMouseOut={disabledTooltipEvent}>
                    <img className="i-video" src={require(`assets/video.png`)} alt="video" />
                        {
                            isHover === 2 && (
                                <div id="tooltip-video" className="tooltip">
                                    <span className="tooltip-txt">만들기</span>
                                </div>
                            )
                        }
                </div>
                <div className="align-center h-right-item" onMouseOver={() => {activateTooltipEvent(3)}} onMouseOut={disabledTooltipEvent}>
                    <img className={`i-bell`} src={require(`assets/bell.png`)} alt="bell" />
                       {
                            isHover === 3 && (
                                <div id="tooltip-video" className="tooltip">
                                    <span className="tooltip-txt">알림</span>
                                </div>
                            )
                        }
             </div>
                <div className="align-center profile">
                    <img className="i-user" alt="user"/>
                </div>
            </div>
        </header>
    )
}

export default Header;