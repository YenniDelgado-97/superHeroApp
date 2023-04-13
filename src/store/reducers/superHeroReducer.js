const initialState = {
  loadingState: true,
  errorState: false,
  error: "",
  superheroes: [],
  searches: [],
  genderFilter: null,
};

export const superHeroReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_START":
      return {
        ...state,
        loadingState: true,
        searches: [...state.searches, action.payload],
      };

    case "SEARCH_SUCCES":
      return {
        ...state,
        loadingState: false,
        errorState: false,
        error: "",
        superheroes: action.payload,
      };
    case "SEARCH_ERROR":
      return {
        ...state,
        loadingState: false,
        errorState: true,
        error: action.payload,
      };
    case "SET_GENDER_FILTER":
      return {
        ...state,
        genderFilter: action.payload,
      };

    default:
      return state;
  }
};
