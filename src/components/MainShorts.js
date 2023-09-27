import React from "react";
import { faVolumeHigh, faThumbsUp, faThumbsDown, faMessage, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.Shorts.css";

const MainShorts = () => {
    
    const videoRef = React.useRef(null);
    const [isHover, setIsHover] = React.useState(false);

    const activateHeaderEvent = () => setIsHover(true);
    const disabledHeaderEvent = () => {
        if(!videoRef.current.paused)
            setIsHover(false);
    }
    
    const togglePlayPauseEvent = () => {
        setIsHover(true);

        if(videoRef.current.paused)
            videoRef.current.play();
        else
            videoRef.current.pause();
    }

    return (
        <main className="vertical-align-center">
            <div className="container" onMouseOver={() => {activateHeaderEvent()}} onMouseOut={disabledHeaderEvent}>
                <div className="play-container" onClick={togglePlayPauseEvent}>
                    <video ref={videoRef} controls autoplay="true" loop="loop">
                        <source type="video/mp4" src={`${process.env.PUBLIC_URL}/media/test.mp4`}></source>
                    </video>
                    <div className={`play-header ${!isHover ? "hide": "" }`}>
                        <button className="play">▶</button>
                        <button className="volume">
                            <FontAwesomeIcon icon={faVolumeHigh} style={{color: "#ffffff"}}/>
                        </button>
                    </div>
                    <div className="play-footer">
                        <div className="title-container">
                            <h2 className="video-title">쇼츠 제목1</h2>
                        </div>
                        <div className="sub-title-container hide">
                            <a>
                                <h3 className="video-sub-title">
                                    <div>▶</div>
                                    <span>쇼츠 제목2</span>
                                </h3>
                            </a>
                        </div>
                        <div>
                            <div className="profile-container">
                                <div className="profile"></div>
                                <div className="channel-name">
                                    <span className="channel-name-txt">{`@account1`}</span>
                                </div>
                            </div>
                            <div className="sub-button-container">
                                <button className="sub-button">구독</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feedback-container">
                    <div className="button-container">
                        <button className="rounded-button">
                            <FontAwesomeIcon icon={faThumbsUp}/>
                        </button>
                        <span>ddd</span>
                    </div>
                    <div className="button-container">
                        <button className="rounded-button">
                            <FontAwesomeIcon icon={faThumbsDown} flip="horizontal"/>
                        </button>
                        <span>싫어요</span>
                    </div>
                    <div className="button-container">
                        <button className="rounded-button">
                            <FontAwesomeIcon icon={faMessage} flip="horizontal" />
                        </button>
                        <span>5</span>
                    </div>
                    <div className="button-container">
                        <button className="rounded-button">
                            <FontAwesomeIcon icon={faShare} />
                        </button>
                        <span>공유</span>
                    </div>
                    <div className="button-container">
                        <button className="rounded-button">⋯</button>
                    </div>
                    <div className="button-container">
                        <button className="square-rounded-button">??</button>
                    </div>
                </div>
            </div>
            <div className="top-button-container">
                <button className="bigger-rounded-button">↑</button>
            </div>
            <div className="bottom-button-container">
                <button className="bigger-rounded-button">↓</button>
            </div>
        </main>
    );
}

export default MainShorts;