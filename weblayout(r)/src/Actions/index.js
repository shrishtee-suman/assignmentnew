import Axios from "axios";


const ROOT_URL = `https://api.myjson.com/bins/qzkkq`;

export const FETCH_DATA = "FETCH_DATA";

export const fetchData=()=> {
  const url = `${ROOT_URL}`;
  const request = Axios.get(url);

  return {
    type: FETCH_DATA,
    payload: request
  };
}