import {SAVE_TOKEN, SAVE_USER} from "../actions/actionTypes";

const initialState = {
    user: {},
    token: null,
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_USER: return {...state, user: action.payload };
        case SAVE_TOKEN: return {...state, token: action.payload };
        default: return state;
    }
}