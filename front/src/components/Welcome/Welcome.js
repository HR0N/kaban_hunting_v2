import './Welcome.scss';
import React, {useRef, useState} from "react";
import './../../services/auth_validation';
import Auth_validation from "../../services/auth_validation";

const Validation = new Auth_validation();


function Welcome() {


    const WelcomeRef = useRef(null);
    const PressAnyKeyRef = useRef(null);
    const [active_window_trigger, set_active_window_trigger] = useState(false);
    const [active_window, set_active_window] = useState('press_any_key');
    const log_email = Validation.Use_input('');
    const log_password = Validation.Use_input('');
    const reg_email = Validation.Use_input('');
    const reg_password = Validation.Use_input('');
    const reg_password2 = Validation.Use_input('');



    return (
        <div className="Welcome"
         ref={WelcomeRef}
         tabIndex={0}
         onKeyPress={()=>{
             if(!active_window_trigger){
                 set_active_window('login');
                 set_active_window_trigger(true);
             }
         }}>
            <div id='stars'> </div>
            <div id='stars2'> </div>
            <div id='stars3'> </div>
            <div id='title'>
            {active_window === 'press_any_key' ?
                <React.Fragment>
                  <span ref={PressAnyKeyRef}
                     onClick={()=>{set_active_window('login'); set_active_window_trigger(true);}}
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
                        <span className={'error'}>{log_email.is_dirty ? Validation.email(log_email.value) : false}</span>
                        <input onChange={e =>log_email.onChange(e)} onBlur={e =>log_email.onBlur(e)} value={log_email.value}
                               className={'form-control'} type="text" placeholder={'email'}/></label>
                        <label>
                        <span className={'error'}>{log_password.is_dirty ? Validation.min_length(log_password.value, 3) : false}</span>
                        <span className={'error'}>{log_password.is_dirty ? Validation.max_length(log_password.value, 32) : false}</span>
                        <input onChange={e =>log_password.onChange(e)} onBlur={e =>log_password.onBlur(e)} value={log_password.value}
                               className={'form-control'} type="password" placeholder={'password'}/></label>
                        <div className="form-wrapper__extra-ux">
                            <p className={'form-wrapper__registration'}
                            onClick={()=>{set_active_window('registration')}}
                            >Registration</p>
                            <p className={'form-wrapper__exit'} onClick={()=>{
                                set_active_window('press_any_key');
                                set_active_window_trigger(false);
                            }}>Exit()</p>
                        </div>
                    </form>
                </div> : false
            }
            {active_window === 'registration' ?
                <div className={`form-wrapper form-wrapper-registration ${active_window === "registration" ? "fadeIn" : "fadeOut"}`}>
                    <form className={`form form-group ${active_window === "registration" ? "closeIn" : " "}`}>
                        <label>
                        <span className={'error'}>{reg_email.is_dirty ? Validation.email(reg_email.value) : false}</span>
                        <input onChange={e =>reg_email.onChange(e)} onBlur={e =>reg_email.onBlur(e)} value={reg_email.value}
                               className={'form-control'} type="text" placeholder={'email'}/></label>
                        <label>
                        <span className={'error'}>{reg_password.is_dirty ? Validation.min_length(reg_password.value, 3) : false}</span>
                        <span className={'error'}>{reg_password.is_dirty ? Validation.max_length(reg_password.value, 32) : false}</span>
                        <input onChange={e =>reg_password.onChange(e)} onBlur={e =>reg_password.onBlur(e)} value={reg_password.value}
                               className={'form-control'} type="password" placeholder={'password'}/></label>
                        <label>
                        <span className={'error'}>{reg_password2.is_dirty ?
                            Validation.match_passwords(reg_password.value, reg_password2.value) : false}</span>
                        <input onChange={e =>reg_password2.onChange(e)} onBlur={e =>reg_password2.onBlur(e)} value={reg_password2.value}
                               className={'form-control'} type="password" placeholder={'repeat password'}/></label>
                        <div className="form-wrapper__extra-ux">
                            <p className={'form-wrapper__registration'}
                               onClick={()=>{set_active_window('login')}}
                            >Login</p>
                            <p className={'form-wrapper__exit'} onClick={()=>{
                                set_active_window('press_any_key');
                                set_active_window_trigger(false);
                            }}>Exit()</p>
                        </div>
                    </form>
                </div> : false
            }
        </div>
    );
}

export default Welcome;
