import React, { Component } from "react";
import style from './App.scss';
import Objects from "./Objects/Objects";

class App extends Component {
    render() {
        return (
            <div className={style.mainContainer}>
                <Objects/>
            </div>
        );
    }
}

export default App;