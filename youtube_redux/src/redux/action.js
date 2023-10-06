
export const toggleMenuButton = () => {
    return {
        "type": "TOGGLE_MENU"
    }
}

export const setSelectedMenu = (idx) => {
    return {
        "type": "SET_SELECTED_MENU",
        "payload": idx
    }
}

export const setSelectedKeyword = (idx) => {
    return {
        "type": "SET_SELECTED_KEYWORD",
        "payload": idx
    }
}

// export { toggleMenuButton, setSelectedMenu, setSelectedKeyword }