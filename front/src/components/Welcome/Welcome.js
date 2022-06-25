import './Welcome.scss';
import React, {useEffect, useRef, useState} from "react";
import InputClass from "../../snipets/input";
import ValidatorClass from "../../snipets/validator";
import Connect from "../../services/axios";


const Input = new InputClass();
const valid = new ValidatorClass();


function Welcome() {
    const WelcomeRef = useRef(null);
    const PressAnyKeyRef = useRef(null);
    const emailLog = Input.Use('');
    const pasLog = Input.Use('');
    const emailReg = Input.Use('');
    const pasReg = Input.Use('');
    const pasReg2 = Input.Use('');
    const [active_window_trigger, set_active_window_trigger] = useState(false);
    const [active_window, set_active_window] = useState('press_any_key');

        useEffect(() => {   // componentDidMount(){}
        WelcomeRef.current.focus();
    }, []);

    const readyLogin = () => {if(active_window === 'login' && emailLog.touched && valid.isEmail(emailLog.val)
        && pasLog.touched && valid.isLength(pasLog.val, 4, 40)){return true}};
    const readyRegister = () => {if(active_window === 'registration' && emailReg.touched && valid.isEmail(emailReg.val)
        && pasReg.touched && valid.isLength(pasReg.val, 4, 40) && pasReg2.touched &&
        valid.isPasEquals(pasReg.val, pasReg2.val)){return true}};

    return (
        <div className="Welcome"
         ref={WelcomeRef}
         tabIndex={0}
         onKeyPress={(e)=>{
             if(!active_window_trigger){set_active_window_trigger(true); set_active_window('login')}
             if(e.charCode === 13){
                 console.log(readyLogin());
                 console.log(readyRegister());
             }
         }}>
            <div id='stars'> </div>
            <div id='stars2'> </div>
            <div id='stars3'> </div>
            <div id='title'>
            {active_window === 'press_any_key' ?
                <React.Fragment>
                  <span ref={PressAnyKeyRef}
                        onClick={()=>{set_active_window('login')}}
                  >
                    PRESS ANY KEY
                  </span>
                </React.Fragment> : false
            }
            </div>
            {active_window === 'login' ?
                <div className={`form-wrapper form-wrapper-login ${active_window === "login" ? "fadeIn" : "fadeOut"}`}>
                    <form className={`form form-group ${active_window === "login" ? "closeIn" : " "}`}>
                        <label>
                        <span className={'error'}>{emailLog.touched ? valid.isEmailMsg(emailLog.val)
                            : false}</span>
                        <input onChange={(e)=>{emailLog.onChange(e)}}
                               value={emailLog.val}
                               onBlur={(e)=>{emailLog.onBlur(e)}}
                               className={'form-control'} type="text" placeholder={'email'}/></label>
                        <label>
                            <span className={'error'}>{pasLog.touched ? valid.isLengthMsg(pasLog.val, 4, 40)
                                : false}</span>
                        <input onChange={(e)=>{pasLog.onChange(e)}}
                               value={pasLog.val}
                               onFocus={(e)=>{pasLog.onBlur(e)}}
                               className={'form-control'} type="password" placeholder={'password'}/></label>
                        <div className="form-wrapper__extra-ux">
                            <p className={'form-wrapper__registration'}
                               onClick={()=>{set_active_window('registration')}}
                            >Registration</p>
                            <p className={'form-wrapper__exit'}
                               onClick={()=>{
                                   if(active_window_trigger){
                                       set_active_window_trigger(false);
                                       set_active_window('press_any_key');}
                               }}
                            >Exit()</p>
                        </div>
                    </form>
                </div> : false
            }
            {active_window === 'registration' ?
                <div className={`form-wrapper form-wrapper-registration ${active_window === "registration" ? "fadeIn" : "fadeOut"}`}>
                    <form className={`form form-group ${active_window === "registration" ? "closeIn" : " "}`}>
                        <label>
                        <span className={'error'}>{emailReg.touched ? valid.isEmailMsg(emailReg.val)
                            : false}</span>
                        <input onChange={(e)=>{emailReg.onChange(e)}}
                               value={emailReg.val}
                               onBlur={(e)=>{emailReg.onBlur(e)}}
                               className={'form-control'} type="text" placeholder={'email'}/></label>
                        <label>
                        <span className={'error'}>{pasReg.touched ? valid.isLengthMsg(pasReg.val, 4, 40)
                            : false}</span>
                        <input onChange={(e)=>{pasReg.onChange(e)}}
                               value={pasReg.val}
                               onBlur={(e)=>{pasReg.onBlur(e)}}
                               className={'form-control'} type="password" placeholder={'password'}/></label>
                        <label>
                        <span className={'error'}>{pasReg2.touched ? valid.isPasEqualsMsg(pasReg.val, pasReg2.val)
                            : false}</span>
                        <input onChange={(e)=>{pasReg2.onChange(e)}}
                               value={pasReg2.val}
                               onFocus={(e)=>{pasReg2.onBlur(e)}}
                               className={'form-control'} type="password" placeholder={'repeat password'}/></label>
                        <div className="form-wrapper__extra-ux">
                            <p className={'form-wrapper__registration'}
                               onClick={()=>{set_active_window('login')}}
                            >Login</p>
                            <p className={'form-wrapper__exit'}
                               onClick={()=>{
                                   set_active_window_trigger(false);
                                   set_active_window('press_any_key');}}
                            >Exit()</p>
                        </div>
                    </form>
                </div> : false
            }
        </div>
    );
}

export default Welcome;
