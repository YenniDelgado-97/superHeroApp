const initialState = {
    loadingState: false,
    errorState:false,
    error:"",
    superheroes:[],
    searches:[]
}

export const superHeroReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

