import React, { useState } from "react";

import { getTimeAgo } from "../../api/post"
import { VideoSection, ThumbnailContainerDiv, ThumbnailLink, ThumbnailImg, VideoDescContainerDiv, ChannelProfileImg, DescRightContainerDiv, DescRightHeaderDiv, DescRightProfileDiv, VideoTitle, KebabButton, NameSpan, VerifiedImg } from "./MainHomeItemStyle";

const MainHomeItem = (props) => {

    // 서버에서 제공해주지 않은 데이터: videoTitle, animatedThumbnail, hitsPerVideo
    const {item: {nickname, profileImgPath, videoTitle, thumbnailImgPath, animatedThumbnail, hitsPerVideo, createdAt}, idx} = props;
    const [isPlaying, setIsPlaying] = useState(false);

    const uploadedPeriod = getTimeAgo(new Date(createdAt).getTime());

    // 마우스 오버 시
    const handleThumbnailMouseOver = () => setIsPlaying(true);
    // 마우스 떼면
    const handleThumbnailMouseOut = () => setIsPlaying(false);

    return(
        <VideoSection onMouseOver={handleThumbnailMouseOver} onMouseOut={handleThumbnailMouseOut}>
            <ThumbnailContainerDiv row="center" col="center">
                <ThumbnailLink href="#">
                    <ThumbnailImg id={`thumbnail-${idx}`} src={isPlaying ? animatedThumbnail : thumbnailImgPath } alt="thumbnail" />
                </ThumbnailLink>
            </ThumbnailContainerDiv>
            <VideoDescContainerDiv row="between">
                <div>
                    <a>
                        <ChannelProfileImg src={profileImgPath} />
                    </a>
                </div>
                <DescRightContainerDiv>
                    <DescRightHeaderDiv row="between" col="baseline">
                        <VideoTitle>임시 영상 제목입니다.</VideoTitle>
                        <KebabButton></KebabButton>
                    </DescRightHeaderDiv>
                    <DescRightProfileDiv dir="col">
                        <div>
                            <NameSpan>{nickname}</NameSpan>
                            <VerifiedImg hide />
                        </div>
                        <div>
                            <NameSpan>{`조회수 10만 회 · ${uploadedPeriod} 전`}</NameSpan>
                        </div>
                    </DescRightProfileDiv>
                </DescRightContainerDiv>
            </VideoDescContainerDiv>
        </VideoSection>
    )
}

export default MainHomeItem;