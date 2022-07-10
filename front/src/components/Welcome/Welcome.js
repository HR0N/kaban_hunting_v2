import React, {useEffect} from "react";
import {connect} from "react-redux";
import "./Welcome.scss";
import Header from "../../UI/Heaader/Header";
import Connect from "../../services/axios";
import {save_token} from "../../redux/actions/App";


function Welcome(props) {
    return(
        <div className={`Welcome`}>
            <Header/>
            <div className="buttons">
                <div className="btn btn-outline-light"
                onClick={()=>{
                    console.log(props);
                    console.log(props.token);
                    console.log(props.user);
                }}
                >Btn 1</div>
                <div className="btn btn-outline-light"
                     onClick={()=>{
                         new Connect().get(props.token);
                     }}
                >Btn 2</div>
            </div>
        </div>
    );
}

function mapStateToProps(state){
    return {
        token: state.app.token,
        user: state.app.user,
    }
}
function mapDispatchProps(dispatch){
    return {
        save_token: token =>{dispatch(save_token(token))}
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Welcome);