import "./App.css";
import React, { useEffect } from "react";
import SearchHero from "./components/SearchHero";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import SuperHeroCard from "./components/SuperHeroCard/SuperHeroCard";
// import FilterHero from "./components/FilterHero;

function App(props) {
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
        props.superheroes.map((sh) => {
          return (
            <SuperHeroCard key={sh.id} sh={sh}/>
          );
        })}
        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loadingState: state.superHeroReducer.loadingState,
    superheroes: state.superHeroReducer.superheroes,
  };
};

export default connect(mapStateToProps, {})(App);
