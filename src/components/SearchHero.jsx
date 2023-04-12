import React, {useState} from "react";
import { connect } from "react-redux";

/**
 * Component for searching heroes
 * @component SearchHero
 * @param {Object} props - component properties
 * @param {string}props.loadingState - state of loading of the data it is false
 * @returns {JSX.Element} - element jsx that is rendered
 */

function SearchHero(props){
    const [search, setSearch] = useState("")
    console.log("PROPS", props)

    return (
        <div className="search">
            <form>
                <label htmlFor="search">Search:</label>
                <input type="text" 
                id="search" 
                name="search" 
                value={search}
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

export default connect(mapStateToProps, {})(SearchHero)