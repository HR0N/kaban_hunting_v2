import {SAVE_CATEGORIES, SAVE_TOKEN, SAVE_USER} from "./actionTypes";
import Connect from "../../services/axios";
const axios = new Connect();
export function save_token(payload) {
    return {type: SAVE_TOKEN, payload};
}
export function save_user(payload) {
    return {type: SAVE_USER, payload};
}
export function load_categories() {
    return async dispatch => {
        try{
            const response = await axios
                .get('getkabanchikcategories');
            let result = JSON.parse(response.data[0].categories);
            // console.log(result);
            dispatch(save_categories(result))
        }
        catch(e){console.log(e)}
    }
}
function save_categories(payload) {
    return {type: SAVE_CATEGORIES, payload};
}