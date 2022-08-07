import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Loader from "../../UI/Loader/Loader";
import InputClass from "../../snipets/input";
import Connect from "../../services/axios";

const Input = new InputClass();

function Subcategories(props) {
    const [watched_categories, set_watched_categories] = useState('');
    useEffect(()=>{
        if(props.curGroup){set_watched_categories(props.curGroup.watch)}
    }, [props.curGroup]);
    const renderSubCategories = ()=>{
        return Object.keys(props.categories[props.curCategory]).map((v, k)=>{
            if(props.categories[props.curCategory][v]){
                return <li key={k}><label><input type="checkbox"/> {v}</label>
                            <ul className={`sub-list`}>
                                {renderSubCategories2(props.categories[props.curCategory][v])}
                            </ul>
                        </li>
            }else{
                let checked = false;
                if(watched_categories.indexOf(v) >= 0){
                    checked = true;
                }
                return <li key={k}><label><input
                    onChange={(e)=>{
                        let mew_watch = ' ';
                        if(e.target.checked){mew_watch = (`${watched_categories}${v}`);}
                        if(!e.target.checked){mew_watch = (`${watched_categories.replace(v, '')}`);}
                        set_watched_categories(mew_watch);
                        new Connect().update_group_watch(mew_watch, props.curGroup.id);
                    }}
                    checked={checked} value={v} type="checkbox"/> {v}</label></li>
            }
        });
    };
    const renderSubCategories2 = (subcategories)=>{
        return subcategories.map((v, k)=>{
            let checked = false;
            if(watched_categories.indexOf(v) >= 0){
                checked = true;
            }
            return <li key={k}><label><input
                onChange={(e)=>{
                    let mew_watch = ' ';
                    if(e.target.checked){mew_watch = (`${watched_categories}${v}`);}
                    if(!e.target.checked){mew_watch = (`${watched_categories.replace(v, '')}`);}
                    set_watched_categories(mew_watch);
                    new Connect().update_group_watch(mew_watch, props.curGroup.id);
                }}
                checked={checked} value={v} type="checkbox"/> {v}</label></li>
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