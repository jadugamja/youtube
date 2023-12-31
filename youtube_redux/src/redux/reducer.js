import { createStore } from "redux";

const initState = {
    isOpen: false,
    selectedMenu: 0,
    selectedKeyword: 0
}

const reducer = ( state = initState, action ) => {

    switch(action.type) {
        case "TOGGLE_MENU":
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case "SET_SELECTED_MENU":
            return {
                ...state,
                selectedMenu: action.payload
            }
        case "SET_SELECTED_KEYWORD":
            return {
                ...state,
                selectedKeyword: action.payload
            }
        default:
            return state;
    }
    
}

const store = createStore(reducer);

export default store;