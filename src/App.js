import "./App.css";
import React, { useEffect } from "react";
import SearchHero from "./components/SearchHero";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <header>
        <SearchHero />
      </header>
      <h1> Super Hero App</h1>
      {props.loadingState ? <h1>loading....</h1> : <></>}
      {props.superheroes &&
        props.superheroes.map((sh) => {
          return (
            <div className="card">
              <img src={sh.image.url} />
              <div key={sh.id}>{sh.name}</div>
              <div className="stadistics-container">
                <div className="powerstats">
                  <h2>Powerstats</h2>
                  <p>Intelligence:{sh.powerstats.intelligence}</p>
                  <p>Strentgh:{sh.powerstats.strength}</p>
                  <p>Speed:{sh.powerstats.speed}</p>
                  <p>Durability:{sh.powerstats.durability}</p>
                  <p>Power:{sh.powerstats.power}</p>
                  <p>Combat:{sh.powerstats.combat}</p>
                </div>
                <div className="apereance">
                <h2>Appearance</h2>
                  <p>Gender:{sh.appearance.gender}</p>
                  <p>Race:{sh.appearance.race}</p>
                  <p>Height:{sh.appearance.height}</p>
                  <p>Weight:{sh.appearance.weight}</p>
                </div>
              </div>
            </div>
          );
        })}
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
