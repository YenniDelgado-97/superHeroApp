import React, {useState} from "react";
import { connect } from "react-redux";
import { submitSearch } from "../store/actions";





/**
 * Component for searching heroes
 * @component SearchHero
 * @param {Object} props - component properties
 * param {Boolean}props.loadingState - state of loading of the data it is false
 * @returns {JSX.Element} - element jsx that is rendered
 */

function SearchHero(props){

    console.log("PROPS", props)
    const [search, setSearch] = useState("")
    const handleChange = event => {
setSearch(event.target.value)
    }
   

    return (
        <div className="search">
            <form
                onSubmit={(e)=> {e.preventDefault(); props.submitSearch(search)} }>
                <label htmlFor="search">Search:</label>
                <input type="text" 
                id="search" 
                name="search" 
                value={search}
                onChange={handleChange}
                />

                <button>Search</button>

            </form>
        </div>
    )

}

/**
 * Function that maps the state of the property
 * @function mapStateToProps
 * @param {Object} state - global state of the application
 * @returns {Object} object of component property
 */

const mapStateToProps = state => {
    console.log("MSTP", state)
    return {
        loadingState: state.superHeroReducer.loadingState
    }
}

export default connect(mapStateToProps, {submitSearch})(SearchHero)