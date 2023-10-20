import { atom } from "recoil";

export const isWideNavHiddenModalState = atom({
    key: "isWideNavHiddenModalState",
    default: false
});

export const isWideNavState = atom({
    key: "isWideNavState",
    default: false
});

export const selectedMenuState = atom({
    key: "selectedMenuState",
    default: 0
});

export const selectedKeywordState = atom({
    key: "selectedKeywordState",
    default: 0
});

export const videoContentState = atom({
    key: "videoContentState",
    default: []
});

export const videoKeywordsState = atom({
    key: "videoKeywordsState",
    default: []
});