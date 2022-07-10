import {SAVE_TOKEN, SAVE_USER} from "./actionTypes";

export function save_token(payload) {
    return {type: SAVE_TOKEN, payload};
}
export function save_user(payload) {
    return {type: SAVE_USER, payload};
}