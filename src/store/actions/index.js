import axios from "axios";


export const submitSearch = search => {
    return dispatch => {
        dispatch({
            type:"SEARCH_SUCCESS",payload: search
        })
        axios.get(`https://cors-anywhere.herokuapp.com//https://superheroapi.com/api.php/2320801411434388/search/${search}/`,
        // {
        //     headers = {
        //         ":authority": "www.superheroapi.com",
        //         ":method": "GET",
        //         ":path": "/api.php/2320801411434388/search/${search}´,
        //         ":scheme": "https",
        //         "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.7",
        //         "accept-encoding": "gzip, deflate, br",
        //         "accept-language": "es-ES,es;q=0.9",
        //         "cache-control": "max-age=0",
        //         // "sec-ch-ua": ""Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"",
        //         "sec-ch-ua-mobile": "?0",
        //         "sec-ch-ua-platform": "'macOS'",
        //         "sec-fetch-dest": "document",
        //         "sec-fetch-mode": "navigate",
        //         "sec-fetch-site": "none",
        //         "sec-fetch-user": "?1",
        //         "upgrade-insecure-requests": "1",
        //         "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        //         };
        // }
        // {
        //     headers: {
        //         "Accept":	"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        //         "Accept-Encoding":	"gzip, deflate, br",
        //         "Accept-Language":	"es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
        //         "Alt-Used":	"www.superheroapi.com",
        //         "Connection": "keep-alive",
        //         "Host":	"www.superheroapi.com",
        //         "Sec-Fetch-Dest":	"document",
        //         "Sec-Fetch-Mode":	"navigate",
        //         "Sec-Fetch-Site":	"none",
        //         "Sec-Fetch-User":	"?1",
        //         "TE":	"trailers",
        //         "Upgrade-Insecure-Requests":"1",
        //         "User-Agent":	"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0"
        //     }
        //   }
        )

        // https://cors-anywhere.herokuapp.com/
        .then(res => {
            if(res.data.error){
                dispatch({type:"SEARCH_ERROR",payload: res.data.error})
            }else{
                dispatch({type:"SEARCH_SUCCESS",payload: res.data.result})
            }
        })
        .catch(error => console.log(error.message))
    }
}