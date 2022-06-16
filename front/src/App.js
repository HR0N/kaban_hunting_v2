import './App.scss';
import {connect} from "react-redux";
import React, {Component} from "react";
import {Routes, Route} from 'react-router-dom';
import Welcome from "./components/Welcome/Welcome";
import Main from "./components/Main/Main";


class App extends Component{


    state = {
    };


    render() {
        return (
            <div className={'App'}>
                <Routes>
                    <Route exact path={'/'} element={<Welcome/>}/>
                    <Route exact path={"/HQ"} element={<Main/>}/>
                </Routes>
            </div>
        );
    }
}


function mapStateToProps() {
    return {
    };
}
function mapDispatchToProps() {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
