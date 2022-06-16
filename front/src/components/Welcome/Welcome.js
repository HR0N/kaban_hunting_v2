import './Welcome.scss';
import React, {useEffect, useRef, useState} from "react";

function Welcome() {
    const WelcomeRef = useRef(null);
    const PressAnyKeyRef = useRef(null);
    const [active_window_trigger, set_active_window_trigger] = useState(false);
    const [active_window, set_active_window] = useState('press_any_key');
    useEffect(()=>{ // componentDidMount
        WelcomeRef.current.focus();
    }, []);
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
                  <span ref={PressAnyKeyRef} >
                    PRESS ANY KEY
                  </span>
                </React.Fragment> : false
            }
            </div>
            {active_window === 'login' ?
                <div className="form-wrapper form-wrapper-login">
                    <form className={'form form-group'}>
                        <input className={'form-control'} type="text" placeholder={'login'}/>
                        <input className={'form-control'} type="password" placeholder={'password'}/>
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
                <div className="form-wrapper form-wrapper-registration">
                    <form className={'form form-group'}>
                        <input className={'form-control'} type="text" placeholder={'username'}/>
                        <input className={'form-control'} type="password" placeholder={'password'}/>
                        <input className={'form-control'} type="password" placeholder={'repeat password'}/>
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
