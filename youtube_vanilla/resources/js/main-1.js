window.onload = () => {
  
    const createDynamicElement = () => {

        let hitsPerVideo = 0;
        let uploadedPeriod = 0;

        // ------------------------------- 헤더 -------------------------------
        const header = document.createElement("header");

        const divHeaderLeft = document.createElement("div");
        const divHeaderCenter = document.createElement("div");
        const divHeaderRight = document.createElement("div");
        
        divHeaderLeft.classList.add("vertical-align-center", "h-left");
        divHeaderCenter.classList.add("align-center", "h-center");
        divHeaderRight.classList.add("vertical-align-center", "h-right");
        
        // 헤더 왼쪽 영역
        const divMenuContainer = document.createElement("div");
        const imgMenu = document.createElement("img");

        divMenuContainer.classList.add("align-center", "menu-box");
        imgMenu.classList.add("i-menu");
        imgMenu.setAttribute("src", "/homework/intermediate/youtube/resources/icon/menu.png");
        divMenuContainer.appendChild(imgMenu);

        const divLogoContainer = document.createElement("div");
        const aLogoContainer = document.createElement("a");
        const imgLogo = document.createElement("img");

        // divLogoContainer.classList.add("h-left-item");
        aLogoContainer.classList.add("logo-box");
        aLogoContainer.setAttribute("href", "#");
        imgLogo.classList.add("i-logo");
        imgLogo.setAttribute("src", "/homework/intermediate/youtube/resources/img/logo.png");
        aLogoContainer.appendChild(imgLogo);
        divLogoContainer.appendChild(aLogoContainer);

        const divLogoTooltipContainer = document.createElement("div");
        const spanLogoTooltip = document.createElement("span");
        spanLogoTooltip.innerHTML = "YouTube 홈";
        divLogoTooltipContainer.classList.add("hide");
        divLogoTooltipContainer.appendChild(spanLogoTooltip);
        divLogoContainer.appendChild(divLogoTooltipContainer);

        divHeaderLeft.appendChild(divMenuContainer);
        divHeaderLeft.appendChild(divLogoContainer);

        // 헤더 가운데 영역
        const formSearch = document.createElement("form");
        const divSearchContainer = document.createElement("div");
        const iconSearch = document.createElement("i");
        const divInputContainer = document.createElement("div");
        const inputSearch = document.createElement("input");
        const divTouchKeyboardContainer = document.createElement("div");
        const aTouchKeyboard = document.createElement("a");
        const imgTouchKeyboard = document.createElement("img");

        formSearch.classList.add("vertical-align-center");
        divSearchContainer.classList.add("vertical-align-center", "input-area-container");
        divInputContainer.classList.add("vertical-align-center", "input-area");
        inputSearch.classList.add("input");
        inputSearch.setAttribute("type", "text");
        inputSearch.setAttribute("placeholder", "검색");
        iconSearch.classList.add("icon", "fa-solid", "fa-magnifying-glass", "hide");
        divTouchKeyboardContainer.classList.add("keyboard-box");
        imgTouchKeyboard.classList.add("i-keyboard");
        imgTouchKeyboard.setAttribute("src", "/homework/intermediate/youtube/resources/icon/keyboard.png");

        aTouchKeyboard.appendChild(imgTouchKeyboard);
        divTouchKeyboardContainer.appendChild(aTouchKeyboard);
        divInputContainer.appendChild(iconSearch);
        divInputContainer.appendChild(inputSearch);
        divInputContainer.appendChild(divTouchKeyboardContainer);

        const divSearchButtonContainer = document.createElement("div");
        const inputSubmit = document.createElement("input");
        const imgBigSearch = document.createElement("img");
        
        divSearchButtonContainer.classList.add("search-btn-area");
        inputSubmit.setAttribute("type", "submit");
        inputSubmit.value = ``;
        imgBigSearch.classList.add("i-search");
        imgBigSearch.setAttribute("src", "/homework/intermediate/youtube/resources/icon/search.png");

        divSearchButtonContainer.appendChild(inputSubmit);
        divSearchButtonContainer.appendChild(imgBigSearch);

        const divSearchByVoiceContainer = document.createElement("div");
        const imgMic = document.createElement("img");

        divSearchByVoiceContainer.classList.add("mic-box");
        imgMic.classList.add("i-mic");
        imgMic.setAttribute("src", "/homework/intermediate/youtube/resources/icon/mic.png");
        divSearchByVoiceContainer.appendChild(imgMic);

        const divSearchTooltipContainer = document.createElement("div");
        const spanSearchTooltip = document.createElement("span");
        divSearchTooltipContainer.classList.add("hide");
        spanSearchTooltip.innerHTML = `검색`;
        divSearchTooltipContainer.appendChild(spanSearchTooltip);
        divSearchButtonContainer.appendChild(divSearchTooltipContainer);

        const divSearchByVoiceTooltipContainer = document.createElement("div");
        const spanSearchByVoiceTooltip = document.createElement("span");
        divSearchByVoiceTooltipContainer.classList.add("hide");
        spanSearchByVoiceTooltip.innerHTML = `음성으로 검색`;
        divSearchByVoiceTooltipContainer.appendChild(spanSearchByVoiceTooltip);
        divSearchByVoiceContainer.appendChild(divSearchByVoiceTooltipContainer);

        divSearchContainer.appendChild(divInputContainer);

        formSearch.appendChild(divSearchContainer);
        formSearch.appendChild(divSearchButtonContainer);

        divHeaderCenter.appendChild(formSearch);
        divHeaderCenter.appendChild(divSearchByVoiceContainer);

        // 헤더 오른쪽 영역
        const divMakeVideoContainer = document.createElement("div");
        const imgVideo = document.createElement("img");
        const divAlarmContainer = document.createElement("div");
        const imgAlarm = document.createElement("img");
        const divUserPropileContainer = document.createElement("div");
        const imgUserPropile = document.createElement("img");

        divMakeVideoContainer.classList.add("align-center", "h-right-item");
        divAlarmContainer.classList.add("align-center", "h-right-item");
        divUserPropileContainer.classList.add("align-center", "profile");
        imgVideo.classList.add("i-video");
        imgVideo.setAttribute("src", "/homework/intermediate/youtube/resources/icon/video.png");
        divMakeVideoContainer.appendChild(imgVideo);

        imgAlarm.classList.add("i-bell");
        imgAlarm.setAttribute("src", "/homework/intermediate/youtube/resources/icon/bell.png");
        divAlarmContainer.appendChild(imgAlarm);

        imgUserPropile.classList.add("i-user");
        divUserPropileContainer.appendChild(imgUserPropile);

        divHeaderRight.appendChild(divMakeVideoContainer);
        divHeaderRight.appendChild(divAlarmContainer);
        divHeaderRight.appendChild(divUserPropileContainer);

        header.appendChild(divHeaderLeft);
        header.appendChild(divHeaderCenter);
        header.appendChild(divHeaderRight);

        // ------------------------------- 헤더 -------------------------------

        // ------------------------------ 네비바 ------------------------------
        // 루프로.. 제발...
        const nav = document.createElement("nav");

        // 홈
        const divHomeContainer = document.createElement("div");
        const divimgHomeContainer = document.createElement("div");
        const imgHome = document.createElement("img");
        const spanHome = document.createElement("span");

        divHomeContainer.classList.add("nav-item", "home-pad");
        divimgHomeContainer.classList.add("i-wrapper");
        imgHome.classList.add("i-home");
        imgHome.setAttribute("src", "/homework/intermediate/youtube/resources/icon/home.png");
        spanHome.innerHTML = `홈`;

        divimgHomeContainer.appendChild(imgHome);
        divHomeContainer.appendChild(divimgHomeContainer);
        divHomeContainer.appendChild(spanHome);

        // 쇼츠
        const divShortsContainer = document.createElement("div");
        const divimgShortsContainer = document.createElement("div");
        const imgShorts = document.createElement("img");
        const spanShorts = document.createElement("span");

        divShortsContainer.classList.add("nav-item", "shorts-pad");
        divimgShortsContainer.classList.add("i-wrapper");
        imgShorts.classList.add("i-shorts");
        imgShorts.setAttribute("src", "/homework/intermediate/youtube/resources/icon/shorts.png");
        spanShorts.innerHTML = `Shorts`;

        divimgShortsContainer.appendChild(imgShorts);
        divShortsContainer.appendChild(divimgShortsContainer);
        divShortsContainer.appendChild(spanShorts);

        // 구독
        const divSubscribeContainer = document.createElement("div");
        const divimgSubscribeContainer = document.createElement("div");
        const imgSubscribe = document.createElement("img");
        const spanSubscribe = document.createElement("span");

        divSubscribeContainer.classList.add("nav-item", "sub-pad");
        divimgSubscribeContainer.classList.add("i-wrapper");
        imgSubscribe.classList.add("i-sub");
        imgSubscribe.setAttribute("src", "/homework/intermediate/youtube/resources/icon/sub.png");
        spanSubscribe.innerHTML = `구독`;
        
        divimgSubscribeContainer.appendChild(imgSubscribe);
        divSubscribeContainer.appendChild(divimgSubscribeContainer);
        divSubscribeContainer.appendChild(spanSubscribe);

        // 보관함
        const divLibraryContainer = document.createElement("div");
        const divimgLibraryContainer = document.createElement("div");
        const imgLibrary = document.createElement("img");
        const spanLibrary = document.createElement("span");

        divLibraryContainer.classList.add("nav-item", "lib-pad");
        divimgLibraryContainer.classList.add("i-wrapper");
        imgLibrary.classList.add("i-lib");
        imgLibrary.setAttribute("src", "/homework/intermediate/youtube/resources/icon/lib.png");
        spanLibrary.innerHTML = `보관함`;

        divimgLibraryContainer.appendChild(imgLibrary);
        divLibraryContainer.appendChild(divimgLibraryContainer);
        divLibraryContainer.appendChild(spanLibrary);

        // menu wide version
        // let arr =
        // for(let i = 0; i < 5; i++) {
        //     const divRecordContainer = document.createElement("div");
        //     const divimgRecordContainer = document.createElement("div");
        //     const imgRecord = document.createElement("img");
        //     const spanRecord = document.createElement("span");

        //     divRecordContainer.classList.add("nav-item", "lib-pad");
        //     divimgRecordContainer.classList.add("i-wrapper");
        //     imgRecord.classList.add("i-lib");
        //     imgRecord.setAttribute("src", "/homework/intermediate/youtube/resources/icon/lib.png");
        //     spanRecord.innerHTML = ``;

        //     divimgRecordContainer.appendChild(imgRecord);
        //     divRecordContainer.appendChild(divimgRecordContainer);
        //     divRecordContainer.appendChild(spanRecord);
        // }
            
            nav.appendChild(divHomeContainer);
            nav.appendChild(divShortsContainer);
            nav.appendChild(divSubscribeContainer);
            nav.appendChild(divLibraryContainer);
        // ------------------------------ 네비바 ------------------------------

        // ------------------------------ 메인 ------------------------------
        const main = document.createElement("main");

        const divKeywordsContainer = document.createElement("div");
        const divContentsContainer = document.createElement("div");

        for(let i = 0; i < 30; i++) {
            const article = document.createElement("article");
            
            const divThumbnailContainer = document.createElement("div");
            const aThumbnail = document.createElement("a");
            const imgThumbnail = document.createElement("img");
            
            const divVideoDescContainer = document.createElement("div");
            const divVideoDescContainerLeftSide = document.createElement("div");
            const divVideoDescContainerRightSide = document.createElement("div");
            const aChannelProfile = document.createElement("a");
            const imgChannelProfile = document.createElement("img");
    
            const divVideoTitleContainer = document.createElement("div");
            const divVideoChannelDescContainer = document.createElement("div");
    
            const h1VideoTitle = document.createElement("h1");
            const buttonMoreInfo = document.createElement("button");
    
            const divChannelNameContainer = document.createElement("div");
            const spanChannelName = document.createElement("span");
            const imgVerifiedChannel = document.createElement("img");
    
            const divVideoStatContainer = document.createElement("div");
            const spanVideoStatistics = document.createElement("span");
    
            divKeywordsContainer.classList.add("keywords-container");
            divContentsContainer.classList.add("contents-container");
            divThumbnailContainer.classList.add("align-center");
            aThumbnail.classList.add("thumbnail-box");
            imgThumbnail.classList.add("thumbnail");
    
            divVideoDescContainer.classList.add("main-desc-container");
            divVideoDescContainerLeftSide.classList.add("left-side-box");
            divVideoDescContainerRightSide.classList.add("right-side-box");
            aChannelProfile.classList.add("channel-profile");
            imgChannelProfile.classList.add("img-channel-profile");
    
            divVideoTitleContainer.classList.add("vertical-align-center", "right-side-box-header");
            divVideoChannelDescContainer.classList.add("right-side-box-profile");
            h1VideoTitle.classList.add("txt-title");
            buttonMoreInfo.classList.add("kebab-btn");
    
            spanChannelName.classList.add("txt-name");
            imgVerifiedChannel.classList.add("verified", "hide");
    
            spanVideoStatistics.classList.add("txt-name");
    
            imgThumbnail.setAttribute("src", "/homework/intermediate/youtube/resources/img/thumbnail-test.jpg");
            imgChannelProfile.setAttribute("src", "/homework/intermediate/youtube/resources/img/thumbnail-test.jpg");
    
            h1VideoTitle.innerHTML = `영상 제목 111`;
            spanChannelName.innerHTML = `채널 이름 111`;
            spanVideoStatistics.innerHTML = `조회수 ${hitsPerVideo}회 · ${uploadedPeriod} 전`;
            
            // 썸네일
            aThumbnail.appendChild(imgThumbnail);
            divThumbnailContainer.appendChild(aThumbnail);
    
            // 채널 설명 왼쪽
            aChannelProfile.appendChild(imgChannelProfile);
            divVideoDescContainerLeftSide.appendChild(aChannelProfile);
    
            // 채널 설명 오른쪽
            divVideoTitleContainer.appendChild(h1VideoTitle);
            divVideoTitleContainer.appendChild(buttonMoreInfo);
            divChannelNameContainer.appendChild(spanChannelName);
            divChannelNameContainer.appendChild(imgVerifiedChannel);
            divVideoStatContainer.appendChild(spanVideoStatistics);
            divVideoChannelDescContainer.appendChild(divChannelNameContainer);
            divVideoChannelDescContainer.appendChild(divVideoStatContainer);
            
            divVideoDescContainerRightSide.appendChild(divVideoTitleContainer);
            divVideoDescContainerRightSide.appendChild(divVideoChannelDescContainer);
    
            divVideoDescContainer.appendChild(divVideoDescContainerLeftSide);
            divVideoDescContainer.appendChild(divVideoDescContainerRightSide);
    
            
            article.appendChild(divThumbnailContainer);
            article.appendChild(divVideoDescContainer);
            divContentsContainer.appendChild(article);
        }
        
        main.appendChild(divKeywordsContainer);
        main.appendChild(divContentsContainer);
        // ------------------------------ 메인 ------------------------------
        document.body.appendChild(header);
        document.body.appendChild(nav);
        document.body.appendChild(main);
    };

    createDynamicElement();
};

document.addEventListener("click", (e) => {
    let t = e.target;

    // 요소는 id로 식별
    if(t.classList.contains("menu-box") || t.classList.contains("i-menu")) {
        // 기존 nav 영역 숨김/숨김 해제
        t.closest("body").querySelector("nav").classList.toggle("active");
        
        if(t.closest("body").querySelector("nav").classList.contains("active"))
            t.closest("body").querySelector("main").classList.add("reduction");
        else
            t.closest("body").querySelector("main").classList.remove("reduction");

        // 생성 시점 고민..
        // toggleMenuButton();
    }
});

const toggleMenuButton = () => {

    // const newNavWide = document.createElement("nav");
    // const imgHome
};