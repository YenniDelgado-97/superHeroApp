import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./store/reducers"
import {BrowserRouter as Router} from "react-router-dom"

const store = createStore(rootReducer,applyMiddleware(thunk, logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Provider store={store}>
       <App />
    </Provider>
    </Router>

);





