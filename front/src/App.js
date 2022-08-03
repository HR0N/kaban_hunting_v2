import './App.scss';
import {connect} from "react-redux";
import React, {Component} from "react";
import {Routes, Route} from 'react-router-dom';
import Welcome from "./components/Welcome/Welcome";
import Main from "./components/Main/Main";
import Auth from "./components/Auth/Auth";
import TernaryOptions from "./components/TernaryOptions/TernaryOptions";
import Kabanchik from "./components/Kabanchik/Kabanchik";
import {load_categories, load_groups} from "./redux/actions/App";

class App extends Component{

    componentDidMount() {
        this.props.load_categories();
        this.props.load_groups();
    }

    state = {
    };


    render() {
        return (
            <div className={'App'}>
                <Routes>
                    <Route exact path={'/'} element={<Welcome/>}/>
                    <Route exact path={'/auth'} element={<Auth/>}/>
                    <Route exact path={"/hq"} element={<Main/>}/>
                    <Route exact path={"/kabanchik"} element={<Kabanchik/>}/>
                    <Route exact path={"/ternary_options"} element={<TernaryOptions/>}/>
                </Routes>
            </div>
        );
    }
}


function mapStateToProps() {
    return {
    };
}
function mapDispatchToProps(dispatch) {
    return {
        load_categories: () =>{dispatch(load_categories())},
        load_groups: () =>{dispatch(load_groups())},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
