import React, {useState} from "react";
import {connect} from "react-redux";
import Loader from "../../UI/Loader/Loader";


function Subcategories(props) {
    const renderSubCategories = ()=>{
        return Object.keys(props.categories[props.curCategory]).map((v, k)=>{
            if(props.categories[props.curCategory][v]){
                return <li key={k}><label><input type="checkbox"/> {v}</label>
                            <ul className={`sub-list`}>
                                {renderSubCategories2(props.categories[props.curCategory][v])}
                            </ul>
                        </li>
            }else{
                return <li key={k}><label><input value={v} type="checkbox"/> {v}</label></li>
            }
        });
    };
    const renderSubCategories2 = (subcategories)=>{
        return subcategories.map((v, k)=>{
            return <li key={k}><label><input value={v} type="checkbox"/> {v}</label></li>
        });
    };
    return(
        <ul className={`Subcategories`}>
            {(props.categories && props.curCategory) ? renderSubCategories() : <Loader/>}

        </ul>
    );
}


function mapStateToProps(state){
    return {
    }
}
function mapDispatchProps(dispatch){
    return {
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Subcategories);