import {useState} from "react";


class Auth_validation {
    constructor() {
        this.errors = {max: false, min: false, email: false, match: false}
    }
    Use_input = (initial_value)=>{
        const [value, set_value] = useState(initial_value);
        const [is_dirty, set_dirty] = useState(false);
        const onChange = (e)=>{set_value(e.target.value)};
        const onBlur = (e)=>{set_dirty(true);};
        return{value, onChange, onBlur, is_dirty};
    };
    max_length = (val, max)=>{
        if(val && val.length > max) return `Maximum ${max} symbols`;
        else return false;
    };
    min_length = (val, min)=>{
        if(min === 0) min = 1;
        if(val && val.length < min) return `Minimum ${min} symbols`;
        else return false;
    };
    email = (val)=>{
        let result = String(val).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(result) return false;
        else return 'Email incorrect';
    };
    match_passwords = (pas1, pas2)=>{
        if(pas1 !== pas2) return `Passwords aren't match!`;
        else return false;
    };
}

export default Auth_validation;