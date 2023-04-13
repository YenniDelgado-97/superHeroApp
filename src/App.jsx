/**

A functional component that renders the Superhero Search app.
@typedef {Object} App
@property {boolean} props.loadingState - A boolean value indicating whether the app is currently in a loading state.
@property {Object[]} props.superheroes - An array of superhero objects retrieved from the Superhero API.
*/

import "./App.css";
import React, { useEffect } from "react";
import SearchHero from "./components/SearchHero";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import SuperHeroCard from "./components/SuperHeroCard/SuperHeroCard";
// import FilterHero from "./components/FilterHero;



function App(props) {
  const filteredSuperheroes =  props.genderFilter
  ? props.superheroes.filter((hero) => hero.appearance.gender === props.genderFilter)
        : props.superheroes;
  return (
    <div className="App">
      <header>
        <SearchHero />
        {/* <FilterHero/> */}
      </header>
      <h1> Super Hero App</h1>
      {props.loadingState ? <h1>loading....</h1> : <></>}
      <div className="cards-container">
      {props.superheroes &&
        filteredSuperheroes.map((sh) => {
          return (
            <SuperHeroCard key={sh.id} sh={sh}/>
          );
        })}
        </div>
    </div>
  );
}

/**

Maps the state properties of the app to the props of the component.
@param {Object} state - The state of the app.
@return {Object} An object containing the state properties of the app.
*/

const mapStateToProps = (state) => {
  return {
    genderFilter: state.superHeroReducer.genderFilter,
    loadingState: state.superHeroReducer.loadingState,
    superheroes: state.superHeroReducer.superheroes,
    
  };
};

export default connect(mapStateToProps, {})(App);
