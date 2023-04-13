import { combineReducers } from "redux";
import { superHeroReducer } from "./superHeroReducer";





/**

The root reducer, responsible for combining all the reducers used in the app.

*/

export default combineReducers({
    superHeroReducer
}

)

