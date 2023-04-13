
import './App.css';
import React, {useEffect} from 'react';
import SearchHero from './components/SearchHero';
import {connect} from "react-redux";
import { useDispatch } from 'react-redux';


function App(props) {
    return (
        <div className='App'>
            <header><SearchHero/></header>
            <h1> Super Hero App</h1>
            {props.loadingState ? <h1>loading....</h1>: <></>}

        </div>
    );
}


const mapStateToProps = (state) => {

    return{
        loadingState: state.superHeroReducer.loadingState
    }
    
}



export default connect(mapStateToProps, {})(App)
