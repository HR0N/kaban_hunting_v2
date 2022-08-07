import {useState} from "react";

class InputClass {
    Use = (init)=>{
        const [val, setVal] = useState(init);
        const [touched, setTouched] = useState(false);
        const [checked, setChecked] = useState(false);
        const onChange = e => setVal(this.v(e));
        const onBlur = e => setTouched(true);
        return {val, touched, onChange, onBlur}
    };
    v = e => e.target.value
}

export default InputClass;