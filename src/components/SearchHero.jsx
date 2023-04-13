import React, { useState } from "react";
import { connect } from "react-redux";
import { submitSearch } from "../store/actions";
import { setGenderFilter } from "../store/actions";
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
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const filteredSuperheroes = props.genderFilter
      ? props.superheroes.filter((hero) => hero.appearance.gender === props.genderFilter)
      : props.superheroes;

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
        <button onClick={() => setGenderFilter("Male")}>Male</button>
        <button onClick={() => setGenderFilter("Female")}>Female</button>
        <button onClick={() => setGenderFilter(null)}>Clear</button>
      </div>
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
  };
};

export default connect(mapStateToProps, { submitSearch, setGenderFilter })(
  SearchHero
);
