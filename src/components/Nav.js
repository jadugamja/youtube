import NavItem from "./NavItem";
import "./Nav.css";

const Nav = ({isOpen, isSelected, setIsSelected}) => {

    // 네비바 항목 선택 및 클릭 이벤트
    const clickNavItemEvent = (idx) => setIsSelected(idx);
    
    // 사이드 바 닫혔을 때
    // const closedMenuListSet = JSON.parse(JSON.stringify(closedMenuList));
    const closedMenuListSet = [
        {
            "id": "home",
            "name": "홈"
        }, 
        {
            "id": "shorts",
            "name": "Shorts"
        },
        {
            "id": "sub",
            "name": "구독"
        },
        {
            "id": "lib",
            "name": "보관함"
        }
    ]

    // 사이드 바 열렸을 때
    // const openMenuListsSet = JSON.parse(JSON.stringify(openMenuLists));
    const openMenuListsSet = {
        "firstGroup": {
            "title": "",
            "contents": [
                {
                    "id": "home",
                    "name": "홈"
                }, {
                    "id": "shorts",
                    "name": "Shorts"
                }, {
                    "id": "sub",
                    "name": "구독"
                }
            ]
        }, 
        "secondGroup" : {
            "title": "",
            "contents": [
                {
                    "id": "lib",
                    "name": "보관함"
                }, {
                    "id": "record",
                    "name": "시청 기록"
                }, {
                    "id": "my-video",
                    "name": "내 동영상"
                }, {
                    "id": "my-film",
                    "name": "내 영화"
                }, {
                    "id": "later",
                    "name": "나중에 볼 동영상"
                }, {
                    "id": "likes",
                    "name": "좋아요 표시한 동영상"
                }
            ]
        }, 
        "thirdGroup" : {
            "title": "구독",
            "contents": []
        }, 
        "fourthGroup" : {
            "title": "탐색",
            "contents": [
                {
                    "id": "popular",
                    "name": "인기 급상승"
                }, {
                    "id": "shopping",
                    "name": "쇼핑"
                }, {
                    "id": "music",
                    "name": "음악"
                }, {
                    "id": "film",
                    "name": "영화"
                }, {
                    "id": "real-time",
                    "name": "실시간"
                }, {
                    "id": "game",
                    "name": "게임"
                }, {
                    "id": "sports",
                    "name": "스포츠"
                }, {
                    "id": "learning",
                    "name": "학습"
                }
            ]
        },
        "fifthGroup" : {
            "title": "",
            "contents": [
                {
                    "id": "yt-premium",
                    "name": "YouTube Premium"
                },
                {
                    "id": "yt-studio",
                    "name": "YouTube 스튜디오"
                },
                {
                    "id": "yt-music",
                    "name": "YouTube Music"
                },
                {
                    "id": "yt-kids",
                    "name": "YouTube Kids"
                }
            ]
        }, 
        "sixthGroup" : {
            "title": "",
            "contents": [
                {
                    "id": "setting",
                    "name": "설정"
                },
                {
                    "id": "report",
                    "name": "신고 기록"
                },
                {
                    "id": "customer",
                    "name": "고객센터"
                },
                {
                    "id": "comments",
                    "name": "의견 보내기"
                }
            ]
        }
    }; 

    return (
        <>
            <nav>
                {
                    isOpen
                        ?
                            <>
                            <div className="nav-open">
                                {
                                    Object.values(openMenuListsSet).map((group, groupIndex) => {
                                        return (
                                            <ul className="active" key={groupIndex}>
                                                {
                                                    group.title !== "" &&
                                                        <h3>{group.title}</h3>
                                                }{
                                                    Object.values(group.contents).map((menu, index) => (
                                                        <NavItem item={menu} />
                                                    ))
                                                }
                                                <hr />
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                            <div className="scroll"></div>
                            </>
                        :
                            <ul className="nav-closed">
                                {
                                    closedMenuListSet.map((item, index) => 
                                        <NavItem onClick={() => {clickNavItemEvent(index)}} item={item} isSelected={isSelected === index} />
                                    )
                                }
                            </ul>
                }
            </nav>
                {
                    isOpen &&
                        <div className="modal"></div>
                }
        </>
    );
}

export default Nav;