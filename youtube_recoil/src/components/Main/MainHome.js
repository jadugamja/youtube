import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { selectedKeywordState, videoKeywordsState } from "recoil/atoms/mainAtom";
import MainHomeItem from "./MainHomeItem";
import videoSet from "db/videoSet.json";
import { fetchData } from "utils/fetchData";
import "./Main.Home.css";

const MainHome = () => {

    // 스크롤이 문서 최하단에 위치한 횟수
    const [isScrolledDown, setIsScrolledDown] = useState(0);
    // 영상 정보
    const [videoContent, setVideoContent] = useState(videoSet.slice(isScrolledDown, isScrolledDown + 16));
    // 영상 키워드 정보
    const [videoKeywords, setVideoKeywords] = useRecoilState(videoKeywordsState);
    // 선택된 키워드
    const [selectedKeyword, setSelectedKeyword] = useRecoilState(selectedKeywordState);

    // 선택 키워드 및 클릭 이벤트
    const clickKeywordButtonEvent = (idx) => setSelectedKeyword(idx);
    
    // 스크롤 문서 최하단 위치 시 콘텐츠 추가 이벤트
    const scrollDownToNextContentEvent = () => {
        const root = document.getElementById("root");
        let scrollTop = window.pageYOffset || root.scrollTop;   // 현재 스크롤 위치
        let documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, root.clientHeight, root.scrollHeight, root.offsetHeight
        );  // 문서의 전체 높이
        let windowHeight = window.innerHeight || root.clientHeight || document.body.clientHeight; // 뷰포트의 높이

        // 스크롤 위치가 문서 최하단에 닿았을 때
        if (scrollTop + windowHeight >= documentHeight) {
            const nextData = videoSet.slice((isScrolledDown + 1) * 16, (isScrolledDown + 2) * 16);
            setIsScrolledDown(prevIsScrolledDown => prevIsScrolledDown + 1);
            setVideoContent( prevVideoContent => [...prevVideoContent, ...nextData] );
        }
    }

    React.useEffect(() => {

        fetchData("/data.json", (data) => setVideoKeywords(data.keywords));
    
        // isScrolledDown의 상태가 변화할 때마다 이벤트 핸들러 호출
        window.addEventListener("scroll", scrollDownToNextContentEvent, true);

        // 컴포넌트 언마운트 시, 이벤트 리스너 제거
        return () => 
            window.removeEventListener("scroll", scrollDownToNextContentEvent);

    }, [isScrolledDown]);

    return (
        <main>
            <div className="vertical-align-center keywords-container">
                <div className="vertical-align-center keyword-box">
                {
                    videoKeywords.map((item, index) => {
                        return (
                            <div onClick={() => {clickKeywordButtonEvent(index)}} className={`keyword ${selectedKeyword === index? "active": ""}`} key={index} idx={index} value={item.value}>
                                <span>{item.key}</span>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="contents-container">
                {
                    videoContent.map((item, index) => {
                        return <MainHomeItem item={item} idx={index} key={index} />
                    })
                }
            </div>
        </main>
    );
}

export default MainHome;