import React, {useState} from "react";
import "./Cities.scss";
import {connect} from 'react-redux';
import Connect from "../../services/axios";

const cities = [
    "Київ", "Біла Церква", "Березань", "Бориспіль", "Боярка", "Бровари", "Буча", "Васильків", "Вишневе", "Вишгород",
    "Ірпінь", "Обухів", "Переяслав-Хмельницький", "Ржищів", "Славутич", "Українка", "Фастів", "Яготин", "Вінниця",
    "Ржищів", "Дніпро", "Кам'янське", "Нікополь", "Новомосковськ", "Павлоград", "Бердичів", "Житомир", "Бердянськ",
    "Запоріжжя", "Мелітополь", "Енергодар", "Івано-Франківськ", "Краматорськ", "Маріуполь", "Слов'янськ", "Кривий Ріг",
    "Олександрія", "Кропивницький", "Ковель", "Луцьк", "Дрогобич", "Львів", "Червоноград", "Миколаїв", "Первомайськ",
    "Білгород-Дністровський", "Ізмаїл", "Одеса", "Чорноморськ", "Кременчук", "Полтава", "Рівне", "Лисичанськ",
    "Сєвєродонецьк", "Конотоп", "Суми", "Шостка", "Тернопіль", "Мукачево", "Ужгород", "Лозова", "Харків", "Херсон",
    "Кам'янець-Подільський", "Хмельницький", "Сміла", "Умань", "Черкаси", "Ніжин", "Прилуки", "Чернігів", "Чернівці"
];

function Cities(props) {
    const [curCities, setCurCities] = useState('');

    const render_cities = ()=>{
        return cities.map((v, k)=>{
            let checked = false;
            if(curCities.indexOf(v) >= 0){
                checked = true;
            }
            return <li key={k}><label><input value={v} type="checkbox"
            onChange={(e)=>{
                let mew_cur_cities = ' ';
                if(e.target.checked){mew_cur_cities = (`${curCities}${v}`);}
                if(!e.target.checked){mew_cur_cities = (`${curCities.replace(v, '')}`);}
                setCurCities(mew_cur_cities);
                new Connect().update_group_city(mew_cur_cities, props.curGroup.id);
            }}
            checked={checked} /> {v}</label></li>;
        });
    };
    return(<ul className={`Cities`}>
        {render_cities()}
        </ul>);
}


function mapStateToProps(state){
    return {
    }
}
function mapDispatchProps(dispatch){
    return {
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Cities);