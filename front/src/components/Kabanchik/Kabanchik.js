import React, {useEffect, useState} from "react";
import "./Kabanchik..scss";
import Header from "../../UI/Heaader/Header";
import {connect, useSelector} from "react-redux";
import Loader from "../../UI/Loader/Loader";
import Subcategories from "./sub_categories";


function Kabanchik({props}) {
    const categories = useSelector(state => props.categories);
    const [curCategory, setCurCategory] = useState('');
    useEffect(()=>{
        if(categories){setCurCategory(Object.keys(categories)[0]);}
    }, [categories]);
    const renderCategories = ()=>{
        return Object.keys(categories).map((v, k)=>{
            return <option key={k} value={v}>{v}</option>
        });
    };
    return(             //   <option key={v.id} value={v.id}>{v.category}</option>
        <div className={`Kabanchik`}>
            <Header/>
            <section className="main">
                <h2>Все категории услуг</h2>
                <div className="choose_categories">
                    <div className="choose_categories1">
                        {categories ?
                        <select className='form-select' name="ho_category" id="ho_category"
                            onChange={(e)=>{setCurCategory(e.target.value)}}
                        >
                            {categories ? renderCategories() : false}
                        </select>
                            : <Loader/>}
                        <div className="buttons">
                            <div className="btn btn-outline-light">Выбрать</div>
                        </div>
                    </div>
                    <div className="choose_categories2">
                        <Subcategories
                            curCategory={curCategory}
                            categories={categories}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}


function mapStateToProps(state){
    return {
        props: state.app,
    }
}
function mapDispatchProps(dispatch){
    return {
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Kabanchik);