import React, {useEffect, useState} from "react";
import "./Kabanchik..scss";
import Header from "../../UI/Heaader/Header";
import {connect, useSelector} from "react-redux";
import Loader from "../../UI/Loader/Loader";
import Subcategories from "./sub_categories";
import InputClass from "../../snipets/input";
import Connect from "../../services/axios";
import Cities from "./Cities";


const Input = new InputClass();

function Kabanchik({props}) {
    const categories = useSelector(state => props.categories);
    const groups = useSelector(state => props.groups);
    const [curCategory, setCurCategory] = useState('');
    const new_group_title = Input.Use('');
    const new_group_id = Input.Use('');
    const [cur_group, set_cur_group] = useState(null);
    useEffect(()=>{
        if(categories){setCurCategory(Object.keys(categories)[0]);}
        if(groups){set_cur_group(groups[0])}
    }, [categories]);
    const renderCategories = ()=>{
        return Object.keys(categories).map((v, k)=>{
            return <option key={k} value={v}>{v}</option>
        });
    };
    const renderGroups = ()=>{
        return groups.map((val, key)=>{
            return <option key={key} value={val.id}>{val.title}</option>
        });
    };
    return(             //   <option key={v.id} value={v.id}>{v.category}</option>
        <div className={`Kabanchik`}>
            <Header/>
            {prompt() === '2863032'
                ? <section className="main">
                    <div className="choose_group">
                        <h2>Выбор группы</h2>
                        <select className={`form-select`} name="choose_group"
                                onChange={(e)=>{
                                    groups.map((v, k)=>{
                                        if(v.id === +e.target.value){set_cur_group(v)}});
                                }}
                        >
                            {groups ? renderGroups() : false}
                        </select>
                    </div>
                    <div className="settings">
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
                                <Cities
                                    curGroup={cur_group}
                                />
                            </div>
                            <div className="choose_categories2">
                                <Subcategories
                                    curCategory={curCategory}
                                    categories={categories}
                                    curGroup={cur_group}
                                    groups={groups}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="new_group">
                        <h2>Новая группа</h2>
                        <input value={new_group_title.val}
                               onChange={(e)=>{new_group_title.onChange(e)}}
                               className={`form-control`} type="text" placeholder={'Название группы'} name={`title`}/>
                        <input value={new_group_id.val}
                               onChange={(e)=>{new_group_id.onChange(e)}}
                               className={`form-control`} type="text" placeholder={'id группы'} name={`group`}/>
                        <div className="buttons">
                            <div className="btn btn-outline-light"
                                 onClick={()=>{new Connect().new_group(new_group_title.val, new_group_id.val)}}
                            >Create</div>
                        </div>
                    </div>
                </section>
                : false}

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