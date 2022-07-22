import {GET_CATEGORIES, SAVE_TOKEN, SAVE_USER} from "./actionTypes";
import Connect from "../../services/axios";
const axios = new Connect();
export function save_token(payload) {
    return {type: SAVE_TOKEN, payload};
}
export function save_user(payload) {
    return {type: SAVE_USER, payload};
}
export function get_categories() {
    let payload = axios.get('getkabanchikcategories');
    return {type: GET_CATEGORIES, payload};
}