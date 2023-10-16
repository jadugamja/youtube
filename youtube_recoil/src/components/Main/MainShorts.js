import React from "react";
import { faPause, faVolumeHigh, faThumbsUp, faThumbsDown, faMessage, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShortsMain, ContainerDiv, VideoContainerDiv, Video, VideoHeaderDiv, MediaControlButton, VideoFooterDiv, VideoTitle, VideoSubtitleContainerDiv, VideoSubtitle, ProfileContainerDiv, ProfileDiv, ChannelNameContainerDiv, ChannelNameSpan, SubButtonContainerDiv, SubButton, FeedbackContainerDiv, ButtonContainerDiv, RoundedButton, SquareRoundedButton, FixedButtonContainerDiv, BiggerRoundedButton } from "components/Main/MainShortsStyle";

const MainShorts = () => {
    
    const videoRef = React.useRef(null);
    const [isHover, setIsHover] = React.useState(false);
    const [isPlaying, setIsPlaying] = React.useState(true);

    const activateHeaderEvent = () => setIsHover(true);
    const disabledHeaderEvent = () => {
        if(!videoRef.current.paused)
            setIsHover(false);
    }
    
    const togglePlayPauseEvent = () => {
        if(videoRef.current.paused) {
            setIsPlaying(true);
            videoRef.current.play();
        } else {
            setIsPlaying(false);
            videoRef.current.pause();
        }
    }

    return (
        <ShortsMain>
            <ContainerDiv onMouseOver={() => {activateHeaderEvent()}} onMouseOut={disabledHeaderEvent}>
                <VideoContainerDiv onClick={togglePlayPauseEvent}>
                    <Video ref={videoRef} controls autoPlay={true} loop="loop">
                        <source type="video/mp4" src={`${process.env.PUBLIC_URL}/media/test.mp4`}></source>
                    </Video>
                    <VideoHeaderDiv row="between" col="baseline" hover={isHover}>
                        {
                            isPlaying
                                ? <MediaControlButton size="medium">▶</MediaControlButton>
                                : <MediaControlButton size="large"> <FontAwesomeIcon icon={faPause} style={{color: "#ffffff"}} /> </MediaControlButton>
                        }
                        <MediaControlButton size="medium">
                            <FontAwesomeIcon icon={faVolumeHigh} style={{color: "#ffffff"}}/>
                        </MediaControlButton>
                    </VideoHeaderDiv>
                    <VideoFooterDiv>
                        <div>
                            <VideoTitle>쇼츠 제목1</VideoTitle>
                        </div>
                        <VideoSubtitleContainerDiv hide>
                            <VideoSubtitle>
                                <div>▶</div>
                                <span>쇼츠 제목2</span>
                            </VideoSubtitle>
                        </VideoSubtitleContainerDiv>
                        <div>
                            <ProfileContainerDiv>
                                <ProfileDiv></ProfileDiv>
                                <ChannelNameContainerDiv col="center">
                                    <ChannelNameSpan>{`@account1`}</ChannelNameSpan>
                                </ChannelNameContainerDiv>
                            </ProfileContainerDiv>
                            <SubButtonContainerDiv>
                                <SubButton>구독</SubButton>
                            </SubButtonContainerDiv>
                        </div>
                    </VideoFooterDiv>
                </VideoContainerDiv>
                <FeedbackContainerDiv dir="col" row="end">
                    <ButtonContainerDiv dir="col" row="center" col="center">
                        <RoundedButton>
                            <FontAwesomeIcon icon={faThumbsUp}/>
                        </RoundedButton>
                        <span>ddd</span>
                    </ButtonContainerDiv>
                    <ButtonContainerDiv dir="col" row="center" col="center">
                        <RoundedButton>
                            <FontAwesomeIcon icon={faThumbsDown} flip="horizontal"/>
                        </RoundedButton>
                        <span>싫어요</span>
                    </ButtonContainerDiv>
                    <ButtonContainerDiv dir="col" row="center" col="center">
                        <RoundedButton>
                            <FontAwesomeIcon icon={faMessage} flip="horizontal" />
                        </RoundedButton>
                        <span>5</span>
                    </ButtonContainerDiv>
                    <ButtonContainerDiv dir="col" row="center" col="center">
                        <RoundedButton>
                            <FontAwesomeIcon icon={faShare} />
                        </RoundedButton>
                        <span>공유</span>
                    </ButtonContainerDiv>
                    <ButtonContainerDiv dir="col" row="center" col="center">
                        <RoundedButton>⋯</RoundedButton>
                    </ButtonContainerDiv>
                    <ButtonContainerDiv dir="col" row="center" col="center">
                        <SquareRoundedButton>??</SquareRoundedButton>
                    </ButtonContainerDiv>
                </FeedbackContainerDiv>
            </ContainerDiv>
            <FixedButtonContainerDiv type="top">
                <BiggerRoundedButton>↑</BiggerRoundedButton>
            </FixedButtonContainerDiv>
            <FixedButtonContainerDiv type="bottom">
                <BiggerRoundedButton>↓</BiggerRoundedButton>
            </FixedButtonContainerDiv>
        </ShortsMain>
    );
}

export default MainShorts;