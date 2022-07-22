import React from "react";
import "./Kabanchik..scss";
import Header from "../../UI/Heaader/Header";


function Kabanchik() {
    return(
        <div className={`Kabanchik`}>
            <Header/>
            <section className="main">
                <h2>Все категории услуг</h2>
                <div className="choose_categories">
                    <div className="choose_categories1">
                        <select className='form-select' name="ho_category" id="ho_category">
                            <option value="">Волонтерская помощь</option>
                            <option value="">Курьерские услуги</option>
                            <option value="">Клининговые услуги</option>
                        </select>
                        <div className="buttons">
                            <div className="btn btn-outline-light">Выбрать</div>
                        </div>
                    </div>
                    <div className="choose_categories2">
                        <ul>
                            <li><label><input type="checkbox"/> Уборка квартир</label></li>
                            <li><label><input type="checkbox"/> Генеральная уборка</label></li>
                            <li><label><input type="checkbox"/> Уборка после ремонта</label></li>
                            <li><label><input type="checkbox"/> Химчистка</label>
                            <ul className={`sub-list`}>
                                <li><label><input type="checkbox"/> Химчистка мебели</label></li>
                                <li><label><input type="checkbox"/> Химчистка ковров</label></li>
                                <li><label><input type="checkbox"/> Химчистка одежды</label></li>
                                <li><label><input type="checkbox"/> Химчистка текстиля</label></li>
                                <li><label><input type="checkbox"/> Химчистка меховых изделий</label></li>
                                <li><label><input type="checkbox"/> Химчистка кожаных изделий</label></li>
                                <li><label><input type="checkbox"/> Другое в услугах химчистки  </label></li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Kabanchik;