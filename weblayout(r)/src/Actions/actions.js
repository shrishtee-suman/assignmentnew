import Axios from "axios";

export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

/**
 * this is fetching the data for .....
 */
export const fetchDataBegins=()=>({
    type:FETCH_DATA_BEGIN
});

/**
 * dfdfdf
 * @param {*} data 
 */
export const fetchDataSuccess=data=>({
    type:FETCH_DATA_SUCCESS,
    payload: { data }
    
});


export const fetchDataFailure=error=>({
    type:FETCH_DATA_FAILURE,
    payload : { error }
});

export const fetchData=()=> {
  console.log("Starting fetch");
    return dispatch => {
      dispatch(fetchDataBegins());
      return Axios.get("https://api.myjson.com/bins/qzkkq")
        .then(json => {
          console.log("success dispatch", json.data);
          dispatch(fetchDataSuccess(json.data));
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }