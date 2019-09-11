import React from "react";
import App from "./components/App.js";
import {Provider} from 'react-redux';
import store from './store'
import {render} from 'react-dom';
import './styles/global.scss';

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
