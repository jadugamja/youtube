import React, { useState } from "react";
import { VideoSection, ThumbnailContainerDiv, ThumbnailLink, ThumbnailImg, VideoDescContainerDiv, ChannelProfileImg, DescRightContainerDiv, DescRightHeaderDiv, DescRightProfileDiv, VideoTitle, KebabButton, NameSpan, VerifiedImg } from "./MainHomeItemStyle";

const MainHomeItem = (props) => {

    const {item: {channelName, channelProfile, videoTitle, staticThumbnail, animatedThumbnail, hitsPerVideo, uploadedPeriod}, idx} = props;
    const [isPlaying, setIsPlaying] = useState(false);

    // 마우스 오버 시
    const handleThumbnailMouseOver = () => setIsPlaying(true);

    // 마우스 떼면
    const handleThumbnailMouseOut = () => setIsPlaying(false);

    return(
        <VideoSection onMouseOver={handleThumbnailMouseOver} onMouseOut={handleThumbnailMouseOut}>
            <ThumbnailContainerDiv row="center" col="center">
                <ThumbnailLink href="#">
                    <ThumbnailImg id={`thumbnail-${idx}`} src={isPlaying ? animatedThumbnail : staticThumbnail } alt="thumbnail" />
                </ThumbnailLink>
            </ThumbnailContainerDiv>
            <VideoDescContainerDiv row="between">
                <div>
                    <a>
                        <ChannelProfileImg src={channelProfile} />
                    </a>
                </div>
                <DescRightContainerDiv>
                    <DescRightHeaderDiv row="between" col="baseline">
                        <VideoTitle>{videoTitle}</VideoTitle>
                        <KebabButton></KebabButton>
                    </DescRightHeaderDiv>
                    <DescRightProfileDiv dir="col">
                        <div>
                            <NameSpan>{channelName}</NameSpan>
                            <VerifiedImg hide />
                        </div>
                        <div>
                            <NameSpan>{`조회수 ${hitsPerVideo}회 · ${uploadedPeriod} 전`}</NameSpan>
                        </div>
                    </DescRightProfileDiv>
                </DescRightContainerDiv>
            </VideoDescContainerDiv>
        </VideoSection>
    )
}

export default MainHomeItem;