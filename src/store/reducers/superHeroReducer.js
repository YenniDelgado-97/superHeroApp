const initialState = {
    loadingState: true,
    errorState:false,
    error:"",
    superheroes:[],
    searches:[]
}

export const superHeroReducer = (state = initialState, action) => {
    switch(action.type){
        case "SEARCH_SUCCESS":
            return {
                ...state,
                loadingState: true,
                searches:[...state.searches, action.payload]
            }

            case "SEARCH_SUCC":
                return {
                    ...state,
                    loadingState: false,
                    errorState: false,
                    error:"",
                    superheroes:action.payload
                }
            case 'SEARCH_ERROR':
                return{
                    ...state,
                    loadingState: false,
                    errorState: true,
                    error: action.payload
                }

        default:
            return state
    }
}

