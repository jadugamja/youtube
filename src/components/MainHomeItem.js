import {useState} from "react";

const MainHomeItem = (props) => {

    const {item: {channelName, channelProfile, videoTitle, staticThumbnail, animatedThumbnail, hitsPerVideo, uploadedPeriod}, idx} = props;
    
    const [isPlaying, setIsPlaying] = useState(false);

    // 마우스 오버 시
    const handleThumbnailMouseOver = props => setIsPlaying(true);
        
    // 마우스 떼면
    const handleThumbnailMouseOut = props => setIsPlaying(false);

    return(
        <section onMouseOver={handleThumbnailMouseOver} onMouseOut={handleThumbnailMouseOut}>
            <div className="align-center">
                <a className="thumbnail-box">
                    <img id={`thumbnail-${idx}`} className="thumbnail" src={isPlaying ? animatedThumbnail : staticThumbnail} />
                </a>
            </div>
            <div className="main-desc-container">
                <div className="left-side-box">
                    <a className="channel-profile">
                        <img className="img-channel-profile" src={channelProfile} />
                    </a>
                </div>
                <div className="right-side-box">
                    <div className="vertical-align-center right-side-box-header">
                        <h2 className="txt-title">{videoTitle}</h2>
                        <button className="kebab-btn"></button>
                    </div>
                    <div className="right-side-box-profile">
                        <div>
                            <span className="txt-name">{channelName}</span>
                            <img className="verified hide" />
                        </div>
                        <div>
                            <span className="txt-name">{`조회수 ${hitsPerVideo}회 · ${uploadedPeriod} 전`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainHomeItem;