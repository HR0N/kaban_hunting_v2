import React from "react";
import "./Welcome.scss";
import Header from "../../UI/Heaader/Header";
import Connect from "../../services/axios";

function Welcome() {
    return(
        <div className={`Welcome`}>
            <Header/>
            <div className="buttons">
                <div className="btn btn-outline-light"
                onClick={()=>{
                    new Connect().get2();
                }}
                >Btn 1</div>
                <div className="btn btn-outline-light"
                     onClick={()=>{
                         new Connect().get();
                     }}
                >Btn 2</div>
            </div>
        </div>
    );
}
export default Welcome;