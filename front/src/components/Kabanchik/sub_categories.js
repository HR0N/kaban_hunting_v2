import React from "react";
import {connect} from "react-redux";


function Subcategories(props) {
    const renderSubcategories = ()=>{
        return props.subcategories.map((v, k)=>{
            if(props.curCategory === v.parent_category){
                return <li key={v.id}><label><input type="checkbox"/> {v.category}</label></li>
            }
        });
    };
    return(
        <ul className={`Subcategories`}>
            {renderSubcategories()}
            <li><label><input type="checkbox"/> Химчистка</label>
                <ul className={`sub-list`}>
                    <li><label><input type="checkbox"/> Химчистка мебели</label></li>
                    <li><label><input type="checkbox"/> Химчистка ковров</label></li>
                    <li><label><input type="checkbox"/> Химчистка одежды</label></li>
                    <li><label><input type="checkbox"/> Химчистка текстиля</label></li>
                    <li><label><input type="checkbox"/> Химчистка меховых изделий</label></li>
                    <li><label><input type="checkbox"/> Химчистка кожаных изделий</label></li>
                    <li><label><input type="checkbox"/> Другое в услугах химчистки</label></li>
                </ul>
            </li>
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