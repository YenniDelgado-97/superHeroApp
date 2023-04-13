import React, { useState } from "react";
import { connect } from "react-redux";
import { submitSearch } from "../store/actions";
import { setGenderFilter } from "../store/actions";
import { setRaceFilter } from "../store/actions";
import { Link } from "react-router-dom";

/**
 * Component for searching heroes
 * @component SearchHero
 * @param {Object} props - component properties
 * param {Boolean}props.loadingState - state of loading of the data it is false
 * @returns {JSX.Element} - element jsx that is rendered
 */

function SearchHero(props) {
  console.log("PROPS", props);
  const [search, setSearch] = useState("");
  const [race,setRace] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleChangeRace = (event) => {
    console.log("event.target.value", event.target.value)
    setRace(event.target.value);
  };

  
  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.submitSearch(search);
        }}
      >
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          name="search"
          value={search}
          onChange={handleChange}
        />

        <button>Search</button>
      </form>
      {props.errorState ? <p className="error">{props.error}</p> : <></>}
      <div className="filter-buttons">
        <button onClick={() => props.setGenderFilter("Male")}>Male</button>
        <button onClick={() => props.setGenderFilter("Female")}>Female</button>
        <button onClick={() => props.setGenderFilter(null)}>Clear</button>
      </div>
      <input
          type="text"
          id="race"
          name="race"
          value={race}
          onChange={handleChangeRace}
        />
        <button onClick={() => props.setRaceFilter(race)}>Filter By Race</button>

      {/* <ul>
        {filteredSuperheroes.map((hero) => (
          <li key={hero.id}>
            <Link to={`/superheroes/${hero.id}`}>
              {hero.name} ({hero.appearance.gender})
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

/**
 * Function that maps the state of the property
 * @function mapStateToProps
 * @param {Object} state - global state of the application
 * @returns {Object} object of component property
 */

const mapStateToProps = (state) => {
  console.log("MSTP", state);
  return {
    loadingState: state.superHeroReducer.loadingState,
    errorState: state.superHeroReducer.errorState,
    error: state.superHeroReducer.error,
    genderFilter: state.superHeroReducer.genderFilter,
    raceFilter:state.superHeroReducer.raceFilter
  };
};

export default connect(mapStateToProps, { submitSearch, setGenderFilter, setRaceFilter})(
  SearchHero
);
