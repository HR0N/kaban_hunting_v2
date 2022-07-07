import React, {useState} from "react";
import "./TernaryOptions.scss";
import Header from "../../UI/Heaader/Header";
import $ from "jquery";

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

let total = 0;

function TernaryOptions() {
    const [segments] = useState([false, false, false]);
    const [result, setResult] = useState('Результат');
    const do_staff = (e)=>{
        let currentIndex = $(e.currentTarget).data('index');
        if(e.target.checked){
            total = total + 1;
            $(e.currentTarget).parent().addClass('label_active');
            segments[currentIndex] = true;
        }else if(!e.target.checked){
            total = total - 1;
            $(e.currentTarget).parent().removeClass('label_active');
            segments[currentIndex] = false;
        }

        let random;
        for(let i = 0; i < 99; i+=1){
            random = rand(0, 3);
            if(random !== currentIndex){break}
        }
        $(document).find('.TernaryOptions .choose label').map((k, v)=>{
            if(random === k && total >= 3){
                segments[k] = false;
                $(v).removeClass('label_active');
                $(v).find('input').prop('checked', false);
                total -= 1
            }
        });
        calculateResult();
    };
    const calculateResult = ()=>{
        if(segments[0] && segments[1]){setResult('Дорого')}
        else if(segments[1] && segments[2]){setResult('Криво')}
        else if(segments[0] && segments[2]){setResult('Долго')}
        else{setResult('Результат')}
    };
    return(
        <div className={`TernaryOptions`}>
            <Header/>
            <div className="main">
                <h2>Структура проекта</h2>
                <div className="choose">
                    <label>Качественно<span> </span><input type="checkbox"
                        data-index={0}
                        onChange={(e)=>{do_staff(e)}}
                    /></label>
                    <label>Быстро<span> </span><input type="checkbox"
                        data-index={1}
                        onChange={(e)=>{do_staff(e)}}
                    /></label>
                    <label>Дешево<span> </span><input type="checkbox"
                        data-index={2}
                        onChange={(e)=>{do_staff(e)}}
                    /></label>
                </div>
                <div className="result">{result}</div>
            </div>
        </div>
    );
}


export default TernaryOptions;