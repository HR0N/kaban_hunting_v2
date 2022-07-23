import React, {useEffect, useState} from "react";
import "./Kabanchik..scss";
import Header from "../../UI/Heaader/Header";
import {connect, useSelector} from "react-redux";
import Loader from "../../UI/Loader/Loader";
import Subcategories from "./sub_categories";


function Kabanchik({props}) {
    const getCategories = useSelector(state => props.categories);
    const [curCategory, setCurCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [subCategories2, setSubCategories2] = useState([]);
    useEffect(()=>{
        fetchCategories();
    }, [getCategories]);
    const fetchCategories = ()=>{
        let cat = {cat1: [], cat2: [], cat3: []};
        if(getCategories){
            getCategories.map((v, k)=>{
                if(v.id > 0 && v.id <= 24){
                    cat.cat1.push(v);
                }
                if(v.id > 24 && v.id <= 1177){
                    cat.cat2.push(v);
                }
                if(v.id > 1177){
                    cat.cat3.push(v);
                }
            });
        }
        if(cat.cat1[0])setCurCategory(cat.cat1[0].category);
        setCategories(cat.cat1);
        setSubCategories(cat.cat2);
        setSubCategories2(cat.cat3);
    };
    const renderCategories = ()=>{
        return categories.map((v, k)=>{
            return <option key={v.id} value={v.category}>{v.category}</option>;
        });
    };
    return(             //   <option key={v.id} value={v.id}>{v.category}</option>
        <div className={`Kabanchik`}>
            <Header/>
            <section className="main">
                <h2>Все категории услуг</h2>
                <div className="choose_categories">
                    <div className="choose_categories1">
                        {getCategories ?
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
                            curCategory = {curCategory}
                            subcategories = {subCategories}
                            subcategories2 = {subCategories2}
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