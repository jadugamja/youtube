
const toggleMenuButton = () => {
    return {
        "type": "TOGGLE_MENU"
    }
}

const setSelectedMenu = (idx) => {
    return {
        "type": "SET_SELECTED_MENU",
        "payload": idx
    }
}

export { toggleMenuButton, setSelectedMenu }