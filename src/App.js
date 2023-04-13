
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
            {props.superheroes && props.superheroes.map(sh => {
                return (
                    <div key={sh.id}>{sh.name}
                    <img src= {sh.image.url} /></div>
                )
            })}

        </div>
    );
}


const mapStateToProps = (state) => {

    return{
        loadingState: state.superHeroReducer.loadingState,
        superheroes: state.superHeroReducer.superheroes
    }
    
}



export default connect(mapStateToProps, {})(App)
