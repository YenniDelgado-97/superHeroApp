import axios from "axios";
import { SET_GENDER_FILTER } from "./types"
import { SET_RACE_FILTER } from "./types";
import { SET_INTELLIGENCE_FILTER } from "./types";

/**

Sends a search request to the Superhero API based on a search query string.
@param {string} search - The search query string.
@return {function} - A Redux Thunk function that dispatches actions based on the outcome of the API call.
*/

export const submitSearch = search => {
    return dispatch => {
        dispatch({
            type:"SEARCH_START",payload: search
        })
        axios.get(`https://superheroapi.com/api.php/2320801411434388/search/${search}/`
        )

        .then(res => {
            if(res.data.error){
                dispatch({type:"SEARCH_ERROR",payload: res.data.error})
            }else{
                dispatch({type:"SEARCH_SUCCES",payload: res.data.results})
                console.log("respuesta", res.data)
            }
        })
        .catch(error => console.log(error.message))
    }
}

/**

Sets the gender filter for the search results.
@param {string} gender - The gender to filter the search results by.
@return {object} - A Redux action object with the gender as payload.
*/

export const setGenderFilter = (gender) => {
    return dispatch => {dispatch({
        type: SET_GENDER_FILTER,
        payload: gender
        })
    }
  };

/**
 * Sets the race filter for the list of characters.
 * @param {string} race - The race to filter by.
 * @returns {Function} A function that dispatches an action to set the race filter.
 */

export const setRaceFilter = (race) => {
    return dispatch => {dispatch({
        type: SET_RACE_FILTER,
        payload: race
        })
    }
  };
  

/**

Set the intelligence filter for filtering superheroes by intelligence.
@param {number} intelligence - The intelligence level to filter by.
@returns {Function} - The Redux thunk function that dispatches an action to update the intelligence filter.
*/

export const setIntelligenceFilter = (intelligence) => {
    return dispatch => {dispatch({
        type: SET_INTELLIGENCE_FILTER,
        payload: intelligence
        })
    }
  };
