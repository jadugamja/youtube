import { selector } from "recoil";

export const isOpenSelector = selector({
    key: "isOpenSelector",
    get: ({ get }) => {
        const isOpen = get(isOpenNavState);
        if (isOpen) {
            return {
                name: isOpen.name
            }
        }
        
        return null;
    }
})