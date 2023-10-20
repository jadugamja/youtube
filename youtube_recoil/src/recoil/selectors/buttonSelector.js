import { selector } from "recoil";

export const isWideNavSelector = selector({
    key: "isWideNavSelector",
    get: ({ get }) => {
        const isWideNav = get(isWideNavState);
        if (isWideNav) {
            return {
                name: isWideNav.name
            }
        }
        
        return null;
    }
})