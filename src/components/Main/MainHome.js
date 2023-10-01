import React, { useState } from "react";
import MainHomeItem from "./MainHomeItem";
import videoSet from "db/videoSet.json"
import "./Main.Home.css";

const MainHome = () => {
            
    // 스크롤이 문서 최하단에 위치한 횟수
    const [isScrolledDown, setIsScrolledDown] = useState(0);

    // 영상 정보
    const [dataSet, setDataSet] = useState(videoSet.slice(isScrolledDown, isScrolledDown + 16));

    // 키워드 정보
    let [keywordsSet, setKeywordsSet] = useState([]);

    // 스크롤 문서 최하단 위치 시 콘텐츠 추가 이벤트
    const scrollDownToNextContentEvent = () => {
        const root = document.getElementById("root");
        
        // 현재 스크롤 위치
        let scrollTop = window.pageYOffset || root.scrollTop;

        // 문서의 전체 높이
        let documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, root.clientHeight, root.scrollHeight, root.offsetHeight
        );
        
        // 뷰포트의 높이
        var windowHeight = window.innerHeight || root.clientHeight || document.body.clientHeight;

        // 스크롤 위치가 문서 최하단에 닿았을 때
        if (scrollTop + windowHeight >= documentHeight) {
            const nextData = videoSet.slice((isScrolledDown + 1) * 16, (isScrolledDown + 2) * 16);
            setIsScrolledDown(prevIsScrolledDown => prevIsScrolledDown + 1);
            setDataSet(prevDataSet => [...prevDataSet, ...nextData]);
        }
    }

    // public 데이터 불러오기
    const fetchData = async () => {
        try {
            // using URL full name
            // const response = await fetch("http://localhost:3000/data.json", { method: "GET" });
            const res = await fetch('/data.json');
            keywordsSet = await res.json();
            setKeywordsSet(keywordsSet.keywords);
        } catch (error) {
            console.error('데이터를 불러오는 중 오류 발생: ', error);
        }
    };

    // 키워드 선택 여부 및 클릭 이벤트
    const [isSelected, setIsSelected] = React.useState(0);
    const clickKeywordButtonEvent = (idx) => setIsSelected(idx);

    React.useEffect(() => {

        fetchData();

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
                    keywordsSet.map((item, index) => {
                        return (
                            <div onClick={() => {clickKeywordButtonEvent(index)}} className={`keyword ${isSelected === index? "active": ""}`} key={index} idx={index} value={item.value}>
                                <span>{item.key}</span>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="contents-container">
                {
                    dataSet.map((item, index) => {
                        return <MainHomeItem item={item} idx={index} key={index} />
                    })
                }
            </div>
        </main>
    );
}

export default MainHome;