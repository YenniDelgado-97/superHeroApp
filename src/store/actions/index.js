import axios from "axios";


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